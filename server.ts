import express from 'express';
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
import {createServer as createViteServer} from 'vite';
import {
  EDITORIAL_META,
  GAMES_DATA,
  GLOBAL_FAQS,
} from './src/data/reelArchiveData.ts';
import {buildRouteSeo, getInfoPageMeta} from './src/utils/seo.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = Number(process.env.PORT || 3000);
const isProduction = process.env.NODE_ENV === 'production';

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getBaseOrigin(req: express.Request): string {
  if (process.env.APP_URL && process.env.APP_URL !== 'MY_APP_URL') {
    return process.env.APP_URL.replace(/\/+$/, '');
  }
  const proto = (req.headers['x-forwarded-proto'] as string) || req.protocol || 'https';
  const host = req.get('host') || `localhost:${PORT}`;
  return `${proto}://${host}`;
}

function renderSeoHeadTags(pathname: string, origin: string): {
  title: string;
  description: string;
  tags: string;
} {
  const seo = buildRouteSeo(pathname, origin);
  const canonicalUrl = `${origin}${seo.canonicalPath === '/' ? '/' : seo.canonicalPath}`;
  const ogImageUrl = `${origin}${seo.image}`;
  const jsonLdScripts = seo.jsonLd
    .map(
      (schema) =>
        `<script type="application/ld+json">${JSON.stringify(schema).replace(/</g, '\\u003c')}</script>`,
    )
    .join('\n    ');

  const tags = [
    `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`,
    `<meta name="keywords" content="${escapeHtml(seo.keywords.join(', '))}" />`,
    `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`,
    `<meta property="og:image" content="${escapeHtml(ogImageUrl)}" />`,
    `<meta property="og:image:alt" content="${escapeHtml(seo.imageAlt)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(ogImageUrl)}" />`,
    jsonLdScripts,
  ].join('\n    ');

  return {
    title: seo.title,
    description: seo.description,
    tags,
  };
}

function renderCrawlerSummary(pathname: string): string {
  const cleanPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  if (cleanPath.startsWith('/games/')) {
    const slug = cleanPath.replace('/games/', '');
    const game = GAMES_DATA.find((item) => item.slug === slug);
    if (game) {
      return `
      <main data-ssr-crawler-summary="true" style="position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;">
        <h1>${escapeHtml(game.titleKo)} (${escapeHtml(game.titleEn)}) — 릴게임 백과</h1>
        <p>${escapeHtml(game.summary)}</p>
        <h2>테마와 배경</h2><p>${escapeHtml(game.themeAndBackground)}</p>
        <h2>역사적 배경</h2><p>${escapeHtml(game.historicalContext)}</p>
        <h2>일반적인 게임 구조</h2><p>${escapeHtml(game.generalStructure)}</p>
        <h2>법적 주의사항</h2><p>${escapeHtml(game.legalCaution)}</p>
      </main>`;
    }
  }

  const infoMeta = getInfoPageMeta(cleanPath);
  if (infoMeta) {
    return `
    <main data-ssr-crawler-summary="true" style="position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;">
      <h1>${escapeHtml(infoMeta.name)} — REEL ARCHIVE</h1>
      <p>${escapeHtml(infoMeta.description)}</p>
    </main>`;
  }

  return `
  <main data-ssr-crawler-summary="true" style="position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;">
    <h1>REEL ARCHIVE — 한국 릴게임의 역사와 종류, 그 모든 정보를 한곳에.</h1>
    <p>${escapeHtml(EDITORIAL_META.policyNote)}</p>
    <ul>
      ${GAMES_DATA.map((g) => `<li><a href="/games/${g.slug}">${escapeHtml(g.titleKo)} (${escapeHtml(g.titleEn)})</a>: ${escapeHtml(g.summary)}</li>`).join('')}
    </ul>
    <section>
      ${GLOBAL_FAQS.map((f) => `<h3>${escapeHtml(f.question)}</h3><p>${escapeHtml(f.answer)}</p>`).join('')}
    </section>
  </main>`;
}

function injectHtmlSeo(template: string, pathname: string, origin: string): string {
  const {title, description, tags} = renderSeoHeadTags(pathname, origin);
  let html = template;

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`);
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeHtml(description)}" />`,
  );
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
  );
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
  );
  html = html.replace('<!--SSR_SEO_HEAD-->', tags);
  html = html.replace('<!--SSR_APP_SHELL-->', renderCrawlerSummary(pathname));
  return html;
}

async function startServer() {
  const app = express();

  app.get('/robots.txt', (req, res) => {
    const origin = getBaseOrigin(req);
    res.type('text/plain; charset=utf-8').send(
      `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`,
    );
  });

  app.get('/sitemap.xml', (req, res) => {
    const origin = getBaseOrigin(req);
    const urls = [
      {loc: `${origin}/`, priority: '1.0', changefreq: 'weekly'},
      ...GAMES_DATA.map((game) => ({
        loc: `${origin}/games/${game.slug}`,
        priority: '0.9',
        changefreq: 'monthly',
      })),
      {loc: `${origin}/about`, priority: '0.6', changefreq: 'monthly'},
      {loc: `${origin}/privacy`, priority: '0.4', changefreq: 'yearly'},
      {loc: `${origin}/terms`, priority: '0.4', changefreq: 'yearly'},
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (entry) => `  <url>
    <loc>${escapeHtml(entry.loc)}</loc>
    <lastmod>${EDITORIAL_META.updatedDate}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>`;

    res.type('application/xml; charset=utf-8').send(xml);
  });

  if (!isProduction) {
    const vite = await createViteServer({
      server: {middlewareMode: true},
      appType: 'spa',
    });

    app.use(async (req, res, next) => {
      const url = req.originalUrl;
      const pathname = req.path || '/';
      const isAssetOrInternal =
        url.startsWith('/src/') ||
        url.startsWith('/@') ||
        url.startsWith('/node_modules') ||
        path.extname(pathname) !== '';

      if (req.method !== 'GET' || isAssetOrInternal) {
        return next();
      }

      try {
        const rawTemplate = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        const transformed = await vite.transformIndexHtml(url, rawTemplate);
        const origin = getBaseOrigin(req);
        const finalHtml = injectHtmlSeo(transformed, pathname, origin);
        res.status(200).set({'Content-Type': 'text/html; charset=utf-8'}).end(finalHtml);
      } catch (err) {
        vite.ssrFixStacktrace(err as Error);
        next(err);
      }
    });

    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(express.static(distDir, {index: false}));

    app.use('*', (req, res) => {
      const distHtmlPath = path.resolve(distDir, 'index.html');
      const rawTemplate = fs.readFileSync(distHtmlPath, 'utf-8');
      const origin = getBaseOrigin(req);
      const pathname = req.path || '/';
      const finalHtml = injectHtmlSeo(rawTemplate, pathname, origin);
      res.status(200).set({'Content-Type': 'text/html; charset=utf-8'}).send(finalHtml);
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`REEL ARCHIVE server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
