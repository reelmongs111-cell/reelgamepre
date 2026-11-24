import {HERO_MEDIA} from '../data/reelArchiveData.ts';
import {DirectShortcutButton} from './DirectShortcutButton.tsx';

interface HeroSectionProps {
  onNavigate: (href: string) => void;
}

export function HeroSection({onNavigate}: HeroSectionProps) {
  const indexLinks = [
    {label: 'GAME HISTORY', href: '/#history'},
    {label: 'GAME ARCHIVE', href: '/#archive'},
    {label: 'SYMBOL GUIDE', href: '/#symbols'},
    {label: 'LEGAL GUIDE', href: '/#legal'},
  ];

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100vh-4rem)] flex-col justify-between overflow-hidden border-b border-[#34463B] bg-[#080B09]"
    >
      {/* Full-bleed Exhibition Backdrop */}
      <div className="absolute inset-0 -z-10">
        <img
          src={HERO_MEDIA.image}
          alt={HERO_MEDIA.alt}
          referrerPolicy="no-referrer"
          loading="eager"
          className="h-full w-full object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080B09] via-[#080B09]/85 to-[#080B09]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080B09] via-transparent to-[#080B09]/65" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-medium tracking-[0.26em] uppercase text-[#C6A45A] sm:text-base">
            PREMIUM REEL GAME ENCYCLOPEDIA
          </p>

          <h1 className="mt-4 text-3xl font-bold leading-[1.25] tracking-tight text-[#F3F0E7] sm:text-5xl lg:text-[3.35rem] lg:leading-[1.2]">
            한국 릴게임의 역사와 종류,
            <br />
            그 모든 정보를 한곳에.
          </h1>

          <div className="gold-rule my-7 w-40" />

          <p className="max-w-xl text-base leading-relaxed text-[#F3F0E7]/90 sm:text-[19px]">
            릴게임의 기원부터 대표 게임의 특징, 심볼 구성, 역사적 배경과 법적 규제까지.
            게임을 이해하는 데 필요한 정보를 전문적으로 정리합니다.
          </p>

          <div className="mt-9 flex items-center">
            <DirectShortcutButton size="hero" />
          </div>
        </div>
      </div>

      {/* Bottom Category Ribbon & Representational Artwork Note */}
      <div className="border-t border-[#34463B]/80 bg-[#080B09]/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-medium tracking-[0.2em] text-[#E8D29A] sm:text-xs">
            {indexLinks.map((item, idx) => (
              <span key={item.label} className="inline-flex items-center gap-4">
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.href);
                  }}
                  className="transition-colors hover:text-[#F3F0E7] whitespace-nowrap"
                >
                  {item.label}
                </a>
                {idx < indexLinks.length - 1 && (
                  <span aria-hidden="true" className="text-[#34463B]">
                    /
                  </span>
                )}
              </span>
            ))}
          </div>

          <p className="text-[11px] text-[#A9B2AA]">
            {HERO_MEDIA.caption}
          </p>
        </div>
      </div>
    </section>
  );
}
