import {useState} from 'react';
import {ArrowUpRight} from 'lucide-react';
import {SYMBOL_GALLERY} from '../data/reelArchiveData.ts';
import {DirectShortcutButton} from './DirectShortcutButton.tsx';
import {SymbolEmblem} from './SymbolEmblem.tsx';

interface SymbolArchiveSectionProps {
  onNavigate: (href: string) => void;
}

export function SymbolArchiveSection({onNavigate}: SymbolArchiveSectionProps) {
  const [selectedSlug, setSelectedSlug] = useState(SYMBOL_GALLERY[0].gameSlug);

  const activeGroup =
    SYMBOL_GALLERY.find((g) => g.gameSlug === selectedSlug) || SYMBOL_GALLERY[0];

  return (
    <section
      id="symbols"
      className="border-b border-[#34463B] bg-[#0B100E] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-6 border-b border-[#34463B] pb-6 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono-tabular text-xs tracking-[0.22em] uppercase text-[#C6A45A]">
              SECTION 04 · ICONOGRAPHY & MOTIFS
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-wide text-[#F3F0E7] sm:text-4xl lg:text-5xl">
              SYMBOL ARCHIVE
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#A9B2AA] sm:text-base">
              대표 릴게임에 등장한 주요 심볼을 테마별 도상 아카이브로 정리했습니다. 각 심볼 설명은 작품 세계관과 미술적 모티프 해설을 목적으로 하며, 실제 배당이나 당첨 확률을 의미하지 않습니다.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 lg:items-end">
            <DirectShortcutButton size="section" />
            <div
              role="tablist"
              aria-label="심볼 아카이브 게임 선택"
              className="flex flex-wrap items-center gap-1 border border-[#34463B] bg-[#121D18] p-1"
            >
              {SYMBOL_GALLERY.map((group) => {
                const active = group.gameSlug === activeGroup.gameSlug;
                return (
                  <button
                    key={group.gameSlug}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSelectedSlug(group.gameSlug)}
                    className={`px-3.5 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      active
                        ? 'border border-[#C6A45A]/60 bg-[#09271E] text-[#E8D29A]'
                        : 'border border-transparent text-[#A9B2AA] hover:text-[#F3F0E7]'
                    }`}
                  >
                    {group.gameTitleKo}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Active Game Gallery Banner */}
        <div className="mb-8 flex flex-col justify-between gap-4 border border-[#34463B] bg-[#09271E]/60 px-6 py-5 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-lg font-semibold tracking-wider text-[#E8D29A]">
              {activeGroup.gameTitleKo} · {activeGroup.gameTitleEn}
            </p>
            <p className="mt-1 text-sm text-[#F3F0E7]/85">{activeGroup.themeSummary}</p>
          </div>
          <a
            href={`/games/${activeGroup.gameSlug}`}
            onClick={(e) => {
              e.preventDefault();
              onNavigate(`/games/${activeGroup.gameSlug}`);
            }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E8D29A] transition-colors hover:text-[#F3F0E7] whitespace-nowrap shrink-0"
          >
            <span>{activeGroup.gameTitleKo} 전체 해설 보기</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Gallery Plates */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {activeGroup.symbols.map((sym, idx) => (
            <div
              key={`${activeGroup.gameSlug}-${sym.name}`}
              className="flex flex-col justify-between border border-[#34463B] bg-[#121D18] p-6 transition-colors hover:border-[#C6A45A]/60"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <span className="font-mono-tabular text-[11px] text-[#C6A45A]">
                    PLATE 0{idx + 1}
                  </span>
                  <span className="font-display text-xs tracking-wider uppercase text-[#A9B2AA]">
                    {sym.englishName}
                  </span>
                </div>

                <div className="my-6 flex justify-center">
                  <SymbolEmblem visualKey={sym.visualKey} className="h-24 w-24" />
                </div>

                <h3 className="text-center text-lg font-bold text-[#F3F0E7]">
                  {sym.name}
                </h3>
                <p className="mt-2.5 text-center text-sm leading-relaxed text-[#A9B2AA]">
                  {sym.meaning}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-[#A9B2AA]">
          * 안내: 위 심볼 해설은 문화적·디자인적 테마 상징에 대한 기록이며, 특정 조합의 수익성이나 확률을 암시하지 않습니다.
        </p>
      </div>
    </section>
  );
}
