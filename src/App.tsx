import {useCallback, useEffect, useState} from 'react';
import {GAMES_DATA} from './data/reelArchiveData.ts';
import {buildRouteSeo} from './utils/seo.ts';
import {Header} from './components/Header.tsx';
import {SearchModal} from './components/SearchModal.tsx';
import {HeroSection} from './components/HeroSection.tsx';
import {WorldOfReelGamesSection} from './components/WorldOfReelGamesSection.tsx';
import {GameArchiveSection} from './components/GameArchiveSection.tsx';
import {HistoryTimelineSection} from './components/HistoryTimelineSection.tsx';
import {SymbolArchiveSection} from './components/SymbolArchiveSection.tsx';
import {ComparisonSection} from './components/ComparisonSection.tsx';
import {LegalSafetySection} from './components/LegalSafetySection.tsx';
import {FaqSection} from './components/FaqSection.tsx';
import {GameDetailPage} from './components/GameDetailPage.tsx';
import {InfoPage} from './components/InfoPage.tsx';
import {Footer} from './components/Footer.tsx';
import {BackToTopButton} from './components/BackToTopButton.tsx';

const SECTION_IDS = [
  'home',
  'encyclopedia',
  'archive',
  'history',
  'symbols',
  'comparison',
  'legal',
  'faq',
];

function syncClientSeo(pathname: string) {
  const seo = buildRouteSeo(pathname, window.location.origin);
  document.title = seo.title;

  const setMeta = (selector: string, content: string) => {
    const el = document.querySelector(selector);
    if (el) el.setAttribute('content', content);
  };

  setMeta('meta[name="description"]', seo.description);
  setMeta('meta[property="og:title"]', seo.title);
  setMeta('meta[property="og:description"]', seo.description);
  setMeta('meta[name="twitter:title"]', seo.title);
  setMeta('meta[name="twitter:description"]', seo.description);

  const canonicalUrl = `${window.location.origin}${
    seo.canonicalPath === '/' ? '/' : seo.canonicalPath
  }`;
  let canonicalEl = document.querySelector('link[rel="canonical"]');
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', canonicalUrl);

  // Replace dynamic client JSON-LD scripts cleanly
  document
    .querySelectorAll('script[type="application/ld+json"]')
    .forEach((node) => node.remove());

  seo.jsonLd.forEach((schema) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  });
}

export default function App() {
  const [pathname, setPathname] = useState(() => window.location.pathname || '/');
  const [activeSectionId, setActiveSectionId] = useState('home');
  const [searchOpen, setSearchOpen] = useState(false);

  const scrollToHash = useCallback((hash: string) => {
    const id = hash.replace(/^#/, '');
    if (!id) {
      window.scrollTo({top: 0, behavior: 'smooth'});
      return;
    }
    window.requestAnimationFrame(() => {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    });
  }, []);

  const handleNavigate = useCallback(
    (href: string) => {
      const [rawPath, rawHash] = href.split('#');
      const targetPath = rawPath || '/';
      const cleanCurrent = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
      const cleanTarget = targetPath === '/' ? '/' : targetPath.replace(/\/+$/, '');

      if (cleanCurrent !== cleanTarget) {
        window.history.pushState({}, '', href);
        setPathname(cleanTarget);
        if (rawHash) {
          window.setTimeout(() => scrollToHash(rawHash), 60);
        } else {
          window.scrollTo({top: 0, behavior: 'auto'});
        }
      } else if (rawHash) {
        window.history.replaceState({}, '', href);
        scrollToHash(rawHash);
      } else {
        window.scrollTo({top: 0, behavior: 'smooth'});
      }
    },
    [pathname, scrollToHash],
  );

  // Sync browser back/forward
  useEffect(() => {
    const onPopState = () => {
      setPathname(window.location.pathname || '/');
      if (window.location.hash) {
        window.setTimeout(() => scrollToHash(window.location.hash), 60);
      } else {
        window.scrollTo({top: 0, behavior: 'auto'});
      }
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [scrollToHash]);

  // Handle initial hash on mount
  useEffect(() => {
    if (window.location.hash) {
      window.setTimeout(() => scrollToHash(window.location.hash), 80);
    }
  }, [scrollToHash]);

  // Synchronize document title, meta tags & JSON-LD on navigation
  useEffect(() => {
    syncClientSeo(pathname);
  }, [pathname]);

  // Track active section on homepage scroll for gold underline indicator
  useEffect(() => {
    if (pathname !== '/') return;

    const handleScrollSpy = () => {
      const scrollMarker = window.scrollY + 140;
      let current = 'home';

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollMarker) {
          current = id;
        }
      }
      // Map 'symbols' to 'archive' highlight or keep precise
      setActiveSectionId(current === 'symbols' ? 'archive' : current);
    };

    handleScrollSpy();
    window.addEventListener('scroll', handleScrollSpy, {passive: true});
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [pathname]);

  const cleanPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  const matchedGame = cleanPath.startsWith('/games/')
    ? GAMES_DATA.find((g) => g.slug === cleanPath.replace('/games/', ''))
    : undefined;

  const isInfoPage =
    cleanPath === '/about' || cleanPath === '/privacy' || cleanPath === '/terms';

  return (
    <div className="min-h-screen bg-[#080B09] text-[#F3F0E7] flex flex-col">
      <Header
        currentPath={cleanPath}
        activeSectionId={activeSectionId}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchOpen(true)}
      />

      <main className="flex-1">
        {matchedGame ? (
          <GameDetailPage game={matchedGame} onNavigate={handleNavigate} />
        ) : isInfoPage ? (
          <InfoPage
            path={cleanPath as '/about' | '/privacy' | '/terms'}
            onNavigate={handleNavigate}
          />
        ) : (
          <>
            <HeroSection onNavigate={handleNavigate} />
            <WorldOfReelGamesSection />
            <GameArchiveSection onNavigate={handleNavigate} />
            <HistoryTimelineSection />
            <SymbolArchiveSection onNavigate={handleNavigate} />
            <ComparisonSection />
            <LegalSafetySection />
            <FaqSection />
          </>
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
      <BackToTopButton />
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
