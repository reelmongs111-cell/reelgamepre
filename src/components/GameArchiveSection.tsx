import {useState} from 'react';
import {ArrowUpRight} from 'lucide-react';
import {GAMES_DATA, type GameThemeCategory} from '../data/reelArchiveData.ts';
import {ArchiveImage} from './ArchiveImage.tsx';
import {DirectShortcutButton} from './DirectShortcutButton.tsx';
import {SymbolEmblem} from './SymbolEmblem.tsx';

interface GameArchiveSectionProps {
  onNavigate: (href: string) => void;
}

const FILTER_OPTIONS: Array<'전체' | GameThemeCategory> = [
  '전체',
  '해양·항해',
  '신화·황금',
  '클래식 메달',
];

export function GameArchiveSection({onNavigate}: GameArchiveSectionProps) {
  const [selectedTheme, setSelectedTheme] = useState<'전체' | GameThemeCategory>('전체');

  const filteredGames =
    selectedTheme === '전체'
      ? GAMES_DATA
      : GAMES_DATA.filter((g) => g.themeCategory === selectedTheme);

  const [leadGame, ...secondaryGames] = filteredGames;

  return (
    <section
      id="archive"
      className="border-b border-[#34463B] bg-[#0B100E] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header + Interactive Theme Filter */}
        <div className="mb-12 flex flex-col justify-between gap-6 border-b border-[#34463B] pb-6 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono-tabular text-xs tracking-[0.22em] uppercase text-[#C6A45A]">
              SECTION 02 · CURATED CATALOGUE OF 8 TITLES
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-wide text-[#F3F0E7] sm:text-4xl lg:text-5xl">
              THE GAME ARCHIVE
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#A9B2AA] sm:text-base">
              한국 아케이드 릴게임 시대를 대표하는 8종의 주요 타이틀을 테마와 역사적 맥락에 따라 아카이빙했습니다. 각 항목을 선택하면 상세 심볼과 기기 특징, 법적 주의사항을 확인할 수 있습니다.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 lg:items-end">
            <DirectShortcutButton size="section" />
            <div
              role="tablist"
              aria-label="릴게임 테마 분류 필터"
              className="flex flex-wrap items-center gap-1 border border-[#34463B] bg-[#121D18] p-1"
            >
              {FILTER_OPTIONS.map((option) => {
                const active = selectedTheme === option;
                return (
                  <button
                    key={option}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSelectedTheme(option)}
                    className={`px-3.5 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      active
                        ? 'bg-[#09271E] text-[#E8D29A] border border-[#C6A45A]/50'
                        : 'text-[#A9B2AA] hover:text-[#F3F0E7] border border-transparent'
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tier 1: Lead Exhibition Feature */}
        {leadGame && (
          <article className="mb-12 grid grid-cols-1 items-stretch gap-8 border border-[#34463B] bg-[#121D18] p-6 sm:p-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <ArchiveImage
                src={leadGame.heroImage}
                alt={leadGame.imageAlt}
                caption={leadGame.imageCaption}
                aspectClassName="aspect-[4/3] lg:h-full"
              />
            </div>

            <div className="flex flex-col justify-between lg:col-span-6 lg:pl-4">
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#A9B2AA]">
                  <span className="font-mono-tabular text-[#C6A45A]">
                    {leadGame.accessionCode}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{leadGame.era}</span>
                  <span aria-hidden="true">·</span>
                  <span>{leadGame.themeCategory}</span>
                </div>

                <h3 className="mt-3 text-2xl font-bold text-[#F3F0E7] sm:text-3xl">
                  {leadGame.titleKo}{' '}
                  <span className="ml-1 font-display text-xl font-medium tracking-wider text-[#E8D29A] sm:text-2xl">
                    {leadGame.titleEn}
                  </span>
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-[#F3F0E7]/85 sm:text-base">
                  {leadGame.summary}
                </p>

                <div className="mt-6 border-t border-[#34463B] pt-5">
                  <p className="mb-3 text-xs font-medium tracking-wider uppercase text-[#C6A45A]">
                    대표 심볼 구성
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    {leadGame.symbols.slice(0, 5).map((sym) => (
                      <div key={sym.name} className="flex items-center gap-2.5 pr-2">
                        <SymbolEmblem visualKey={sym.visualKey} className="h-10 w-10" />
                        <span className="text-xs font-medium text-[#F3F0E7]">
                          {sym.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#34463B] pt-5">
                <span className="font-mono-tabular text-xs text-[#A9B2AA]">
                  {leadGame.reelSpec}
                </span>
                <a
                  href={`/games/${leadGame.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(`/games/${leadGame.slug}`);
                  }}
                  className="inline-flex min-h-[42px] items-center gap-2 border border-[#C6A45A] bg-[#09271E] px-5 py-2.5 text-xs font-semibold tracking-wide text-[#E8D29A] transition-colors hover:bg-[#104333] whitespace-nowrap shrink-0"
                >
                  <span>상세 아카이브 보기</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </article>
        )}

        {/* Tier 2 & 3: Asymmetric Exhibition Grid / Archival Ledger */}
        {secondaryGames.length > 0 && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {secondaryGames.map((game, index) => (
              <article
                key={game.slug}
                className={`group flex flex-col justify-between border border-[#34463B] bg-[#121D18]/85 p-6 transition-colors duration-200 hover:border-[#C6A45A]/70 ${
                  index === secondaryGames.length - 1 && secondaryGames.length % 2 === 1
                    ? 'md:col-span-2 md:flex-row md:items-center md:gap-8'
                    : ''
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-[#A9B2AA]">
                        <span className="font-mono-tabular text-[#C6A45A]">
                          {game.accessionCode}
                        </span>
                        <span aria-hidden="true">/</span>
                        <span>{game.era}</span>
                        <span aria-hidden="true">/</span>
                        <span>{game.themeCategory}</span>
                      </div>

                      <h3 className="mt-2.5 text-xl font-bold text-[#F3F0E7] sm:text-2xl">
                        <a
                          href={`/games/${game.slug}`}
                          onClick={(e) => {
                            e.preventDefault();
                            onNavigate(`/games/${game.slug}`);
                          }}
                          className="transition-colors group-hover:text-[#E8D29A]"
                        >
                          {game.titleKo}
                        </a>
                        <span className="ml-2 font-display text-base font-medium tracking-wider text-[#C6A45A]">
                          {game.titleEn}
                        </span>
                      </h3>
                    </div>

                    <SymbolEmblem
                      visualKey={game.symbols[0].visualKey}
                      className="h-12 w-12 shrink-0"
                    />
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-[#A9B2AA]">
                    {game.summary}
                  </p>
                </div>

                <div
                  className={`mt-5 flex items-center justify-between gap-4 border-t border-[#34463B]/80 pt-4 ${
                    index === secondaryGames.length - 1 && secondaryGames.length % 2 === 1
                      ? 'md:mt-0 md:w-64 md:shrink-0 md:flex-col md:items-end md:border-l md:border-t-0 md:pl-8 md:pt-0'
                      : ''
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#F3F0E7]/75">
                    {game.symbols.slice(0, 4).map((sym, symIdx) => (
                      <span key={sym.name} className="inline-flex items-center gap-2">
                        <span>{sym.name}</span>
                        {symIdx < Math.min(game.symbols.length, 4) - 1 && (
                          <span aria-hidden="true" className="text-[#34463B]">
                            ·
                          </span>
                        )}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`/games/${game.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(`/games/${game.slug}`);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E8D29A] transition-colors hover:text-[#F3F0E7] whitespace-nowrap shrink-0"
                  >
                    <span>문서 열기</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
