import {
  EDITORIAL_META,
  GAMES_DATA,
  GLOBAL_FAQS,
  HERO_MEDIA,
  type GameEntry,
} from '../data/reelArchiveData.ts';

export interface RouteSeoMetadata {
  title: string;
  description: string;
  canonicalPath: string;
  ogType: 'website' | 'article';
  image: string;
  imageAlt: string;
  keywords: string[];
  jsonLd: Record<string, unknown>[];
}

export function getInfoPageMeta(path: string): {
  title: string;
  description: string;
  name: string;
} | null {
  switch (path) {
    case '/about':
      return {
        name: '사이트 소개',
        title: '사이트 소개 및 편집 원칙 | REEL ARCHIVE',
        description:
          'REEL ARCHIVE의 편찬 목적, 역사적 사실과 법률 정보 검증 기준, 비영리 아카이브 운영 원칙을 소개합니다.',
      };
    case '/privacy':
      return {
        name: '개인정보처리방침',
        title: '개인정보처리방침 | REEL ARCHIVE',
        description:
          '회원가입 및 개인정보 수집 기능을 두지 않는 REEL ARCHIVE의 개인정보 비수집 원칙과 안내 사항입니다.',
      };
    case '/terms':
      return {
        name: '이용약관',
        title: '이용약관 및 면책 고지 | REEL ARCHIVE',
        description:
          'REEL ARCHIVE 콘텐츠의 정보 제공 목적, 저작권, 법적 면책 및 이용자 준수사항을 안내합니다.',
      };
    default:
      return null;
  }
}

export function buildRouteSeo(pathname: string, origin: string): RouteSeoMetadata {
  const cleanPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  const baseUrl = origin.replace(/\/+$/, '');

  const organizationNode = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: EDITORIAL_META.brand,
    alternateName: '릴 아카이브 매거진',
    url: baseUrl,
    description:
      '한국 릴게임의 역사와 대표 게임 8종, 심볼 아카이브, 슬롯머신 비교 및 게임산업법 정보를 제공하는 전문 백과 매거진',
  };

  const websiteNode = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: EDITORIAL_META.brand,
    url: baseUrl,
    inLanguage: 'ko-KR',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  if (cleanPath.startsWith('/games/')) {
    const slug = cleanPath.replace('/games/', '');
    const game: GameEntry | undefined = GAMES_DATA.find((g) => g.slug === slug);

    if (game) {
      const canonicalUrl = `${baseUrl}/games/${game.slug}`;
      const imageUrl = `${baseUrl}${game.heroImage}`;

      const breadcrumbNode = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'HOME',
            item: `${baseUrl}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: '릴게임 백과',
            item: `${baseUrl}/#archive`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: game.titleKo,
            item: canonicalUrl,
          },
        ],
      };

      const imageNode = {
        '@context': 'https://schema.org',
        '@type': 'ImageObject',
        url: imageUrl,
        caption: game.imageCaption,
        name: `${game.titleKo} (${game.titleEn}) 아카이브 이미지`,
      };

      const articleNode = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: game.seo.title,
        description: game.seo.description,
        inLanguage: 'ko-KR',
        datePublished: EDITORIAL_META.publishedDate,
        dateModified: EDITORIAL_META.updatedDate,
        mainEntityOfPage: canonicalUrl,
        image: imageUrl,
        author: {
          '@type': 'Organization',
          name: EDITORIAL_META.editorialDepartment,
        },
        publisher: {
          '@type': 'Organization',
          name: EDITORIAL_META.brand,
        },
      };

      const faqNode =
        game.faqs.length > 0
          ? {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: game.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            }
          : null;

      return {
        title: game.seo.title,
        description: game.seo.description,
        canonicalPath: `/games/${game.slug}`,
        ogType: 'article',
        image: game.heroImage,
        imageAlt: game.imageAlt,
        keywords: game.seo.keywords,
        jsonLd: [
          organizationNode,
          websiteNode,
          breadcrumbNode,
          imageNode,
          articleNode,
          ...(faqNode ? [faqNode] : []),
        ],
      };
    }
  }

  const infoMeta = getInfoPageMeta(cleanPath);
  if (infoMeta) {
    const canonicalUrl = `${baseUrl}${cleanPath}`;
    return {
      title: infoMeta.title,
      description: infoMeta.description,
      canonicalPath: cleanPath,
      ogType: 'website',
      image: HERO_MEDIA.image,
      imageAlt: HERO_MEDIA.alt,
      keywords: ['REEL ARCHIVE', infoMeta.name, '릴게임 백과'],
      jsonLd: [
        organizationNode,
        websiteNode,
        {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: infoMeta.title,
          description: infoMeta.description,
          url: canonicalUrl,
          inLanguage: 'ko-KR',
          dateModified: EDITORIAL_META.updatedDate,
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'HOME', item: `${baseUrl}/` },
            { '@type': 'ListItem', position: 2, name: infoMeta.name, item: canonicalUrl },
          ],
        },
      ],
    };
  }

  const homeUrl = `${baseUrl}/`;
  return {
    title: '릴게임 | 아케이드 변천사·대표작 8종·심볼 분석',
    description:
      '릴게임의 기계적 기원부터 바다이야기·오션파라다이스·야마토·황금성 등 주요 8개 기종의 도상 해설, 카지노 슬롯과의 구조 대비, 게임산업법 등급분류 및 불법 사이트 식별 기준까지 정밀 기록한 전문 아카이브 매거진.',
    canonicalPath: '/',
    ogType: 'website',
    image: HERO_MEDIA.image,
    imageAlt: HERO_MEDIA.alt,
    keywords: [
      '릴게임',
      '한국 릴게임',
      '릴게임 아카이브',
      '릴게임 역사',
      '릴게임 기종',
      '릴게임 규제',
      '바다이야기',
      '오션파라다이스',
      '야마토',
      '황금성',
    ],
    jsonLd: [
      organizationNode,
      websiteNode,
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: '릴게임 | 아케이드 변천사·대표작 8종·심볼 분석',
        url: homeUrl,
        inLanguage: 'ko-KR',
        datePublished: EDITORIAL_META.publishedDate,
        dateModified: EDITORIAL_META.updatedDate,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'ImageObject',
        url: `${baseUrl}${HERO_MEDIA.image}`,
        caption: HERO_MEDIA.caption,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: GLOBAL_FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };
}
