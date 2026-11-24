import {ArrowLeft, ChevronRight} from 'lucide-react';
import {EDITORIAL_META} from '../data/reelArchiveData.ts';

interface InfoPageProps {
  path: '/about' | '/privacy' | '/terms';
  onNavigate: (href: string) => void;
}

export function InfoPage({path, onNavigate}: InfoPageProps) {
  return (
    <article className="bg-[#080B09] py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="브레드크럼" className="mb-8 flex items-center gap-2 text-xs text-[#A9B2AA]">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/#home');
            }}
            className="hover:text-[#E8D29A]"
          >
            HOME
          </a>
          <ChevronRight className="h-3.5 w-3.5 text-[#34463B]" />
          <span className="text-[#E8D29A]">
            {path === '/about' && '사이트 소개'}
            {path === '/privacy' && '개인정보처리방침'}
            {path === '/terms' && '이용약관'}
          </span>
        </nav>

        {path === '/about' && (
          <div className="space-y-8">
            <header className="border-b border-[#34463B] pb-6">
              <p className="font-mono-tabular text-xs tracking-[0.2em] text-[#C6A45A]">
                EDITORIAL MISSION · ABOUT REEL ARCHIVE
              </p>
              <h1 className="mt-2 text-3xl font-bold text-[#F3F0E7] sm:text-4xl">
                사이트 소개 및 아카이브 편집 원칙
              </h1>
              <p className="mt-2 text-xs text-[#A9B2AA]">
                발행: {EDITORIAL_META.publishedDate} · 최종 검토: {EDITORIAL_META.updatedDate}
              </p>
            </header>

            <section className="space-y-4 text-[15px] leading-[1.85] text-[#F3F0E7]/90">
              <h2 className="text-lg font-bold text-[#E8D29A]">1. 매거진 설립 목적</h2>
              <p>
                REEL ARCHIVE는 한국 아케이드 산업사의 한 축을 차지했던 릴게임의 기원, 대표 타이틀의 시각적 심볼 문화, 해외 카지노 슬롯머신과의 구조적 차이, 그리고 2006년 이후 정립된 대한민국 게임산업법 규제 체계를 객관적으로 기록하는 정보 전문 매거진입니다.
              </p>
              <h2 className="pt-4 text-lg font-bold text-[#E8D29A]">2. E-E-A-T 및 중립성 원칙</h2>
              <ul className="space-y-2 text-sm text-[#A9B2AA]">
                <li>• 본 사이트는 게임을 실행하거나 금전적 이용을 유도하는 서비스가 아닙니다.</li>
                <li>• 확인되지 않은 과거 기기의 확률·배당·환수율 수치를 임의로 추정하거나 생성하지 않습니다.</li>
                <li>• 법률 및 제도 정보는 「게임산업진흥에 관한 법률」, 게임물관리위원회, 한국도박문제예방치유원 등 공식 기관 자료를 기준으로 작성합니다.</li>
                <li>• 아카이브에 사용된 연출 이미지는 역사적 분위기를 재현한 자료이며, 실제 상용 기기 사진과 혼동되지 않도록 캡션으로 명시합니다.</li>
              </ul>
            </section>
          </div>
        )}

        {path === '/privacy' && (
          <div className="space-y-8">
            <header className="border-b border-[#34463B] pb-6">
              <p className="font-mono-tabular text-xs tracking-[0.2em] text-[#C6A45A]">
                PRIVACY POLICY
              </p>
              <h1 className="mt-2 text-3xl font-bold text-[#F3F0E7] sm:text-4xl">
                개인정보처리방침
              </h1>
              <p className="mt-2 text-xs text-[#A9B2AA]">
                시행 및 최종 확인일: {EDITORIAL_META.updatedDate}
              </p>
            </header>

            <section className="space-y-5 text-[15px] leading-[1.85] text-[#F3F0E7]/90">
              <p>
                REEL ARCHIVE는 정보 열람만을 목적으로 하는 정적 아카이브 웹사이트로, 이용자의 회원가입, 로그인, 결제, 게시판 작성 등 어떠한 개인정보 입력이나 수집 기능도 운영하지 않습니다.
              </p>
              <div className="border border-[#34463B] bg-[#121D18] p-5 text-sm text-[#A9B2AA] space-y-2">
                <p className="font-semibold text-[#E8D29A]">개인정보 비수집 고지</p>
                <p>• 성명, 연락처, 이메일, 계좌번호, 신분증 정보 등 일체의 개인식별정보를 수집하거나 저장하지 않습니다.</p>
                <p>• 검색창 입력어는 이용자의 브라우저 메모리 내에서만 실시간 필터링되며 서버로 전송·보관되지 않습니다.</p>
                <p>• 외부 공공기관 링크(한국도박문제예방치유원 등) 이동 시에는 해당 기관의 개인정보처리방침이 적용됩니다.</p>
              </div>
            </section>
          </div>
        )}

        {path === '/terms' && (
          <div className="space-y-8">
            <header className="border-b border-[#34463B] pb-6">
              <p className="font-mono-tabular text-xs tracking-[0.2em] text-[#C6A45A]">
                TERMS OF USE &amp; DISCLAIMER
              </p>
              <h1 className="mt-2 text-3xl font-bold text-[#F3F0E7] sm:text-4xl">
                이용약관 및 면책 고지
              </h1>
              <p className="mt-2 text-xs text-[#A9B2AA]">
                개정일: {EDITORIAL_META.updatedDate}
              </p>
            </header>

            <section className="space-y-5 text-[15px] leading-[1.85] text-[#F3F0E7]/90">
              <h2 className="text-lg font-bold text-[#E8D29A]">제1조 (목적 및 성격)</h2>
              <p>
                본 사이트가 제공하는 모든 텍스트, 도해, 심볼 해설 및 법률 요약은 이용자의 역사적·제도적 이해를 돕기 위한 순수 정보 제공 목적이며, 사행 행위나 무허가 게임 서비스 이용을 권장하지 않습니다.
              </p>
              <h2 className="text-lg font-bold text-[#E8D29A]">제2조 (법률 정보의 한계)</h2>
              <p>
                본 매거진에 수록된 법률 및 행정 제도에 관한 설명은 작성 시점의 공개 법령을 참조하여 정리한 일반적 안내이며, 개별 사건에 대한 법률 자문을 대체하지 않습니다. 최신 법령은 법제처 국가법령정보센터(law.go.kr) 및 게임물관리위원회(grac.or.kr)를 통해 확인하시기 바랍니다.
              </p>
            </section>
          </div>
        )}

        <div className="mt-12 border-t border-[#34463B] pt-6">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/#home');
            }}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#E8D29A] hover:text-[#F3F0E7]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>매거진 메인으로 돌아가기</span>
          </a>
        </div>
      </div>
    </article>
  );
}
