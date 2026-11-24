import {useState} from 'react';
import {Minus, Plus} from 'lucide-react';
import {GLOBAL_FAQS} from '../data/reelArchiveData.ts';
import {DirectShortcutButton} from './DirectShortcutButton.tsx';

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(GLOBAL_FAQS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="border-b border-[#34463B] bg-[#080B09] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-4 border-b border-[#34463B] pb-6 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono-tabular text-xs tracking-[0.22em] uppercase text-[#C6A45A]">
              SECTION 07 · FREQUENTLY ASKED QUESTIONS
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-wide text-[#F3F0E7] sm:text-4xl">
              ARCHIVE FAQ
            </h2>
            <p className="mt-3 text-sm text-[#A9B2AA] sm:text-base">
              릴게임의 정의, 역사적 변천, 슬롯머신과의 차이, 합법·불법 기준 및 예방 상담 기관에 대해 자주 묻는 질문을 정리했습니다.
            </p>
          </div>
          <DirectShortcutButton size="section" />
        </div>

        <div className="divide-y divide-[#34463B] border-y border-[#34463B]">
          {GLOBAL_FAQS.map((faq, idx) => {
            const isOpen = openId === faq.id;
            const panelId = `faq-panel-${faq.id}`;
            const buttonId = `faq-btn-${faq.id}`;

            return (
              <div key={faq.id} className="transition-colors">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(faq.id)}
                    className="flex min-h-[56px] w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-[#E8D29A] cursor-pointer"
                  >
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                      <span className="font-mono-tabular text-xs text-[#C6A45A] shrink-0">
                        Q{String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="text-base font-semibold text-[#F3F0E7] sm:text-lg">
                        {faq.question}
                      </span>
                    </div>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center border transition-colors ${
                        isOpen
                          ? 'border-[#C6A45A] bg-[#09271E] text-[#E8D29A]'
                          : 'border-[#34463B] bg-[#121D18] text-[#C6A45A]'
                      }`}
                      aria-hidden="true"
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="mb-5 border border-[#34463B] bg-[#09271E] p-5 sm:p-6"
                  >
                    <p className="mb-2 text-[11px] font-medium tracking-widest uppercase text-[#C6A45A]">
                      {faq.category}
                    </p>
                    <p className="text-sm leading-[1.85] text-[#F3F0E7]/90 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
