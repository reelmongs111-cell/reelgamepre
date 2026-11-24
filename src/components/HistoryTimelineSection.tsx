import {useRef, useState} from 'react';
import {ChevronLeft, ChevronRight} from 'lucide-react';
import {HISTORY_TIMELINE} from '../data/reelArchiveData.ts';
import {ArchiveImage} from './ArchiveImage.tsx';
import {DirectShortcutButton} from './DirectShortcutButton.tsx';

export function HistoryTimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const railRef = useRef<HTMLDivElement>(null);

  const activeEra = HISTORY_TIMELINE[activeIndex];

  const handleSelectEra = (index: number) => {
    setActiveIndex(index);
    const rail = railRef.current;
    if (rail) {
      const targetBtn = rail.children[index] as HTMLElement | undefined;
      if (targetBtn) {
        targetBtn.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'center'});
      }
    }
  };

  const stepEra = (delta: number) => {
    const next = Math.max(0, Math.min(HISTORY_TIMELINE.length - 1, activeIndex + delta));
    handleSelectEra(next);
  };

  return (
    <section
      id="history"
      className="border-b border-[#34463B] bg-[#080B09] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 border-b border-[#34463B] pb-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono-tabular text-xs tracking-[0.22em] uppercase text-[#C6A45A]">
              SECTION 03 · CHRONOLOGICAL ARCHIVE
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-wide text-[#F3F0E7] sm:text-4xl lg:text-5xl">
              HISTORY OF REEL GAMES
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <DirectShortcutButton size="section" />
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => stepEra(-1)}
                disabled={activeIndex === 0}
                aria-label="이전 시대 보기"
                className="flex h-10 w-10 items-center justify-center border border-[#34463B] bg-[#121D18] text-[#E8D29A] transition-colors hover:border-[#C6A45A] disabled:opacity-35 cursor-pointer disabled:cursor-not-allowed"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="px-2 font-mono-tabular text-xs text-[#A9B2AA]">
                0{activeIndex + 1} / 0{HISTORY_TIMELINE.length}
              </span>
              <button
                type="button"
                onClick={() => stepEra(1)}
                disabled={activeIndex === HISTORY_TIMELINE.length - 1}
                aria-label="다음 시대 보기"
                className="flex h-10 w-10 items-center justify-center border border-[#34463B] bg-[#121D18] text-[#E8D29A] transition-colors hover:border-[#C6A45A] disabled:opacity-35 cursor-pointer disabled:cursor-not-allowed"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scrollable Era Rail */}
        <div
          ref={railRef}
          className="timeline-scroll mb-10 flex gap-3 overflow-x-auto pb-4"
          role="tablist"
          aria-label="릴게임 역사 연대기 선택"
        >
          {HISTORY_TIMELINE.map((era, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={era.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleSelectEra(idx)}
                className={`min-w-[210px] shrink-0 border px-4 py-4 text-left transition-colors cursor-pointer sm:min-w-[230px] ${
                  isActive
                    ? 'border-[#C6A45A] bg-[#09271E]'
                    : 'border-[#34463B] bg-[#121D18] hover:border-[#C6A45A]/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono-tabular text-[11px] text-[#C6A45A]">
                    0{idx + 1}
                  </span>
                  <span className="text-[11px] text-[#A9B2AA]">{era.period}</span>
                </div>
                <p
                  className={`mt-2 text-sm font-semibold ${
                    isActive ? 'text-[#E8D29A]' : 'text-[#F3F0E7]'
                  }`}
                >
                  {era.title}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Era Exhibition Stage */}
        <div className="grid grid-cols-1 gap-8 border border-[#34463B] bg-[#121D18] p-6 sm:p-8 lg:grid-cols-12">
          <div className={activeEra.image ? 'lg:col-span-7' : 'lg:col-span-12'}>
            <div className="flex flex-wrap items-center gap-3 text-xs text-[#A9B2AA]">
              <span className="font-mono-tabular text-[#C6A45A]">{activeEra.period}</span>
              <span aria-hidden="true">/</span>
              <span className="font-display tracking-wider uppercase text-[#E8D29A]">
                {activeEra.subtitle}
              </span>
            </div>

            <h3 className="mt-3 text-2xl font-bold text-[#F3F0E7] sm:text-3xl">
              {activeEra.title}
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-[1.85] text-[#F3F0E7]/90 sm:text-base">
              {activeEra.summary}
            </p>

            <div className="mt-6 border-t border-[#34463B] pt-5">
              <h4 className="text-xs font-semibold tracking-wider uppercase text-[#C6A45A]">
                주요 역사적 사실
              </h4>
              <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-[#A9B2AA]">
                {activeEra.keyFacts.map((fact) => (
                  <li key={fact} className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 bg-[#C6A45A]" aria-hidden="true" />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 border-t border-[#34463B]/70 pt-4 text-xs text-[#A9B2AA]">
              {activeEra.sourceLabel}
            </p>
          </div>

          {activeEra.image && (
            <div className="lg:col-span-5">
              <ArchiveImage
                src={activeEra.image}
                alt={activeEra.imageAlt || activeEra.title}
                caption={activeEra.imageCaption}
                aspectClassName="aspect-[4/3]"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
