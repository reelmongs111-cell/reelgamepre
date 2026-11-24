import {useState} from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  ChevronRight,
  History,
  Minus,
  Plus,
  Scale,
} from 'lucide-react';
import {
  EDITORIAL_META,
  GAMES_DATA,
  type GameEntry,
} from '../data/reelArchiveData.ts';
import {ArchiveImage} from './ArchiveImage.tsx';
import {DirectShortcutButton} from './DirectShortcutButton.tsx';
import {SymbolEmblem} from './SymbolEmblem.tsx';

interface GameDetailPageProps {
  game: GameEntry;
  onNavigate: (href: string) => void;
}

export function GameDetailPage({game, onNavigate}: GameDetailPageProps) {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const relatedGames = GAMES_DATA.filter((g) => game.relatedSlugs.includes(g.slug));

  return (
    <article className="bg-[#080B09] pb-24 pt-10 sm:pt-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="브레드크럼" className="mb-8 flex flex-wrap items-center gap-2 text-xs text-[#A9B2AA]">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/#home');
            }}
            className="transition-colors hover:text-[#E8D29A]"
          >
            HOME
          </a>
          <ChevronRight className="h-3.5 w-3.5 text-[#34463B]" aria-hidden="true" />
          <a
            href="/#archive"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/#archive');
            }}
            className="transition-colors hover:text-[#E8D29A]"
          >
            릴게임 백과
          </a>
          <ChevronRight className="h-3.5 w-3.5 text-[#34463B]" aria-hidden="true" />
          <span className="font-medium text-[#E8D29A]" aria-current="page">
            {game.titleKo}
          </span>
        </nav>

        {/* Top Return Button */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-[#34463B] pb-5">
          <a
            href="/#archive"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/#archive');
            }}
            className="inline-flex items-center gap-2 text-xs font-medium text-[#E8D29A] transition-colors hover:text-[#F3F0E7]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>전체 릴게임 백과로 돌아가기</span>
          </a>

          <div className="flex flex-wrap items-center gap-4">
            <span className="font-mono-tabular text-xs text-[#A9B2AA]">
              최종 검토 {EDITORIAL_META.updatedDate}
            </span>
            <DirectShortcutButton size="section" />
          </div>
        </div>

        {/* Exhibition Title & Accession Ledger */}
        <header className="mb-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-mono-tabular text-xs tracking-[0.22em] uppercase text-[#C6A45A]">
              {game.accessionCode} · ARCHIVE MONOGRAPH
            </p>
            <h1 className="mt-3 text-3xl font-bold text-[#F3F0E7] sm:text-5xl">
              {game.titleKo}
            </h1>
            <p className="mt-2 font-display text-2xl font-medium tracking-[0.14em] text-[#E8D29A]">
              {game.titleEn}
            </p>

            <div className="gold-rule my-6 w-36" />

            <p className="text-base leading-[1.85] text-[#F3F0E7]/90 sm:text-lg">
              {game.summary}
            </p>

            {/* Accession Definition List */}
            <dl className="mt-8 grid grid-cols-1 gap-4 border border-[#34463B] bg-[#121D18] p-5 sm:grid-cols-2">
              <div className="border-b border-[#34463B]/70 pb-3">
                <dt className="text-[11px] font-medium tracking-wider uppercase text-[#A9B2AA]">
                  아카이브 분류 번호
                </dt>
                <dd className="mt-1 font-mono-tabular text-sm font-medium text-[#E8D29A]">
                  {game.accessionCode}
                </dd>
              </div>
              <div className="border-b border-[#34463B]/70 pb-3">
                <dt className="text-[11px] font-medium tracking-wider uppercase text-[#A9B2AA]">
                  주요 유통 시기
                </dt>
                <dd className="mt-1 text-sm font-medium text-[#F3F0E7]">{game.era}</dd>
              </div>
              <div className="pb-1 sm:pb-0">
                <dt className="text-[11px] font-medium tracking-wider uppercase text-[#A9B2AA]">
                  테마 계열
                </dt>
                <dd className="mt-1 text-sm font-medium text-[#F3F0E7]">
                  {game.themeCategory}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-medium tracking-wider uppercase text-[#A9B2AA]">
                  일반적 기기 구조
                </dt>
                <dd className="mt-1 text-sm font-medium text-[#F3F0E7]">{game.reelSpec}</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-5">
            <ArchiveImage
              src={game.heroImage}
              alt={game.imageAlt}
              caption={game.imageCaption}
              aspectClassName="aspect-[4/3]"
              eager
            />
          </div>
        </header>

        {/* Main Editorial Body */}
        <div className="grid grid-cols-1 gap-12 border-t border-[#34463B] pt-12 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-8">
            <section>
              <h2 className="text-xl font-bold text-[#E8D29A] sm:text-2xl">
                01. 게임의 테마와 배경
              </h2>
              <p className="mt-4 text-[15px] leading-[1.9] text-[#F3F0E7]/90 sm:text-base">
                {game.themeAndBackground}
              </p>
            </section>

            <section className="border-t border-[#34463B]/70 pt-10">
              <h2 className="text-xl font-bold text-[#E8D29A] sm:text-2xl">
                02. 등장 시기 및 역사적 배경
              </h2>
              <p className="mt-4 text-[15px] leading-[1.9] text-[#F3F0E7]/90 sm:text-base">
                {game.historicalContext}
              </p>
            </section>

            <section className="border-t border-[#34463B]/70 pt-10">
              <h2 className="text-xl font-bold text-[#E8D29A] sm:text-2xl">
                03. 주요 심볼 구성
              </h2>
              <p className="mt-2 text-sm text-[#A9B2AA]">
                심볼 설명은 작품의 미술적 테마를 해설한 것이며, 실제 배당 비율이나 당첨 확률을 의미하지 않습니다.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {game.symbols.map((sym) => (
                  <div
                    key={sym.name}
                    className="flex items-start gap-4 border border-[#34463B] bg-[#121D18] p-4"
                  >
                    <SymbolEmblem visualKey={sym.visualKey} className="h-14 w-14 shrink-0" />
                    <div>
                      <p className="font-display text-xs tracking-wider uppercase text-[#C6A45A]">
                        {sym.englishName}
                      </p>
                      <h3 className="mt-0.5 text-base font-bold text-[#F3F0E7]">
                        {sym.name}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-[#A9B2AA]">
                        {sym.meaning}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="border-t border-[#34463B]/70 pt-10">
              <h2 className="text-xl font-bold text-[#E8D29A] sm:text-2xl">
                04. 일반적인 게임 구조 및 당시 기기의 특징
              </h2>
              <div className="mt-4 space-y-5 text-[15px] leading-[1.9] text-[#F3F0E7]/90 sm:text-base">
                <p>{game.generalStructure}</p>
                <div className="border border-[#34463B] bg-[#121D18] p-5">
                  <h3 className="text-sm font-semibold text-[#C6A45A]">
                    당시 오프라인 캐비닛 및 연출 특징
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#A9B2AA]">
                    {game.cabinetFeatures}
                  </p>
                </div>
              </div>
            </section>

            <section className="border-t border-[#34463B]/70 pt-10">
              <h2 className="text-xl font-bold text-[#E8D29A] sm:text-2xl">
                05. 사회적 배경
              </h2>
              <p className="mt-4 text-[15px] leading-[1.9] text-[#F3F0E7]/90 sm:text-base">
                {game.socialContext}
              </p>
            </section>

            <section className="border border-[#C6A45A]/50 bg-[#09271E]/60 p-6 sm:p-8">
              <h2 className="text-lg font-bold text-[#E8D29A] sm:text-xl">
                06. 법적 주의사항 및 이용자 안전 안내
              </h2>
              <p className="mt-3 text-sm leading-[1.85] text-[#F3F0E7]/90 sm:text-base">
                {game.legalCaution}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="/#legal"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/#legal');
                  }}
                  className="inline-flex items-center gap-1.5 border border-[#C6A45A]/60 bg-[#080B09] px-4 py-2 text-xs font-medium text-[#E8D29A] hover:border-[#E8D29A]"
                >
                  <Scale className="h-3.5 w-3.5" />
                  <span>게임산업법 및 불법 사이트 구별법 보기</span>
                </a>
              </div>
            </section>

            {/* Game-specific FAQ */}
            {game.faqs.length > 0 && (
              <section className="border-t border-[#34463B]/70 pt-10">
                <h2 className="text-xl font-bold text-[#E8D29A] sm:text-2xl">
                  관련 자주 묻는 질문
                </h2>
                <div className="mt-5 divide-y divide-[#34463B] border-y border-[#34463B]">
                  {game.faqs.map((faq, idx) => {
                    const isOpen = openFaqIdx === idx;
                    return (
                      <div key={faq.question}>
                        <h3>
                          <button
                            type="button"
                            aria-expanded={isOpen}
                            onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                            className="flex min-h-[52px] w-full items-center justify-between gap-4 py-4 text-left text-sm font-semibold text-[#F3F0E7] hover:text-[#E8D29A] sm:text-base cursor-pointer"
                          >
                            <span>{faq.question}</span>
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-[#34463B] text-[#C6A45A]">
                              {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                            </span>
                          </button>
                        </h3>
                        {isOpen && (
                          <div className="mb-4 bg-[#09271E]/60 p-4 text-sm leading-relaxed text-[#F3F0E7]/90">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
          </div>

          {/* Right Margin Column: Related Games & Internal Navigation */}
          <aside className="space-y-8 lg:col-span-4">
            <div className="border border-[#34463B] bg-[#121D18] p-6">
              <p className="font-mono-tabular text-xs tracking-wider uppercase text-[#C6A45A]">
                RELATED ARCHIVES
              </p>
              <h2 className="mt-2 text-lg font-bold text-[#F3F0E7]">
                관련 릴게임 아카이브
              </h2>
              <div className="mt-5 space-y-3">
                {relatedGames.map((rel) => (
                  <a
                    key={rel.slug}
                    href={`/games/${rel.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(`/games/${rel.slug}`);
                    }}
                    className="flex items-center justify-between gap-3 border border-[#34463B] bg-[#080B09]/60 p-3.5 transition-colors hover:border-[#C6A45A]"
                  >
                    <div>
                      <p className="font-mono-tabular text-[11px] text-[#C6A45A]">
                        {rel.accessionCode} · {rel.themeCategory}
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-[#F3F0E7]">
                        {rel.titleKo}
                      </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-[#C6A45A]" />
                  </a>
                ))}
              </div>
            </div>

            <div className="border border-[#34463B] bg-[#09271E]/40 p-6">
              <p className="font-mono-tabular text-xs tracking-wider uppercase text-[#C6A45A]">
                INTERNAL INDEX
              </p>
              <h2 className="mt-2 text-lg font-bold text-[#F3F0E7]">
                함께 읽을 콘텐츠
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a
                    href="/#history"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/#history');
                    }}
                    className="flex items-center gap-2.5 py-1.5 text-[#E8D29A] hover:text-[#F3F0E7]"
                  >
                    <History className="h-4 w-4 text-[#C6A45A]" />
                    <span>릴게임 역사 연대기 (1895~현재)</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/#comparison"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/#comparison');
                    }}
                    className="flex items-center gap-2.5 py-1.5 text-[#E8D29A] hover:text-[#F3F0E7]"
                  >
                    <BookOpen className="h-4 w-4 text-[#C6A45A]" />
                    <span>릴게임 vs 슬롯머신 구조 비교</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/#faq"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/#faq');
                    }}
                    className="flex items-center gap-2.5 py-1.5 text-[#E8D29A] hover:text-[#F3F0E7]"
                  >
                    <Scale className="h-4 w-4 text-[#C6A45A]" />
                    <span>자주 묻는 질문 (FAQ) 전체 보기</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="border border-[#34463B] bg-[#121D18] p-6 text-xs leading-relaxed text-[#A9B2AA]">
              <p className="font-semibold text-[#F3F0E7]">편집 기준 고지</p>
              <p className="mt-2">{EDITORIAL_META.policyNote}</p>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
