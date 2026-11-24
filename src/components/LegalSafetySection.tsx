import {ExternalLink, PhoneCall, Scale, ShieldAlert} from 'lucide-react';
import {HELPLINE_INFO, LEGAL_DOSSIERS} from '../data/reelArchiveData.ts';
import {DirectShortcutButton} from './DirectShortcutButton.tsx';

export function LegalSafetySection() {
  return (
    <section
      id="legal"
      className="border-b border-[#34463B] bg-[#09271E]/45 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-4 border-b border-[#34463B] pb-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono-tabular text-xs tracking-[0.22em] uppercase text-[#C6A45A]">
              SECTION 06 · STATUTES &amp; PUBLIC SAFETY
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-wide text-[#F3F0E7] sm:text-4xl lg:text-5xl">
              LEGAL INFORMATION &amp; SAFETY
            </h2>
          </div>
          <div className="flex flex-col items-start gap-3 md:items-end">
            <p className="text-sm font-medium text-[#E8D29A]">
              대한민국 현행 법률과 이용자 보호 안내
            </p>
            <DirectShortcutButton size="section" />
          </div>
        </div>

        {/* Official Legal Context Notice */}
        <div className="mb-10 flex flex-col gap-4 border border-[#C6A45A]/35 bg-[#080B09]/75 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <Scale className="mt-0.5 h-6 w-6 shrink-0 text-[#C6A45A]" />
            <div>
              <h3 className="text-base font-semibold text-[#F3F0E7]">
                법적 사실과 일반 안내의 구분 원칙
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-[#A9B2AA]">
                아래 내용은 「게임산업진흥에 관한 법률」 및 게임물관리위원회 공식 기준에 근거한 정보 요약입니다. 개별 사안에 대한 구체적 법률 해석이나 처벌 여부는 관할 수사·사법기관의 판단에 따릅니다.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Legal & Fraud Prevention Dossiers */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {LEGAL_DOSSIERS.map((dossier) => (
            <article
              key={dossier.id}
              className="flex flex-col justify-between border border-[#34463B] bg-[#080B09]/85 p-6 sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#34463B] pb-3">
                  <span className="font-mono-tabular text-xs tracking-wider text-[#C6A45A]">
                    {dossier.code}
                  </span>
                  {dossier.id === 'online-illegal' && (
                    <ShieldAlert className="h-4 w-4 text-[#E8D29A]" aria-hidden="true" />
                  )}
                </div>

                <h3 className="mt-4 text-xl font-bold text-[#F3F0E7]">{dossier.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#E8D29A]/90">
                  {dossier.summary}
                </p>

                <ul className="mt-5 space-y-3 border-t border-[#34463B]/70 pt-5 text-sm leading-relaxed text-[#A9B2AA]">
                  {dossier.details.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 bg-[#C6A45A]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 border-t border-[#34463B]/70 pt-4 text-xs text-[#A9B2AA]">
                {dossier.source}
              </p>
            </article>
          ))}
        </div>

        {/* Public Helpline Banner: KCGP 1336 */}
        <div className="mt-10 border border-[#C6A45A]/60 bg-gradient-to-br from-[#09271E] via-[#092A21] to-[#080B09] p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="font-mono-tabular text-xs tracking-[0.2em] uppercase text-[#C6A45A]">
                PUBLIC SUPPORT &amp; COUNSELING
              </p>
              <h3 className="mt-2 text-2xl font-bold text-[#F3F0E7] sm:text-3xl">
                {HELPLINE_INFO.organization}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#F3F0E7]/90 sm:text-base">
                {HELPLINE_INFO.description}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#E8D29A]">
                <span>운영 시간: {HELPLINE_INFO.operatingHours}</span>
                <span aria-hidden="true">·</span>
                <span>{HELPLINE_INFO.textCounsel}</span>
              </div>
            </div>

            <div className="flex flex-col items-start gap-3 border-t border-[#34463B] pt-6 lg:col-span-4 lg:items-end lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <span className="text-xs font-medium tracking-wider text-[#A9B2AA]">
                도박문제 전문상담 헬프라인
              </span>
              <a
                href="tel:1336"
                className="inline-flex items-center gap-3 font-mono-tabular text-4xl font-bold tracking-tight text-[#E8D29A] transition-colors hover:text-[#F3F0E7]"
              >
                <PhoneCall className="h-7 w-7 text-[#C6A45A]" />
                <span>{HELPLINE_INFO.helplineNumber}</span>
              </a>
              <a
                href={HELPLINE_INFO.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border border-[#C6A45A]/50 bg-[#080B09]/60 px-4 py-2 text-xs font-medium text-[#E8D29A] transition-colors hover:border-[#E8D29A] hover:bg-[#104333]"
              >
                <span>공식 홈페이지 바로가기 (kcgp.or.kr)</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
