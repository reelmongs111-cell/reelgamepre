import {ARCHIVE_IMAGES, COMPARISON_ROWS} from '../data/reelArchiveData.ts';
import {ArchiveImage} from './ArchiveImage.tsx';
import {DirectShortcutButton} from './DirectShortcutButton.tsx';

export function ComparisonSection() {
  return (
    <section
      id="comparison"
      className="border-b border-[#34463B] bg-[#080B09] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-4 border-b border-[#34463B] pb-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono-tabular text-xs tracking-[0.22em] uppercase text-[#C6A45A]">
              SECTION 05 · STRUCTURAL &amp; LEGAL COMPARISON
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-wide text-[#F3F0E7] sm:text-4xl lg:text-5xl">
              REEL GAME VS SLOT MACHINE
            </h2>
          </div>
          <div className="flex flex-col items-start gap-3 md:items-end">
            <p className="text-sm font-medium text-[#E8D29A]">
              한국 릴게임과 해외 카지노 슬롯머신의 결정적 차이
            </p>
            <DirectShortcutButton size="section" />
          </div>
        </div>

        {/* Comparative Visual Spread */}
        <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <ArchiveImage
              src={ARCHIVE_IMAGES.vintageArcade}
              alt="한국 초기 오락실과 릴게임 아케이드 계보를 상징하는 과일 릴 드럼과 버튼 사진"
              caption="Fig. 4 — 아카이브 연출 이미지: 한국 아케이드 릴게임 계열의 버튼·화면형 구조"
              aspectClassName="aspect-[4/3]"
            />
          </div>

          <div className="flex flex-col justify-center border border-[#34463B] bg-[#121D18] p-6 sm:p-8 lg:col-span-4">
            <p className="font-mono-tabular text-xs tracking-widest text-[#C6A45A]">
              KEY DISTINCTION
            </p>
            <h3 className="mt-2 text-xl font-bold text-[#F3F0E7]">
              공통된 기원, 완전히 달라진 법제와 문화
            </h3>
            <p className="mt-4 text-sm leading-[1.85] text-[#A9B2AA]">
              두 장르는 모두 ‘회전하는 릴의 심볼 매칭’이라는 19세기 말 기계식 메커니즘에서 출발했습니다. 그러나 카지노 슬롯머신이 국가·주정부 규제기관의 인허가와 중앙 서버 관리 하에 운영되는 카지노 전용 기기인 반면, 한국 릴게임은 2000년대 일반 도심 아케이드 시장의 특수성과 상품권 제도 속에서 독자 분화되었다가 2006년 게임산업법을 계기로 사행성 규제를 받게 되었습니다.
            </p>
          </div>

          <div className="lg:col-span-4">
            <ArchiveImage
              src={ARCHIVE_IMAGES.mechanicalSlot}
              alt="19세기 말 카지노 슬롯머신의 원형이 된 기계식 3릴 레버 기기 전시 사진"
              caption="Fig. 5 — 아카이브 연출 이미지: 카지노 슬롯머신의 직계 원형인 기계식 레버 구조"
              aspectClassName="aspect-[4/3]"
            />
          </div>
        </div>

        {/* Responsive Data Comparison Table */}
        <div className="overflow-x-auto border border-[#34463B] bg-[#121D18]">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="border-b border-[#C6A45A]/40 bg-[#09271E]">
                <th scope="col" className="px-5 py-4 text-xs font-semibold tracking-wider uppercase text-[#E8D29A] w-[18%]">
                  비교 항목
                </th>
                <th scope="col" className="px-5 py-4 text-xs font-semibold tracking-wider uppercase text-[#F3F0E7] w-[32%]">
                  한국 릴게임 (아케이드 계보)
                </th>
                <th scope="col" className="px-5 py-4 text-xs font-semibold tracking-wider uppercase text-[#F3F0E7] w-[32%]">
                  해외·카지노 슬롯머신
                </th>
                <th scope="col" className="px-5 py-4 text-xs font-semibold tracking-wider uppercase text-[#A9B2AA] w-[18%]">
                  핵심 비고
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#34463B]/80 text-sm">
              {COMPARISON_ROWS.map((row) => (
                <tr
                  key={row.criterion}
                  className="transition-colors hover:bg-[#09271E]/35"
                >
                  <th
                    scope="row"
                    className="px-5 py-4 align-top font-semibold text-[#E8D29A]"
                  >
                    {row.criterion}
                  </th>
                  <td className="px-5 py-4 align-top leading-relaxed text-[#F3F0E7]/90">
                    {row.reelGame}
                  </td>
                  <td className="px-5 py-4 align-top leading-relaxed text-[#F3F0E7]/90">
                    {row.slotMachine}
                  </td>
                  <td className="px-5 py-4 align-top text-xs leading-relaxed text-[#A9B2AA]">
                    {row.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-xs text-[#A9B2AA] lg:hidden">
          * 모바일 화면에서는 표를 좌우로 스크롤하여 전체 비교 항목을 확인할 수 있습니다.
        </p>
      </div>
    </section>
  );
}
