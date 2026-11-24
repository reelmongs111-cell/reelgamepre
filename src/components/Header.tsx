import {useEffect, useState} from 'react';
import {Menu, Search, X} from 'lucide-react';
import {DirectShortcutButton} from './DirectShortcutButton.tsx';

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const HEADER_NAV_ITEMS: NavItem[] = [
  {id: 'home', label: 'HOME', href: '/#home'},
  {id: 'encyclopedia', label: '릴게임 백과', href: '/#encyclopedia'},
  {id: 'history', label: '게임의 역사', href: '/#history'},
  {id: 'archive', label: '게임 종류', href: '/#archive'},
  {id: 'comparison', label: '슬롯머신 비교', href: '/#comparison'},
  {id: 'legal', label: '법률 및 규제', href: '/#legal'},
  {id: 'faq', label: 'FAQ', href: '/#faq'},
];

interface HeaderProps {
  currentPath: string;
  activeSectionId: string;
  onNavigate: (href: string) => void;
  onOpenSearch: () => void;
}

export function Header({
  currentPath,
  activeSectionId,
  onNavigate,
  onOpenSearch,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleLinkClick = (href: string) => {
    setMobileOpen(false);
    onNavigate(href);
  };

  const isNavActive = (itemId: string) => {
    if (currentPath.startsWith('/games/')) {
      return itemId === 'archive';
    }
    if (currentPath !== '/') {
      return false;
    }
    return activeSectionId === itemId;
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b transition-colors duration-200 ${
          isScrolled
            ? 'border-[#C6A45A]/35 bg-[#080B09]/95 backdrop-blur-md'
            : 'border-[#C6A45A]/20 bg-[#080B09]/85 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8 xl:gap-8">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/#home');
            }}
            className="font-display text-xl font-semibold tracking-[0.18em] text-[#E8D29A] transition-colors hover:text-[#F3F0E7] whitespace-nowrap shrink-0"
          >
            REEL ARCHIVE
          </a>

          <nav
            aria-label="주요 메뉴"
            className="hidden lg:flex items-center gap-4 xl:gap-6"
          >
            {HEADER_NAV_ITEMS.map((item) => {
              const active = isNavActive(item.id);
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                  className={`relative py-2 text-[13px] font-medium tracking-wide transition-colors whitespace-nowrap shrink-0 ${
                    active ? 'text-[#E8D29A]' : 'text-[#F3F0E7]/85 hover:text-[#E8D29A]'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-0 bottom-0 h-[1.5px] bg-[#C6A45A] transition-transform duration-200 origin-left ${
                      active ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5 shrink-0">
            <DirectShortcutButton size="header" className="hidden sm:inline-flex" />
            <button
              type="button"
              onClick={onOpenSearch}
              aria-label="게임 및 아카이브 검색 열기"
              className="flex h-10 w-10 items-center justify-center rounded-sm border border-[#34463B] bg-[#121D18] text-[#E8D29A] transition-colors hover:border-[#C6A45A] hover:bg-[#09271E] cursor-pointer"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="모바일 메뉴 열기"
              aria-expanded={mobileOpen}
              className="flex h-11 w-11 items-center justify-center rounded-sm border border-[#34463B] bg-[#121D18] text-[#F3F0E7] transition-colors hover:border-[#C6A45A] lg:hidden cursor-pointer"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-200 ${
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-[#080B09]/80 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-80 max-w-[85vw] flex-col border-l border-[#C6A45A]/30 bg-[#09271E] p-6 shadow-2xl transition-transform duration-300 ease-out ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          aria-label="모바일 내비게이션 드로어"
        >
          <div className="flex items-center justify-between border-b border-[#34463B] pb-4">
            <span className="font-display text-lg font-semibold tracking-[0.16em] text-[#E8D29A]">
              REEL ARCHIVE
            </span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="모바일 메뉴 닫기"
              className="flex h-11 w-11 items-center justify-center rounded-sm border border-[#34463B] text-[#F3F0E7] hover:border-[#C6A45A] cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="mt-6 flex flex-col gap-1">
            {HEADER_NAV_ITEMS.map((item) => {
              const active = isNavActive(item.id);
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                  className={`flex min-h-[44px] items-center justify-between border-b border-[#34463B]/60 px-2 py-3 text-base font-medium transition-colors ${
                    active ? 'text-[#E8D29A]' : 'text-[#F3F0E7] hover:text-[#E8D29A]'
                  }`}
                >
                  <span>{item.label}</span>
                  {active && <span className="text-xs font-mono-tabular text-[#C6A45A]">ACTIVE</span>}
                </a>
              );
            })}
          </nav>

          <div className="mt-auto space-y-4 border-t border-[#34463B] pt-5 text-xs leading-relaxed text-[#A9B2AA]">
            <DirectShortcutButton size="drawer" />
            <div>
              <p className="font-display tracking-widest text-[#C6A45A]">PREMIUM GAME ENCYCLOPEDIA</p>
              <p className="mt-1.5">
                한국 릴게임의 역사와 대표 게임, 심볼 문화 및 게임산업법 정보를 중립적으로 제공합니다.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
