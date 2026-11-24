import {ARCHIVE_IMAGES} from '../data/reelArchiveData.ts';
import {ArchiveImage} from './ArchiveImage.tsx';
import {DirectShortcutButton} from './DirectShortcutButton.tsx';

export function WorldOfReelGamesSection() {
  return (
    <section
      id="encyclopedia"
      className="border-b border-[#34463B] bg-[#080B09] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Masthead */}
        <div className="mb-12 flex flex-col justify-between gap-4 border-b border-[#34463B] pb-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono-tabular text-xs tracking-[0.22em] uppercase text-[#C6A45A]">
              SECTION 01 · ENCYCLOPEDIA OVERVIEW
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-wide text-[#F3F0E7] sm:text-4xl lg:text-5xl">
              THE WORLD OF REEL GAMES
            </h2>
          </div>
          <div className="flex flex-col items-start gap-3 md:items-end">
            <p className="text-sm font-medium text-[#E8D29A]">
              릴게임의 개념과 구조적 원리
            </p>
            <DirectShortcutButton size="section" />
          </div>
        </div>

        {/* Asymmetric Split Editorial Content */}
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12">
          {/* Left Narrative Prose */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div className="max-w-2xl space-y-6 text-[15px] leading-[1.85] text-[#F3F0E7]/90 sm:text-base">
              <p className="first-letter:float-left first-letter:mr-3.5 first-letter:mt-1 first-letter:font-display first-letter:text-5xl first-letter:font-semibold first-letter:leading-none first-letter:text-[#C6A45A]">
                릴게임(Reel Game)이란 회전하는 원통형 드럼(Reel) 또는 디스플레이 화면에 구현된 가상의 회전축 위에 여러 도상(Symbol)이 배열되고, 정지 시점의 심볼 조합에 따라 결과가 판정되는 아케이드 및 슬롯 계열 게임의 총칭입니다. 영어 단어 ‘릴(Reel)’은 원래 실이나 필름을 감는 실패를 뜻하며, 초기 기계식 기기에서 띠 모양의 도안이 감긴 바퀴가 회전하던 구조에서 유래했습니다.
              </p>

              <p>
                심볼 배열의 기본 원리는 각 릴의 세로 열(Column)에 서로 다른 아이콘이 순환 배치된 뒤, 난수 생성 또는 기계적 정지 위치에 따라 가로·세로·대각선 라인(Payline)에 특정 기호가 정렬되는지 판별하는 것입니다. 한국 오프라인 게임장에서는 1990년대 메달식 과일 릴에서 출발해 2000년대 초반 CRT 화면을 활용한 서사형 아케이드로 급격히 분화되었습니다.
              </p>

              <p>
                해외 카지노의 슬롯머신과 ‘회전 릴과 심볼 조합’이라는 기계적 뿌리는 공유하지만, 국내 릴게임은 2000년대 중반 성인 게임장이라는 특수한 유통 환경 속에서 바다·궁전·설화 등 한국형 테마 애니메이션과 예고 연출이 결합된 독자적 문법을 발전시켰습니다. 이후 2006년 사행성 규제와 「게임산업진흥에 관한 법률」 제정을 기점으로 오프라인 환전형 릴게임은 법적으로 엄격히 금지되었습니다.
              </p>
            </div>

            {/* 3-Reel vs 5-Reel Editorial Specification Matrix */}
            <div className="mt-10 border border-[#34463B] bg-[#121D18] p-6 sm:p-7">
              <div className="mb-4 flex items-center justify-between border-b border-[#34463B] pb-3">
                <h3 className="text-base font-semibold text-[#E8D29A]">
                  3릴 구조와 5릴 구조의 메커니즘 비교
                </h3>
                <span className="font-mono-tabular text-xs text-[#A9B2AA]">
                  STRUCTURAL ANATOMY
                </span>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xl font-semibold text-[#F3F0E7]">
                      3-Reel Classic
                    </span>
                    <span className="font-mono-tabular text-xs text-[#C6A45A]">3 × 3 GRID</span>
                  </div>
                  <p className="text-sm leading-relaxed text-[#A9B2AA]">
                    19세기 기계식 슬롯과 한국 1990~2000년대 오락실 릴게임의 표준 구조입니다. 중앙 가로 1라인 또는 8라인(가로3·세로3·대각2)으로 직관성이 높고 화면 시인성이 뛰어납니다.
                  </p>
                </div>

                <div className="space-y-2 border-t border-[#34463B] pt-4 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xl font-semibold text-[#F3F0E7]">
                      5-Reel Video
                    </span>
                    <span className="font-mono-tabular text-xs text-[#C6A45A]">5 × 3+ GRID</span>
                  </div>
                  <p className="text-sm leading-relaxed text-[#A9B2AA]">
                    현대 글로벌 카지노 비디오 슬롯의 주류 포맷입니다. 20~243개 이상의 다중 라인과 복합적인 심볼 조합이 가능하도록 디지털 설계되어 한국형 3릴 아케이드와 구별됩니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Exhibition Figure + Schematic */}
          <div className="flex flex-col justify-between gap-8 lg:col-span-5">
            <ArchiveImage
              src={ARCHIVE_IMAGES.mechanicalSlot}
              alt="19세기 말 주철과 황동으로 제작된 3릴 기계식 슬롯머신 아카이브 전시 사진"
              caption="Fig. 1 — 아카이브 연출 이미지: 3릴 기계식 회전 드럼의 초기 원형 구조"
              aspectClassName="aspect-[4/3]"
            />

            {/* Clean Architectural SVG Reel Diagram */}
            <div className="border border-[#34463B] bg-[#09271E]/55 p-6">
              <div className="mb-4 flex items-center justify-between text-xs text-[#A9B2AA]">
                <span className="font-medium tracking-wider uppercase text-[#E8D29A]">
                  REEL ALIGNMENT SCHEMATIC
                </span>
                <span className="font-mono-tabular">3-REEL / 8-LINE MODEL</span>
              </div>

              <svg
                viewBox="0 0 360 150"
                className="w-full"
                role="img"
                aria-label="3릴 3행 릴게임 심볼 정렬 구조 도해"
              >
                <rect
                  x="10"
                  y="10"
                  width="340"
                  height="130"
                  fill="#080B09"
                  stroke="#34463B"
                  strokeWidth="1"
                />
                {/* 3 Reel Columns */}
                {[0, 1, 2].map((col) => (
                  <g key={col} transform={`translate(${28 + col * 106}, 22)`}>
                    <rect
                      width="92"
                      height="106"
                      fill="#121D18"
                      stroke="#C6A45A"
                      strokeOpacity="0.4"
                      strokeWidth="1"
                    />
                    <line x1="0" y1="35" x2="92" y2="35" stroke="#34463B" strokeDasharray="3 3" />
                    <line x1="0" y1="71" x2="92" y2="71" stroke="#34463B" strokeDasharray="3 3" />
                    <text
                      x="46"
                      y="22"
                      textAnchor="middle"
                      fill="#A9B2AA"
                      fontSize="10"
                      fontFamily="monospace"
                    >
                      ROW 1
                    </text>
                    <text
                      x="46"
                      y="57"
                      textAnchor="middle"
                      fill="#E8D29A"
                      fontSize="11"
                      fontWeight="600"
                      fontFamily="monospace"
                    >
                      REEL {col + 1}
                    </text>
                    <text
                      x="46"
                      y="93"
                      textAnchor="middle"
                      fill="#A9B2AA"
                      fontSize="10"
                      fontFamily="monospace"
                    >
                      ROW 3
                    </text>
                  </g>
                ))}
                {/* Center Payline Axis */}
                <line
                  x1="18"
                  y1="75"
                  x2="342"
                  y2="75"
                  stroke="#C6A45A"
                  strokeWidth="1.2"
                  strokeOpacity="0.7"
                />
              </svg>

              <p className="mt-3 text-xs leading-relaxed text-[#A9B2AA]">
                도해 1: 3개의 독립 회전축(Reel 1~3)과 정지 행(Row 1~3)이 교차하며 가로·세로·대각선 조합을 판별하는 고전 릴 구조.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
