import {EDITORIAL_META, GAMES_DATA} from '../data/reelArchiveData.ts';

interface FooterProps {
  onNavigate: (href: string) => void;
}

export function Footer({onNavigate}: FooterProps) {
  const footerMenu = [
    {label: '사이트 소개', href: '/about'},
    {label: '릴게임 백과', href: '/#archive'},
    {label: '게임 역사', href: '/#history'},
    {label: '법률 및 규제', href: '/#legal'},
    {label: 'FAQ', href: '/#faq'},
    {label: '개인정보처리방침', href: '/privacy'},
    {label: '이용약관', href: '/terms'},
  ];

  return (
    <footer className="border-t border-[#C6A45A]/30 bg-gradient-to-b from-[#09271E] to-[#080B09] text-[#F3F0E7]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 border-b border-[#34463B] pb-12 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/#home');
              }}
              className="font-display text-2xl font-semibold tracking-[0.2em] text-[#E8D29A]"
            >
              REEL ARCHIVE
            </a>
            <p className="mt-1 font-display text-xs tracking-[0.22em] uppercase text-[#C6A45A]">
              Premium Reel Game Encyclopedia
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#A9B2AA]">
              릴게임의 역사와 종류, 구조 및 관련 법률 정보를 제공하는 전문 정보 아카이브입니다.
            </p>
            <p className="mt-4 font-mono-tabular text-xs text-[#A9B2AA]">
              편집: {EDITORIAL_META.editorialDepartment} · 최종 검토: {EDITORIAL_META.updatedDate}
            </p>
          </div>

          {/* Archive Quick Links */}
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#C6A45A]">
              대표 아카이브 8종
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
              {GAMES_DATA.map((game) => (
                <li key={game.slug}>
                  <a
                    href={`/games/${game.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(`/games/${game.slug}`);
                    }}
                    className="text-[#F3F0E7]/85 transition-colors hover:text-[#E8D29A]"
                  >
                    {game.titleKo}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Site Navigation Links */}
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#C6A45A]">
              메뉴 및 정책
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footerMenu.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.href);
                    }}
                    className="text-[#F3F0E7]/85 transition-colors hover:text-[#E8D29A]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal Notice & Copyright */}
        <div className="mt-8 flex flex-col justify-between gap-4 text-xs leading-relaxed text-[#A9B2AA] lg:flex-row lg:items-center">
          <p className="max-w-3xl">
            본 사이트는 정보 제공을 목적으로 운영됩니다. 불법 사행 행위나 무허가 게임 서비스 이용을 권장하지 않습니다. 법률 및 제도 정보는 관련 공식 기관의 최신 자료를 확인하시기 바랍니다.
          </p>
          <p className="font-mono-tabular shrink-0 text-[#E8D29A]/80">
            © 2026 REEL ARCHIVE
          </p>
        </div>
      </div>
    </footer>
  );
}
