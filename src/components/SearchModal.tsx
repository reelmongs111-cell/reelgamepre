import {useEffect, useMemo, useRef, useState} from 'react';
import {ArrowRight, Search, X} from 'lucide-react';
import {GAMES_DATA, GLOBAL_FAQS, HISTORY_TIMELINE} from '../data/reelArchiveData.ts';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (href: string) => void;
}

export function SearchModal({isOpen, onClose, onNavigate}: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      const timer = window.setTimeout(() => inputRef.current?.focus(), 40);
      return () => window.clearTimeout(timer);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  const trimmed = query.trim().toLowerCase();

  const matchedGames = useMemo(() => {
    if (!trimmed) return GAMES_DATA;
    return GAMES_DATA.filter(
      (g) =>
        g.titleKo.toLowerCase().includes(trimmed) ||
        g.titleEn.toLowerCase().includes(trimmed) ||
        g.summary.toLowerCase().includes(trimmed) ||
        g.themeCategory.toLowerCase().includes(trimmed) ||
        g.symbols.some(
          (s) =>
            s.name.toLowerCase().includes(trimmed) ||
            s.englishName.toLowerCase().includes(trimmed),
        ),
    );
  }, [trimmed]);

  const matchedHistory = useMemo(() => {
    if (!trimmed) return [];
    return HISTORY_TIMELINE.filter(
      (h) =>
        h.title.toLowerCase().includes(trimmed) ||
        h.period.toLowerCase().includes(trimmed) ||
        h.summary.toLowerCase().includes(trimmed),
    );
  }, [trimmed]);

  const matchedFaqs = useMemo(() => {
    if (!trimmed) return [];
    return GLOBAL_FAQS.filter(
      (f) =>
        f.question.toLowerCase().includes(trimmed) ||
        f.answer.toLowerCase().includes(trimmed),
    );
  }, [trimmed]);

  if (!isOpen) return null;

  const handleSelect = (href: string) => {
    onClose();
    onNavigate(href);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-[#080B09]/85 px-4 pt-16 backdrop-blur-md sm:pt-24"
      role="dialog"
      aria-modal="true"
      aria-label="아카이브 검색"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl border border-[#C6A45A]/45 bg-[#121D18] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-[#34463B] px-5 py-4">
          <Search className="h-5 w-5 shrink-0 text-[#C6A45A]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="게임명(바다이야기, 황금성), 심볼(고래, 램프), 법률·역사 키워드 검색..."
            aria-label="아카이브 검색어 입력"
            className="w-full bg-transparent text-sm text-[#F3F0E7] placeholder:text-[#A9B2AA]/70 focus:outline-none sm:text-base"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="검색창 닫기"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-[#34463B] text-[#A9B2AA] hover:border-[#C6A45A] hover:text-[#F3F0E7] cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="max-h-[65vh] overflow-y-auto px-5 py-4">
          <div className="mb-3 flex items-center justify-between text-xs text-[#A9B2AA]">
            <span>{trimmed ? `검색 결과 · 게임 ${matchedGames.length}건` : '대표 아카이브 8종 바로가기'}</span>
            <span className="font-mono-tabular text-[#C6A45A]">ESC 닫기</span>
          </div>

          {matchedGames.length === 0 && matchedHistory.length === 0 && matchedFaqs.length === 0 ? (
            <div className="border border-[#34463B] bg-[#080B09]/50 p-8 text-center">
              <p className="text-sm text-[#F3F0E7]">일치하는 아카이브 항목을 찾지 못했습니다.</p>
              <p className="mt-1.5 text-xs text-[#A9B2AA]">
                바다이야기, 오션파라다이스, 야마토, 황금성, 알라딘, 신천지, 체리마스터, 손오공 등으로 검색해 보세요.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {matchedGames.length > 0 && (
                <div>
                  <p className="mb-2 text-[11px] font-medium tracking-widest uppercase text-[#C6A45A]">
                    THE GAME ARCHIVE
                  </p>
                  <ul className="divide-y divide-[#34463B]/70 border border-[#34463B] bg-[#080B09]/40">
                    {matchedGames.map((game) => (
                      <li key={game.slug}>
                        <button
                          type="button"
                          onClick={() => handleSelect(`/games/${game.slug}`)}
                          className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left transition-colors hover:bg-[#09271E] cursor-pointer"
                        >
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 text-xs text-[#A9B2AA]">
                              <span className="font-mono-tabular text-[#C6A45A]">
                                {game.accessionCode}
                              </span>
                              <span aria-hidden="true">·</span>
                              <span>{game.era}</span>
                            </div>
                            <p className="mt-0.5 truncate text-sm font-semibold text-[#F3F0E7]">
                              {game.titleKo}{' '}
                              <span className="font-display font-normal text-[#E8D29A]">
                                {game.titleEn}
                              </span>
                            </p>
                          </div>
                          <ArrowRight className="h-4 w-4 shrink-0 text-[#C6A45A]" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {matchedHistory.length > 0 && (
                <div>
                  <p className="mb-2 text-[11px] font-medium tracking-widest uppercase text-[#C6A45A]">
                    HISTORY TIMELINE
                  </p>
                  <ul className="divide-y divide-[#34463B]/70 border border-[#34463B] bg-[#080B09]/40">
                    {matchedHistory.map((era) => (
                      <li key={era.id}>
                        <button
                          type="button"
                          onClick={() => handleSelect('/#history')}
                          className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left transition-colors hover:bg-[#09271E] cursor-pointer"
                        >
                          <div>
                            <p className="text-xs text-[#C6A45A]">{era.period}</p>
                            <p className="text-sm font-medium text-[#F3F0E7]">{era.title}</p>
                          </div>
                          <ArrowRight className="h-4 w-4 shrink-0 text-[#C6A45A]" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {matchedFaqs.length > 0 && (
                <div>
                  <p className="mb-2 text-[11px] font-medium tracking-widest uppercase text-[#C6A45A]">
                    FAQ ARCHIVE
                  </p>
                  <ul className="divide-y divide-[#34463B]/70 border border-[#34463B] bg-[#080B09]/40">
                    {matchedFaqs.map((faq) => (
                      <li key={faq.id}>
                        <button
                          type="button"
                          onClick={() => handleSelect('/#faq')}
                          className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left transition-colors hover:bg-[#09271E] cursor-pointer"
                        >
                          <p className="text-sm font-medium text-[#F3F0E7]">{faq.question}</p>
                          <ArrowRight className="h-4 w-4 shrink-0 text-[#C6A45A]" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
