export type GameThemeCategory = '해양·항해' | '신화·황금' | '클래식 메달';

export type SymbolVisualKey =
  | 'whale'
  | 'shark'
  | 'turtle'
  | 'tropical-fish'
  | 'coral'
  | 'gold-bar'
  | 'coin'
  | 'lucky-pouch'
  | 'golden-palace'
  | 'lamp'
  | 'gem'
  | 'carpet'
  | 'crown'
  | 'son-ogong'
  | 'yeouibong'
  | 'cloud'
  | 'samjang'
  | 'cherry'
  | 'watermelon'
  | 'bell'
  | 'seven'
  | 'ship'
  | 'compass'
  | 'star';

export interface GameSymbolItem {
  name: string;
  englishName: string;
  visualKey: SymbolVisualKey;
  meaning: string;
}

export interface GameFaqItem {
  question: string;
  answer: string;
}

export interface GameEntry {
  slug: string;
  accessionCode: string;
  titleKo: string;
  titleEn: string;
  era: string;
  themeCategory: GameThemeCategory;
  reelSpec: string;
  heroImage: string;
  imageCaption: string;
  imageAlt: string;
  summary: string;
  themeAndBackground: string;
  historicalContext: string;
  generalStructure: string;
  cabinetFeatures: string;
  socialContext: string;
  legalCaution: string;
  symbols: GameSymbolItem[];
  relatedSlugs: string[];
  faqs: GameFaqItem[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface TimelineEra {
  id: string;
  period: string;
  title: string;
  subtitle: string;
  summary: string;
  keyFacts: string[];
  sourceLabel: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
}

export interface SymbolGalleryGroup {
  gameSlug: string;
  gameTitleKo: string;
  gameTitleEn: string;
  themeSummary: string;
  symbols: GameSymbolItem[];
}

export interface ComparisonRow {
  criterion: string;
  reelGame: string;
  slotMachine: string;
  note: string;
}

export interface LegalDossierItem {
  id: string;
  code: string;
  title: string;
  summary: string;
  details: string[];
  source: string;
}

export interface GlobalFaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const EDITORIAL_META = {
  brand: 'REEL ARCHIVE',
  subtitle: 'PREMIUM GAME ENCYCLOPEDIA',
  publishedDate: '2026-03-15',
  updatedDate: '2026-11-24',
  editorialDepartment: 'REEL ARCHIVE 편찬연구실',
  policyNote:
    '본 아카이브는 한국 릴게임의 산업사·시각문화·제도적 규제를 기록하는 비영리 정보 매거진입니다. 확인되지 않은 확률·배당·환수율 수치를 임의로 생성하지 않으며, 법률 정보는 법제처 및 공공기관의 공식 문서를 기준으로 구분하여 서술합니다.',
};

export const HERO_MEDIA = {
  image: '/src/assets/images/hero_reel_lounge_1795504060176.jpg',
  alt: '어두운 에메랄드빛 조명과 금속성 골드 장식이 어우러진 아카이브 전시 공간 속 빈티지 릴 아케이드 캐비닛 연출 이미지',
  caption: 'Editorial Archive Illustration — 빈티지 릴 아케이드의 금속 디테일과 에메랄드 라운지 조명 연출',
};

export const ARCHIVE_IMAGES = {
  ocean: '/src/assets/images/archive_ocean_theme_1795504060322.jpg',
  imperial: '/src/assets/images/archive_imperial_gold_1795504061224.jpg',
  vintageArcade: '/src/assets/images/archive_vintage_arcade_1795504062693.jpg',
  mechanicalSlot: '/src/assets/images/history_mechanical_slot_1795504062458.jpg',
};

export const GAMES_DATA: GameEntry[] = [
  {
    slug: 'bada-story',
    accessionCode: 'ARC-KR-01',
    titleKo: '바다이야기',
    titleEn: 'BADA STORY',
    era: '2004년 전후 보급',
    themeCategory: '해양·항해',
    reelSpec: '화면형 3릴·다중 연출 아케이드 구조',
    heroImage: ARCHIVE_IMAGES.ocean,
    imageCaption: '아카이브 연출 이미지 — 고래와 산호초 모티프를 형상화한 해양 테마 전시 조형물',
    imageAlt: '깊은 에메랄드 벨벳 받침대 위에 놓인 황동 고래 부조와 해양 계기판 형태의 아카이브 전시물',
    summary:
      '2000년대 중반 한국 성인 오락실 문화를 상징하는 대표적인 해양 테마 화면형 릴게임으로, 2006년 사행성 게임 규제와 게임산업법 제정을 촉발한 역사적 사례로 기록됩니다.',
    themeAndBackground:
      '바다이야기는 푸른 심해와 해저 생태계를 시각적 배경으로 삼은 화면형 아케이드 릴게임입니다. 기존의 단순 과일·숫자 중심 메달 게임에서 벗어나 고래, 상어, 거북이, 산호 등 친숙한 해양 생물 애니메이션을 전면 화면에 배치해 시각적 몰입감을 높인 것이 특징입니다.',
    historicalContext:
      '2004년 전후 국내 아케이드 게임 시장에 등장한 이후, 전국 도심 상권의 성인 게임장을 중심으로 빠르게 보급되었습니다. 당시 문화관광부 산하 영상물등급위원회(현 게임물관리위원회 전신)의 등급 분류를 거쳐 합법 영업장 기기로 설치되었으나, 경품용 상품권 제도와 불법 개·변조 및 사설 환전소가 결합하면서 2006년 대규모 사회적 논란의 중심에 섰습니다.',
    generalStructure:
      '물리적으로 회전하는 원통형 드럼 대신 브라운관(CRT) 또는 초기 LCD 모니터 상에 구현된 가상의 릴과 배경 화면이 동시에 전개되는 방식을 취했습니다. 이용자가 투입 후 버튼을 조작하면 화면 내 심볼 배열이 정지하고, 특정 배경 전환이나 해양 생물 등장 연출이 뒤따르는 시청각 구조가 일반적이었습니다. 구체적인 내부 확률이나 환수율 수치는 제조사별·버전별 편차와 비공개 영역이 존재해 객관적으로 확정할 수 없습니다.',
    cabinetFeatures:
      '목재·합성수지 외장 캐비닛에 대형 수직형 또는 와이드 모니터, 직관적인 푸시 버튼 패널, 동전·지폐 투입구 및 경품 배출구 구조가 결합된 형태가 널리 쓰였습니다. 음향 역시 심해 파도 소리와 경쾌한 효과음을 강조해 폐쇄적인 실내 공간에서 집중도를 높이도록 설계되었습니다.',
    socialContext:
      '2006년 ‘바다이야기 사태’로 불린 일련의 사건은 단순한 게임 유행을 넘어 한국 게임 정책의 분수령이 되었습니다. 상품권을 통한 우회 환전이 사회적 문제로 대두되면서 감사원 감사와 검찰 수사가 진행되었고, 이는 곧 아케이드 게임장 전체에 대한 전수 점검과 사행성 게임물 퇴출 정책으로 이어졌습니다.',
    legalCaution:
      '현행 「게임산업진흥에 관한 법률」은 게임 결과에 따른 금전·유가증권 환전 및 환전 알선을 엄격히 금지하고 있습니다. 과거 오프라인 기기의 명칭을 차용해 온라인·모바일 환경에서 금전 충전을 유도하는 웹사이트나 앱은 모두 현행법상 무허가 불법 사설 서비스에 해당하므로 각별한 주의가 필요합니다.',
    symbols: [
      {
        name: '고래',
        englishName: 'Whale',
        visualKey: 'whale',
        meaning: '해양 생태계 테마의 최상위 상징으로, 대자연의 웅장함과 화면 전환 연출의 정점을 상징하는 대표 모티프입니다.',
      },
      {
        name: '상어',
        englishName: 'Shark',
        visualKey: 'shark',
        meaning: '심해의 역동성과 긴장감을 표현하는 주요 해양 캐릭터 심볼로 활용되었습니다.',
      },
      {
        name: '거북이',
        englishName: 'Sea Turtle',
        visualKey: 'turtle',
        meaning: '동아시아 전통에서 장수와 길조를 뜻하는 상징물로, 해저 배경의 안정적 흐름을 나타냅니다.',
      },
      {
        name: '열대어',
        englishName: 'Tropical Fish',
        visualKey: 'tropical-fish',
        meaning: '다채로운 색감으로 화면의 시각적 밀도를 채우는 기본 군집 심볼입니다.',
      },
      {
        name: '산호',
        englishName: 'Coral Reef',
        visualKey: 'coral',
        meaning: '바닷속 지형과 배경 서사를 완성하는 환경적 심볼로 사용되었습니다.',
      },
    ],
    relatedSlugs: ['ocean-paradise', 'yamato', 'golden-castle'],
    faqs: [
      {
        question: '바다이야기는 원래 불법으로 제작된 게임이었나요?',
        answer:
          '초기 보급 당시에는 구 「음반·비디오물 및 게임물에 관한 법률」에 따라 영상물등급위원회의 등급 심의를 통과한 기기들이 존재했습니다. 그러나 이후 기기 개·변조와 경품용 상품권의 사설 환전이 결합하면서 사행성 논란과 대대적인 법적 제재가 이루어졌습니다.',
      },
      {
        question: '현재 인터넷에서 바다이야기 이름을 건 사이트는 합법인가요?',
        answer:
          '아닙니다. 대한민국에서는 온라인 환경에서 환전 가능성이나 사행성을 띤 릴게임을 제공하는 행위가 법적으로 허용되지 않으며, 기존 명칭을 도용한 온라인 서비스는 불법 사행성 사이트로 분류됩니다.',
      },
    ],
    seo: {
      title: '릴게임 바다이야기 | 심볼 도감·산업사·게임산업법 규제 분석 — REEL ARCHIVE',
      description:
        '바다이야기의 해양 테마 심볼(고래·상어·거북이·산호), 화면형 릴 구조, 2004~2006년 사회적 배경과 게임산업법 규제 변화를 중립적으로 정리합니다.',
      keywords: ['바다이야기', '릴게임 역사', '게임산업법', '고래 심볼', '한국 릴게임'],
    },
  },
  {
    slug: 'ocean-paradise',
    accessionCode: 'ARC-KR-02',
    titleKo: '오션파라다이스',
    titleEn: 'OCEAN PARADISE',
    era: '2004~2005년 확산',
    themeCategory: '해양·항해',
    reelSpec: '화면형 3릴·해양 시퀀스 아케이드',
    heroImage: ARCHIVE_IMAGES.ocean,
    imageCaption: '아카이브 연출 이미지 — 산호와 심해 계기 모티프로 재구성한 해양 아케이드 전시물',
    imageAlt: '해양 아케이드 시대의 미감을 담은 황동 조형물과 수심 계기판 연출 사진',
    summary:
      '해양 테마 아케이드 릴게임이 대중화되던 2004~2005년경 널리 알려진 대표작으로, 산호초와 심해 생물의 다채로운 화면 연출이 특징인 작품입니다.',
    themeAndBackground:
      '오션파라다이스는 열대 바다와 산호초의 낙원을 컨셉으로 제작된 화면형 릴게임입니다. 같은 시기 유행한 해양 계열 게임들과 시각적 맥락을 공유하면서도, 보다 밝은 색조의 수중 배경과 다양한 어류·해양 생물 그래픽 조합을 통해 독자적인 화면 분위기를 구축했습니다.',
    historicalContext:
      '2004년 바다이야기의 흥행 이후 국내 아케이드 업계 전반에 ‘해양 테마’ 열풍이 불면서 등장했습니다. 2005년을 전후해 전국 성인 게임장에 다수 설치되었으며, 당시 아케이드 시장의 주류였던 스크린 기반 릴게임의 전성기와 쇠퇴기를 함께 경험했습니다.',
    generalStructure:
      '화면 중앙의 릴 심볼 회전과 상단·배경부의 수중 애니메이션이 연동되는 구조를 따랐습니다. 이용자는 시각적 예고 연출과 심볼 정렬을 통해 게임 진행 상태를 확인했으며, 기기별 세부 내부 로직이나 확률 수치는 공개 자료로 검증되지 않아 특정 수치를 단정할 수 없습니다.',
    cabinetFeatures:
      '대형 컬러 모니터를 상단에 배치하고 하단 조작부에는 스타트, 정지, 배팅 조절 등 간소화된 버튼 배열을 적용했습니다. 심해의 청록색 조명 효과를 극대화하기 위해 캐비닛 베젤 주변에 백라이트 장식을 두른 모델이 많았습니다.',
    socialContext:
      '바다이야기와 함께 2000년대 중반 성인 게임장 확산기의 대표작으로 자주 언급됩니다. 2006년 하반기 경품용 상품권 폐지와 등급 재심의 강화 조치 이후 오프라인 아케이드 시장이 급격히 위축되면서 함께 자취를 감추게 되었습니다.',
    legalCaution:
      '오션파라다이스 역시 오프라인 아케이드 시대의 유산이며, 현재 온라인상에서 동일 명칭을 사용해 금전 거래나 포인트 환전을 표방하는 사이트는 「게임산업진흥에 관한 법률」 위반 소지가 있는 불법 서비스입니다.',
    symbols: [
      {
        name: '백상아리·고래',
        englishName: 'Great Ocean Creature',
        visualKey: 'whale',
        meaning: '해양 낙원 서사의 정점을 이루는 대형 바다 생물 모티프입니다.',
      },
      {
        name: '산호초',
        englishName: 'Coral Garden',
        visualKey: 'coral',
        meaning: '열대 해저의 풍요로움과 화면의 색채 대비를 담당하는 상징입니다.',
      },
      {
        name: '열대어 군집',
        englishName: 'Reef Fish',
        visualKey: 'tropical-fish',
        meaning: '부드러운 유영 애니메이션으로 화면 전환의 리듬감을 형성합니다.',
      },
      {
        name: '바다거북',
        englishName: 'Marine Turtle',
        visualKey: 'turtle',
        meaning: '평온한 해저 세계와 지속성을 상징하는 전통적 해양 도상입니다.',
      },
    ],
    relatedSlugs: ['bada-story', 'yamato', 'new-world'],
    faqs: [
      {
        question: '바다이야기와 오션파라다이스는 같은 제작사의 게임인가요?',
        answer:
          '서로 다른 브랜드명과 개별 기기 계보로 유통된 별개의 타이틀입니다. 다만 2004~2005년 해양 테마 화면형 릴게임이 대거 유행하던 동일한 시장 환경 속에서 등장해, 유사한 테마 문법과 화면 연출 구조를 공유했습니다.',
      },
    ],
    seo: {
      title: '릴게임 오션파라다이스 | 해양 아케이드 구조와 바다이야기 대비 — REEL ARCHIVE',
      description:
        '2004~2005년 확산된 오션파라다이스의 해양 심볼, 기기 외관 특징, 바다이야기와의 차이점 및 법적 규제 맥락을 정리했습니다.',
      keywords: ['오션파라다이스', '바다이야기 차이', '해양 릴게임', '릴게임 백과'],
    },
  },
  {
    slug: 'yamato',
    accessionCode: 'ARC-KR-03',
    titleKo: '야마토',
    titleEn: 'YAMATO',
    era: '2000년대 중반 유통',
    themeCategory: '해양·항해',
    reelSpec: '화면형 3릴·서사 연출 중심 구조',
    heroImage: ARCHIVE_IMAGES.ocean,
    imageCaption: '아카이브 연출 이미지 — 고전 항해 나침반과 심해 관측 계기를 모티프로 한 전시 구성',
    imageAlt: '어두운 그린 배경 위 황동 해양 부조와 계기판이 놓인 아카이브 사진',
    summary:
      '대형 전함과 해상 항해, 그리고 강렬한 기계·전투 연출을 결합해 기존의 잔잔한 해양 테마와 차별화를 꾀했던 화면형 릴게임입니다.',
    themeAndBackground:
      '야마토는 대형 함선과 해상 모험·해전을 주된 시각적 테마로 채택했습니다. 일본 파친코·파치슬로 문화에서 영향을 받은 웅장한 배경음악과 컷신 형태의 화면 연출이 국내 화면형 릴게임 문법과 결합한 사례로 평가됩니다.',
    historicalContext:
      '2000년대 중반 성인 게임장 기기의 다양화 과정에서 해양 생물 중심 게임의 대안으로 주목받았습니다. 동적인 카메라 앵글과 중후한 음향 효과를 내세워 기존 팬층과는 다른 취향의 이용자들에게 알려졌습니다.',
    generalStructure:
      '기본 릴 회전 프레임 위에 함선의 출항, 레이더 포착, 해역 이동 등 단계적 서사 연출이 겹쳐지는 방식을 사용했습니다. 시각적 단계 변화가 뚜렷해 화면 몰입도가 높았으나, 실제 내부 동작 알고리즘이나 확률 지표는 공개된 바 없습니다.',
    cabinetFeatures:
      '어두운 금속성 프레임과 강렬한 색상의 발광 장식을 적용한 캐비닛이 주로 사용되었으며, 묵직한 타격음을 전달하는 대형 스피커 배치가 특징이었습니다.',
    socialContext:
      '국내 아케이드 게임 규제가 본격화되기 직전까지 다양한 변형 버전과 함께 유통되었으며, 2006년 이후 사행성 게임물 단속 및 등급 취소 절차를 거치며 오프라인 영업장에서는 사실상 자취를 감추었습니다.',
    legalCaution:
      '‘야마토’ 등 과거 유명 오프라인 게임의 이름을 내걸고 온라인 다운로드나 웹 결제를 유도하는 플랫폼은 법적으로 인가받지 않은 불법 서비스일 가능성이 높으므로 접근 및 결제를 피해야 합니다.',
    symbols: [
      {
        name: '대형 함선',
        englishName: 'Battleship Vessel',
        visualKey: 'ship',
        meaning: '게임 전체의 세계관과 웅장한 항해 서사를 대변하는 핵심 도상입니다.',
      },
      {
        name: '항해 나침반',
        englishName: 'Maritime Compass',
        visualKey: 'compass',
        meaning: '항로 개척과 국면 전환을 시각적으로 암시하는 보조 상징입니다.',
      },
      {
        name: '해상 성좌',
        englishName: 'Nautical Star',
        visualKey: 'star',
        meaning: '야간 항해의 이정표이자 극적인 화면 연출을 장식하는 표식입니다.',
      },
      {
        name: '심해 고래',
        englishName: 'Deep Sea Whale',
        visualKey: 'whale',
        meaning: '해양 아케이드 장르 특유의 광활한 바다 배경을 잇는 상징물입니다.',
      },
    ],
    relatedSlugs: ['bada-story', 'ocean-paradise', 'new-world'],
    faqs: [
      {
        question: '야마토는 해양 생물 테마 게임과 어떤 점이 달랐나요?',
        answer:
          '바다이야기나 오션파라다이스가 산호와 물고기 등 해저 생태계에 초점을 맞췄다면, 야마토는 대형 함선과 해상 항해라는 역동적인 기계·서사적 연출 비중이 높았던 것이 특징입니다.',
      },
    ],
    seo: {
      title: '릴게임 야마토 | 항해·함선 서사 기종과 연혁 리포트 — REEL ARCHIVE',
      description:
        '2000년대 중반 유통된 야마토 릴게임의 함선·항해 테마, 기기 연출 특징, 심볼 구성 및 현행 법적 주의사항을 안내합니다.',
      keywords: ['야마토 릴게임', '야마토 게임', '릴게임 종류', '릴게임 아카이브'],
    },
  },
  {
    slug: 'golden-castle',
    accessionCode: 'ARC-KR-04',
    titleKo: '황금성',
    titleEn: 'GOLDEN CASTLE',
    era: '2000년대 중반 대표작',
    themeCategory: '신화·황금',
    reelSpec: '화면형 3릴·다층 보너스 연출형',
    heroImage: ARCHIVE_IMAGES.imperial,
    imageCaption: '아카이브 연출 이미지 — 고전 황금 메달과 에메랄드 원석으로 재현한 황실 보물 테마',
    imageAlt: '어두운 석판 위에 놓인 금빛 황실 문양 메달과 주화, 에메랄드 보석 아카이브 전시 사진',
    summary:
      '동양적 황금 궁전과 보물 전설을 테마로 삼아, 해양 계열과 함께 2000년대 중반 한국 릴게임의 양대 산맥으로 꼽혔던 대표 아카이브 타이틀입니다.',
    themeAndBackground:
      '황금성은 부와 권위를 상징하는 동양풍 황금 궁전, 금괴, 엽전, 복주머니 등을 핵심 미술 모티프로 사용했습니다. 푸른색 위주의 해양 테마와 선명한 대비를 이루는 짙은 금빛·적색·비취색의 화려한 색채 설계가 돋보입니다.',
    historicalContext:
      '2000년대 중반 바다이야기가 해양 장르를 주도할 당시, 황금성은 전설·보물 테마의 대표 주자로 자리매김하며 성인 게임장 내에서 높은 인지도를 확보했습니다. 이후 동일 테마를 변주한 여러 아류작이 등장할 만큼 시각적 문법이 확고했습니다.',
    generalStructure:
      '가상의 릴 화면 위에 성문이 열리거나 보물 상자가 등장하는 식의 서사적 화면 전환 요소를 결합했습니다. 이용자가 직관적으로 인지할 수 있는 길조 심볼 중심의 구성을 취했으나, 내부 연산 방식이나 확률 구조에 대해서는 검증된 공식 통계가 공개되어 있지 않습니다.',
    cabinetFeatures:
      '금색 도장 프레임과 전통 문양을 모방한 마퀴(Marquee) 상단 간판을 장착한 캐비닛이 흔히 쓰였으며, 시각적 화려함을 강조하는 LED 조명이 주변부를 장식했습니다.',
    socialContext:
      '바다이야기와 함께 2006년 사행성 게임물 규제 정책의 주요 대상이 되었으며, 경품용 상품권 폐지와 「게임산업진흥에 관한 법률」 시행에 따라 오프라인 성인 오락실의 제도권 정비와 함께 퇴장했습니다.',
    legalCaution:
      '현재 웹이나 메신저 링크를 통해 접근할 수 있는 ‘황금성’ 명칭의 사이트들은 공식 등급 분류를 받은 합법 게임물이 아니며, 환전 유도 및 개인정보·금융사기 피해 위험이 매우 높으므로 이용하지 않아야 합니다.',
    symbols: [
      {
        name: '황금 궁전',
        englishName: 'Golden Palace',
        visualKey: 'golden-palace',
        meaning: '풍요와 영광이 깃든 이상향을 뜻하며, 게임 세계관의 핵심 무대를 상징합니다.',
      },
      {
        name: '금괴',
        englishName: 'Gold Ingot',
        visualKey: 'gold-bar',
        meaning: '동양 전통 재화 형태인 엽전·원보에서 유래한 전형적인 부의 도상입니다.',
      },
      {
        name: '고전 동전',
        englishName: 'Imperial Coin',
        visualKey: 'coin',
        meaning: '교환과 순환을 상징하는 기본 재화 모티프로, 고전 메달 게임의 흔적을 담고 있습니다.',
      },
      {
        name: '복주머니',
        englishName: 'Lucky Pouch',
        visualKey: 'lucky-pouch',
        meaning: '한국 전통 민속에서 복과 행운을 담아 보관하는 길조의 상징입니다.',
      },
    ],
    relatedSlugs: ['aladdin', 'son-ogong', 'bada-story'],
    faqs: [
      {
        question: '황금성 심볼 중 복주머니나 금괴는 특정 당첨 확률을 뜻하나요?',
        answer:
          '아닙니다. 본 아카이브에서 설명하는 심볼의 의미는 게임 내 미술적·문화적 테마 상징을 해설한 것이며, 실제 기기의 당첨 확률이나 배당 비율을 의미하거나 보장하지 않습니다.',
      },
    ],
    seo: {
      title: '릴게임 황금성 | 황금 궁전 도상 체계와 아케이드 연혁 — REEL ARCHIVE',
      description:
        '황금성 릴게임의 금괴·동전·복주머니·황금 궁전 심볼과 2000년대 중반 아케이드 시장에서의 위치, 법적 규제 배경을 정리합니다.',
      keywords: ['황금성', '황금성 심볼', '릴게임 황금성', '릴게임 백과'],
    },
  },
  {
    slug: 'aladdin',
    accessionCode: 'ARC-KR-05',
    titleKo: '알라딘',
    titleEn: 'ALADDIN',
    era: '2000년대 중반 유통',
    themeCategory: '신화·황금',
    reelSpec: '화면형 3릴·판타지 서사 연출형',
    heroImage: ARCHIVE_IMAGES.imperial,
    imageCaption: '아카이브 연출 이미지 — 고대 보석과 황금 공예품을 테마로 한 전시 아카이브',
    imageAlt: '짙은 녹색 배경 위 고전 황금 공예 메달과 에메랄드 원석 전시 사진',
    summary:
      '천일야화(아라비안 나이트) 설화를 바탕으로 요술 램프, 마법 양탄자, 보석 등 이국적인 판타지 도상을 화면에 구현한 서사형 릴게임입니다.',
    themeAndBackground:
      '알라딘은 중동 설화 특유의 신비로운 밤하늘과 궁전, 마법의 유물을 시각적 중심으로 삼았습니다. 해양이나 동양 무협·궁전 테마가 주류였던 시장에서 이국적인 색채와 동화적 상상력을 전면에 내세워 독자적인 영역을 형성했습니다.',
    historicalContext:
      '2000년대 중반 화면형 아케이드 릴게임이 서사적 연출을 강화하던 시기에 보급되었습니다. 단순 기호 나열보다 캐릭터와 소품이 얽히는 짧은 애니메이션 시퀀스를 강조한 과도기적 특징을 보여줍니다.',
    generalStructure:
      '화면 속 릴이 멈출 때마다 램프나 보석 등 서사 소품의 연출이 연동되어 분위기를 고조시키는 구조였습니다. 구체적인 내부 확률 설계나 수익 구조는 비공개 영역이며, 임의로 추정할 수 없습니다.',
    cabinetFeatures:
      '보라색과 금색 계열의 화려한 아트워크 패널을 전면 상단에 부착하고, 직관적인 대형 원형 버튼을 배치해 장시간 시인성을 확보한 캐비닛 사양이 일반적이었습니다.',
    socialContext:
      '국내 아케이드 게임장 전성기 말미에 유통되다가 2006년 이후 사행성 규제 강화 및 등급 분류 재편 과정에서 시장에서 물러났습니다.',
    legalCaution:
      '인터넷상에서 ‘알라딘 릴게임’ 등의 이름으로 운영되는 비인가 사이트는 법적 보호를 받을 수 없는 불법 사행성 도박 사이트일 가능성이 높으므로 각별히 경계해야 합니다.',
    symbols: [
      {
        name: '요술 램프',
        englishName: 'Magic Lamp',
        visualKey: 'lamp',
        meaning: '천일야화 설화의 핵심 매개체로, 극적인 장면 전환을 이끄는 상징입니다.',
      },
      {
        name: '보석',
        englishName: 'Precious Gem',
        visualKey: 'gem',
        meaning: '신비로운 동굴과 왕실의 보물을 형상화한 다채로운 색상의 심볼입니다.',
      },
      {
        name: '마법 양탄자',
        englishName: 'Flying Carpet',
        visualKey: 'carpet',
        meaning: '자유로운 비행과 모험 서사를 나타내는 대표적인 판타지 소품입니다.',
      },
      {
        name: '황금 왕관',
        englishName: 'Royal Crown',
        visualKey: 'crown',
        meaning: '이야기 속 술탄과 왕국의 권위를 표현하는 상징 도상입니다.',
      },
    ],
    relatedSlugs: ['golden-castle', 'son-ogong', 'new-world'],
    faqs: [
      {
        question: '알라딘 게임의 심볼 구성은 해외 슬롯머신과 관련이 있나요?',
        answer:
          '신화나 동화 모티프를 테마로 차용하는 방식은 전 세계 슬롯 및 아케이드 게임에서 공통적으로 나타나는 디자인 문법입니다. 다만 국내 화면형 릴게임은 한국 성인 게임장의 독자적 기기 구조와 연출 흐름을 따랐습니다.',
      },
    ],
    seo: {
      title: '릴게임 알라딘 | 천일야화 심볼 분석과 아케이드 아카이브 — REEL ARCHIVE',
      description:
        '알라딘 릴게임의 요술 램프·보석·마법 양탄자·왕관 심볼의 테마 의미와 2000년대 중반 한국 아케이드 역사 속 배경을 알아봅니다.',
      keywords: ['알라딘 릴게임', '릴게임 알라딘', '요술 램프 심볼', '릴게임 종류'],
    },
  },
  {
    slug: 'new-world',
    accessionCode: 'ARC-KR-06',
    titleKo: '신천지',
    titleEn: 'NEW WORLD',
    era: '2000년대 중반 유통',
    themeCategory: '해양·항해',
    reelSpec: '화면형 3릴·탐험 시퀀스 아케이드',
    heroImage: ARCHIVE_IMAGES.ocean,
    imageCaption: '아카이브 연출 이미지 — 미지의 항로와 탐험 장비를 형상화한 전시 연출',
    imageAlt: '고전 항해 계기판과 해양 모티프가 배치된 어두운 에메랄드 전시 공간',
    summary:
      '미지의 신대륙 발견과 대항해 시대의 탐험 정신을 배경으로, 지도·나침반·선박·보물 등 모험 서사를 화면형 릴 구조에 녹여낸 타이틀입니다.',
    themeAndBackground:
      '신천지(New World)는 새로운 세계를 향한 항해와 개척을 모티프로 삼았습니다. 해양 테마의 푸른 바다와 황금 테마의 보물 서사가 교차하는 지점에 위치해, 탐험의 긴장감과 발견의 성취감을 시각적으로 연출하는 데 주력했습니다.',
    historicalContext:
      '2000년대 중반 아케이드 게임 시장에서 기존 인기작들의 후속·변주 흐름 속에서 등장했습니다. 항해와 보물찾기라는 고전적 어드벤처 코드를 화면형 릴게임의 시각 문법으로 풀어낸 사례로 기록됩니다.',
    generalStructure:
      '릴 회전 프레임과 항로 지도가 결합된 화면 구성을 통해, 특정 기호 조합 시 배경이 새로운 섬이나 대륙으로 전환되는 듯한 연출을 선보였습니다. 세부 확률 및 환수율 수치는 확인 가능한 공식 문서가 존재하지 않습니다.',
    cabinetFeatures:
      '어두운 목재·금속 혼합 프레임에 밝은 톤의 탐험 지도 마퀴를 결합해 오락실 실내에서도 쉽게 식별되도록 설계된 기종들이 주로 유통되었습니다.',
    socialContext:
      '다른 화면형 릴게임들과 마찬가지로 2006년 사행성 게임물 단속 및 게임산업법 시행 이후 오프라인 시장에서 퇴출되었습니다.',
    legalCaution:
      '과거 아케이드 게임 명칭을 사용한 온라인 사설 사이트는 현행법상 불법이며, 이용자 개인정보 유출 및 환전 사기 위험이 상존하므로 각별히 주의해야 합니다.',
    symbols: [
      {
        name: '항해 선박',
        englishName: 'Explorer Galleon',
        visualKey: 'ship',
        meaning: '신대륙을 향해 나아가는 개척자의 여정을 뜻하는 대표 상징입니다.',
      },
      {
        name: '황금 나침반',
        englishName: 'Golden Compass',
        visualKey: 'compass',
        meaning: '미지의 해역에서 방향을 제시하는 탐험의 필수 도구를 형상화했습니다.',
      },
      {
        name: '북극성',
        englishName: 'Guiding Star',
        visualKey: 'star',
        meaning: '항해자의 길잡이이자 새로운 세계의 도래를 알리는 표식입니다.',
      },
      {
        name: '왕실 금화',
        englishName: 'Voyage Coin',
        visualKey: 'coin',
        meaning: '대항해 시대의 교역과 발견된 유물을 상징합니다.',
      },
    ],
    relatedSlugs: ['yamato', 'ocean-paradise', 'golden-castle'],
    faqs: [
      {
        question: '신천지 게임은 바다이야기 계열과 어떤 점이 유사한가요?',
        answer:
          '바다와 항해를 시각적 배경으로 활용하고 화면 내 서사적 애니메이션 전환을 강조했다는 점에서 동시대 해양·탐험 계열 아케이드 릴게임과 같은 맥락을 공유합니다.',
      },
    ],
    seo: {
      title: '릴게임 신천지 | 대항해 탐험 테마 기종과 규제 연혁 — REEL ARCHIVE',
      description:
        '신천지 릴게임의 항해·탐험 테마 심볼(선박·나침반·북극성), 화면 구조 및 게임산업법 규제 배경을 중립적으로 해설합니다.',
      keywords: ['신천지 릴게임', '릴게임 신천지', '릴게임 역사', '릴게임 백과'],
    },
  },
  {
    slug: 'cherry-master',
    accessionCode: 'ARC-KR-07',
    titleKo: '체리마스터',
    titleEn: 'CHERRY MASTER',
    era: '1990년대~2000년대 초 계보',
    themeCategory: '클래식 메달',
    reelSpec: '3×3 8라인 클래식 메달 아케이드',
    heroImage: ARCHIVE_IMAGES.vintageArcade,
    imageCaption: '아카이브 연출 이미지 — 고전 과일 심볼과 숫자 7이 새겨진 빈티지 릴 드럼 연출',
    imageAlt: '베벨 유리 너머 체리와 골든 세븐 심볼이 회전하는 빈티지 아케이드 릴 기기 사진',
    summary:
      '1990년대 국내 오락실 메달게임 시대를 대표하는 고전 과일 릴게임으로, 2000년대 화면형 릴게임이 등장하기 전 아케이드 릴 구조의 원형을 보여줍니다.',
    themeAndBackground:
      '체리마스터는 19세기 말 기계식 슬롯머신에서 유래한 과일(체리, 수박, 오렌지)과 벨, 숫자 7, BAR 등 가장 보편적인 고전 릴 심볼 체계를 계승했습니다. 복잡한 3D 서사 연출 없이 심볼의 직관적인 색상과 배열 그 자체에 집중한 클래식 디자인이 특징입니다.',
    historicalContext:
      '1990년대 초중반부터 국내 오락실 및 성인 게임장에 보급된 초기 전자식·메달식 아케이드 기기 계보를 대표합니다. 이후 2000년대 초반 스크린 기반 한국형 릴게임들이 등장하기 전까지, 한국 대중에게 ‘릴게임’과 ‘8라인’이라는 용어를 각인시킨 원조 격 타이틀로 꼽힙니다.',
    generalStructure:
      '전통적인 3행 3열(총 9칸) 격자에서 가로 3줄, 세로 3줄, 대각선 2줄을 합친 8개 라인(8-Line) 구성을 취하는 것이 전형적이었습니다. 각 칸이 독립적으로 회전하거나 3개의 수직 릴이 멈추는 구조는 현대 비디오 슬롯의 기초적 문법과도 맞닿아 있습니다.',
    cabinetFeatures:
      '서서 또는 앉아서 조작하는 소형 메달 캐비닛 형태가 많았으며, 동전이나 금속 메달을 투입하고 물리적 버튼을 눌러 릴을 순차 정지(Stop)시키는 손맛과 단순 명쾌한 전자음이 특징이었습니다.',
    socialContext:
      '1990년대 오락실 메달 코너 문화의 일부로 자리 잡았으나, 이후 점수 환전이나 불법 개조 문제가 불거지면서 법적 단속 대상이 되기도 했습니다. 역사적으로는 한국 아케이드 릴게임이 메달식에서 화면형으로 진화하는 연결고리 역할을 했습니다.',
    legalCaution:
      '고전 아케이드 명칭을 복각해 사설 도박이나 환전 시스템을 결합한 온라인 서비스는 현행법상 엄격히 금지되어 있습니다. 역사적 아케이드 자료로서만 이해하고 불법 사이트 이용에 유의해야 합니다.',
    symbols: [
      {
        name: '체리',
        englishName: 'Cherry',
        visualKey: 'cherry',
        meaning: '초기 과일 껌 자판기 겸용 슬롯머신 시대부터 이어진 가장 유서 깊은 고전 심볼입니다.',
      },
      {
        name: '수박',
        englishName: 'Watermelon',
        visualKey: 'watermelon',
        meaning: '과일 테마 릴 배열에서 선명한 녹색과 적색 대비로 시인성을 높이는 대표 심볼입니다.',
      },
      {
        name: '황금 벨',
        englishName: 'Liberty Bell',
        visualKey: 'bell',
        meaning: '1895년 찰스 페이의 ‘리버티 벨’에서 유래한 기계식 슬롯의 상징적 유산입니다.',
      },
      {
        name: '숫자 7',
        englishName: 'Lucky Seven',
        visualKey: 'seven',
        meaning: '서구권과 아시아권 모두에서 행운과 완성을 뜻하는 클래식 아케이드 아이콘입니다.',
      },
    ],
    relatedSlugs: ['golden-castle', 'son-ogong', 'bada-story'],
    faqs: [
      {
        question: '체리마스터는 바다이야기보다 먼저 등장했나요?',
        answer:
          '네. 체리마스터 계열의 3×3 과일 메달게임은 1990년대부터 국내 오락실에 보급되었으며, 바다이야기 같은 한국형 서사 화면형 릴게임(2004년경)보다 앞선 세대의 기기 문법을 대표합니다.',
      },
    ],
    seo: {
      title: '릴게임 체리마스터 | 1990년대 8라인 메달 릴의 원형 — REEL ARCHIVE',
      description:
        '한국 아케이드 릴게임의 원형인 체리마스터의 3×3 8라인 구조, 체리·수박·벨·숫자 7 심볼의 유래와 역사적 의의를 설명합니다.',
      keywords: ['체리마스터', '체리 심볼', '메달게임 역사', '릴게임 뜻'],
    },
  },
  {
    slug: 'son-ogong',
    accessionCode: 'ARC-KR-08',
    titleKo: '손오공',
    titleEn: 'SON OGONG',
    era: '2000년대 중반 유통',
    themeCategory: '신화·황금',
    reelSpec: '화면형 3릴·동양 설화 서사형',
    heroImage: ARCHIVE_IMAGES.imperial,
    imageCaption: '아카이브 연출 이미지 — 동양 고전 문양과 황실 장식을 모티프로 한 전시물',
    imageAlt: '용과 구름 문양이 새겨진 고전 황동 메달과 주화가 놓인 다크 그린 석판 전시',
    summary:
      '고전 소설 『서유기』의 주인공 손오공과 여의봉, 근두운, 삼장법사 등 친숙한 동양 설화 캐릭터를 전면에 내세운 서사형 릴게임입니다.',
    themeAndBackground:
      '손오공은 아시아권에서 가장 널리 알려진 고전 영웅 서사인 『서유기』를 아케이드 화면 위로 옮겨온 작품입니다. 해양·황금 궁전 테마가 시장을 양분하던 시기에, 개성 있는 캐릭터성과 무협·신화적 액션 연출을 결합해 대중적 친숙함을 확보했습니다.',
    historicalContext:
      '2000년대 중반 국내 성인 게임장 기기의 콘텐츠 경쟁이 치열해지면서, 단순 배경이 아닌 명확한 주인공 캐릭터가 사건을 이끄는 형태로 개발되었습니다. 한국뿐만 아니라 동아시아 아케이드 문화권 전반에서 서유기 모티프가 빈번히 차용된 흐름과도 맞물려 있습니다.',
    generalStructure:
      '화면 중앙의 심볼 조합과 함께 손오공이 여의봉을 휘두르거나 근두운을 타고 이동하는 컷신 애니메이션이 연동되는 구조를 취했습니다. 내부적인 확률 알고리즘은 공개된 공식 자료가 없어 특정 수치를 제시하지 않습니다.',
    cabinetFeatures:
      '붉은색과 금색 계열의 역동적인 캐릭터 일러스트가 캐비닛 상단 패널과 하단 배너를 장식했으며, 강렬한 타격 효과음을 강조한 오디오 세팅이 특징이었습니다.',
    socialContext:
      '2006년 사행성 게임물 단속 및 제도 개편 이후 오프라인 영업장에서는 정리되었으나, 동양 고전 설화를 아케이드 릴 문법에 접목한 대표적 사례로 언급됩니다.',
    legalCaution:
      '‘손오공 릴게임’ 등을 내세운 온라인 및 모바일 사설 플랫폼은 게임물관리위원회의 적법한 등급 분류를 받은 서비스가 아니므로 금전 충전이나 이용을 절대 삼가야 합니다.',
    symbols: [
      {
        name: '손오공',
        englishName: 'Monkey King',
        visualKey: 'son-ogong',
        meaning: '지혜와 용맹, 변화무쌍한 활력을 상징하는 『서유기』의 중심 인물입니다.',
      },
      {
        name: '여의봉',
        englishName: 'Yeouibong Staff',
        visualKey: 'yeouibong',
        meaning: '크기를 자유자재로 바꾸는 신비한 병기로, 극적인 국면 돌파를 상징합니다.',
      },
      {
        name: '근두운',
        englishName: 'Somersault Cloud',
        visualKey: 'cloud',
        meaning: '천리를 순식간에 오가는 신비로운 이동과 상승의 이미지를 표현합니다.',
      },
      {
        name: '삼장법사',
        englishName: 'Monk Xuanzang',
        visualKey: 'samjang',
        meaning: '일행의 여정을 이끄는 구도자이자 고전 서사의 중심축을 뜻합니다.',
      },
    ],
    relatedSlugs: ['golden-castle', 'aladdin', 'cherry-master'],
    faqs: [
      {
        question: '손오공 릴게임의 심볼은 어떤 이야기에서 유래했나요?',
        answer:
          '명나라 시대의 고전 소설 『서유기』에 등장하는 인물과 신비한 보물(여의봉, 근두운)에서 유래했습니다. 대중에게 익숙한 서사를 통해 게임의 시각적 이해도를 높이는 역할을 했습니다.',
      },
    ],
    seo: {
      title: '릴게임 손오공 | 서유기 설화 도상과 기기 특징 리포트 — REEL ARCHIVE',
      description:
        '손오공 릴게임의 손오공·여의봉·근두운·삼장법사 심볼의 문화적 의미와 2000년대 중반 아케이드 역사 및 법적 주의사항을 정리합니다.',
      keywords: ['손오공 릴게임', '여의봉 심볼', '서유기 릴게임', '릴게임 종류'],
    },
  },
];

export const HISTORY_TIMELINE: TimelineEra[] = [
  {
    id: 'era-1895',
    period: '19세기 말 (1895년경)',
    title: '기계식 슬롯머신의 탄생',
    subtitle: 'Mechanical Origins · Liberty Bell',
    summary:
      '미국 샌프란시스코의 발명가 찰스 페이(Charles Fey)가 세 개의 회전 드럼과 자동 정산 메커니즘을 갖춘 ‘리버티 벨(Liberty Bell)’을 개발하면서, 현대 모든 릴 기반 게임의 기계적 원형이 확립되었습니다.',
    keyFacts: [
      '3개의 물리적 회전 릴(Reel)과 5개의 기본 심볼(말굽, 다이아몬드, 스페이드, 하트, 자유의 종) 도입',
      '레버를 당겨 스프링 장력으로 릴을 회전시키는 기계식 구조 확립',
      '이후 과일 껌 자판기 형태를 거쳐 체리·BAR 등 고전 심볼 체계로 확산',
    ],
    sourceLabel: '출처: 미국 스미스소니언·네바다 주립 박물관 산업사 아카이브 기록',
    image: ARCHIVE_IMAGES.mechanicalSlot,
    imageAlt: '19세기 말 주철과 황동으로 제작된 3릴 기계식 슬롯머신 아카이브 전시 사진',
    imageCaption: 'Fig. 1 — 아카이브 연출 이미지: 19세기 말 주철·황동 3릴 기계식 메커니즘 재현',
  },
  {
    id: 'era-1990s',
    period: '1990년대',
    title: '국내 오락실 메달게임의 발전',
    subtitle: 'Arcade Medal Era · 8-Line Classics',
    summary:
      '전자 기판 기술의 발달과 함께 국내 오락실 및 유원시설에 일본·대만계 전자식 메달게임과 과일 릴 아케이드 기기가 보급되었습니다. 체리마스터와 같은 3×3 8라인 기종이 한국식 릴게임의 초기 사용자 경험을 형성했습니다.',
    keyFacts: [
      '물리적 레버 대신 푸시 버튼으로 릴을 순차 정지시키는 전자식 제어 확산',
      '체리, 수박, 벨, 숫자 7 등 직관적인 고전 아케이드 심볼 보편화',
      '금속 메달이나 점수 티켓을 매개로 한 오프라인 아케이드 문화 형성',
    ],
    sourceLabel: '출처: 한국콘텐츠진흥원(KOCCA) 대한민국 게임백서 아케이드 산업사 참조',
    image: ARCHIVE_IMAGES.vintageArcade,
    imageAlt: '과일과 숫자 7 심볼이 담긴 빈티지 아케이드 릴 드럼과 크롬 버튼 연출 사진',
    imageCaption: 'Fig. 2 — 아카이브 연출 이미지: 1990년대 전자식 메달 아케이드 버튼과 릴 드럼',
  },
  {
    id: 'era-early-2000s',
    period: '2000년대 초',
    title: '화면형 릴게임의 등장과 전환',
    subtitle: 'Digital Screen Transition',
    summary:
      '물리적 드럼이 CRT 모니터와 그래픽 보드로 대체되면서, 단순 심볼 배열을 넘어 배경 애니메이션과 서사 연출이 결합된 한국 고유의 ‘화면형 릴게임’이 등장하기 시작했습니다.',
    keyFacts: [
      '기계적 고장을 줄이고 화려한 시청각 효과를 구현하는 디지털 비디오 릴 전환',
      '2002년경 경품용 상품권 제도의 도입과 맞물려 성인 전용 게임장 수 급증',
      '단순 과일 도상에서 벗어난 독자적 국내 개발 테마 기획 활성화',
    ],
    sourceLabel: '출처: 문화체육관광부·감사원 아케이드 게임 제도 변천 보고서',
  },
  {
    id: 'era-2004-2005',
    period: '2004 ~ 2005년',
    title: '해양 및 황금 테마 게임의 전성기',
    subtitle: 'Thematic Proliferation · Sea & Gold',
    summary:
      '바다이야기, 오션파라다이스, 야마토, 황금성, 알라딘, 손오공 등 독자적인 세계관과 캐릭터를 앞세운 화면형 릴게임이 전국 성인 게임장에 폭발적으로 보급된 시기입니다.',
    keyFacts: [
      '고래·상어·산호 등 해양 생태계 테마(바다이야기·오션파라다이스)의 대중화',
      '황금 궁전·동양 설화(황금성·손오공) 및 판타지(알라딘)로 테마 스펙트럼 확장',
      '예고 연출과 스토리 컷신이 결합된 한국형 아케이드 문법 정착',
    ],
    sourceLabel: '출처: 영상물등급위원회 당시 아케이드 심의 목록 및 언론 아카이브',
    image: ARCHIVE_IMAGES.ocean,
    imageAlt: '2000년대 중반 해양 테마를 상징하는 황동 고래 부조 전시 사진',
    imageCaption: 'Fig. 3 — 아카이브 연출 이미지: 2004~2005년 해양 테마 유행을 상징하는 조형물',
  },
  {
    id: 'era-2006',
    period: '2006년 전후',
    title: '바다이야기 사태와 규제 전면 강화',
    subtitle: 'Regulatory Turning Point',
    summary:
      '성인 게임장의 경품용 상품권 사설 환전, 프로그램 개·변조, 과도한 사행성 조장이 심각한 사회 문제로 대두되면서 범정부 차원의 단속과 법제 개편이 단행되었습니다.',
    keyFacts: [
      '2006년 4월 「게임산업진흥에 관한 법률」 제정 및 2006년 10월 시행',
      '경품용 상품권 제도 전면 폐지 및 사행성 게임물(바다이야기 등) 대대적 단속',
      '기존 영상물등급위원회에서 게임물 전문 심의기구 분리 신설 결정',
    ],
    sourceLabel: '출처: 법제처 국가법령정보센터 「게임산업진흥에 관한 법률」 제정 연혁 (2006)',
  },
  {
    id: 'era-post-2007',
    period: '2007년 ~ 현재',
    title: '게임물 등급 분류 및 제도 정착',
    subtitle: 'Modern Classification & Oversight',
    summary:
      '게임물등급위원회 출범(2006.10)과 이후 게임물관리위원회 전환(2013)을 거치며, 아케이드 게임물의 사행성 차단, 경품 지급 한도 제한, 불법 환전 및 사설 온라인 사이트 차단 체계가 정착되었습니다.',
    keyFacts: [
      '게임물관리위원회(GRAC)를 중심으로 아케이드 게임물 사전 등급분류 및 사후관리 엄격화',
      '게임산업법상 환전·환전 알선 및 재산상 이익 제공 금지 원칙 명문화',
      '불법 사행성 게임물 신고센터 및 한국도박문제예방치유원(1336) 등 공공 안전망 구축',
    ],
    sourceLabel: '출처: 게임물관리위원회(GRAC) 공식 연혁 및 게임산업진흥에 관한 법률',
  },
];

export const SYMBOL_GALLERY: SymbolGalleryGroup[] = [
  {
    gameSlug: 'bada-story',
    gameTitleKo: '바다이야기',
    gameTitleEn: 'BADA STORY',
    themeSummary: '푸른 심해의 생태계를 다섯 가지 대표 해양 모티프로 시각화한 구성입니다.',
    symbols: GAMES_DATA[0].symbols,
  },
  {
    gameSlug: 'golden-castle',
    gameTitleKo: '황금성',
    gameTitleEn: 'GOLDEN CASTLE',
    themeSummary: '동양의 황실 건축과 전통 재화·길조의 상징물을 금빛 색채로 정제했습니다.',
    symbols: GAMES_DATA[3].symbols,
  },
  {
    gameSlug: 'aladdin',
    gameTitleKo: '알라딘',
    gameTitleEn: 'ALADDIN',
    themeSummary: '천일야화 설화의 마법 유물과 이국적 왕실 보물을 중심으로 구성됩니다.',
    symbols: GAMES_DATA[4].symbols,
  },
  {
    gameSlug: 'son-ogong',
    gameTitleKo: '손오공',
    gameTitleEn: 'SON OGONG',
    themeSummary: '고전 『서유기』의 주요 인물과 신비로운 법구를 동양화풍 아이콘으로 담았습니다.',
    symbols: GAMES_DATA[7].symbols,
  },
  {
    gameSlug: 'cherry-master',
    gameTitleKo: '체리마스터',
    gameTitleEn: 'CHERRY MASTER',
    themeSummary: '19세기 말 기계식 슬롯에서 비롯된 과일·벨·행운의 7 클래식 도상입니다.',
    symbols: GAMES_DATA[6].symbols,
  },
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    criterion: '역사적 기원',
    reelGame: '1990년대 오락실 메달게임 및 2000년대 초 한국 화면형 아케이드 문화에서 분화',
    slotMachine: '1895년경 미국 찰스 페이의 기계식 ‘리버티 벨’과 카지노 산업에서 직계 발전',
    note: '동일한 회전 릴 메커니즘을 뿌리에 두었으나 발전 경로가 상이함',
  },
  {
    criterion: '일반적인 게임 구조',
    reelGame: '릴 배열 정지 결과와 배경 화면의 서사·애니메이션 예고 연출이 밀접하게 결합',
    slotMachine: '난수발생기(RNG) 연산 결과에 따른 페이아웃 라인·웨이즈 매칭 중심 구조',
    note: '화면 연출의 서사 비중과 직관적 정산 구조에서 차이 발생',
  },
  {
    criterion: '릴의 개수',
    reelGame: '전통 3릴(또는 3×3 9칸) 기반의 단일·다중 라인 구성이 주류',
    slotMachine: '3릴 클래식 머신부터 5릴·6릴 비디오 슬롯, 메가웨이즈 등 매우 다양',
    note: '현대 카지노 슬롯은 5릴 이상 비디오 포맷이 표준화됨',
  },
  {
    criterion: '심볼 구성',
    reelGame: '해양 생물, 동양 설화, 황실 보물, 고전 과일 등 한국 친화적 테마 도상 중심',
    slotMachine: '카드 기호(A·K·Q·J), 과일, BAR, 세븐 및 글로벌 라이선스 IP 심볼 활용',
    note: '문화권에 따른 시각적 친숙도 차이 반영',
  },
  {
    criterion: '이용 환경',
    reelGame: '과거 국내 도심 오프라인 성인 게임장(현재 사행성 기기는 법적으로 금지·단속)',
    slotMachine: '국내외 정식 인허가를 받은 합법 카지노 영업장 전용 구역',
    note: '대한민국 내에서는 허가된 카지노 외 현금성 슬롯·릴 운영 불가',
  },
  {
    criterion: '운영 방식',
    reelGame: '개별 아케이드 캐비닛 단위의 독립 구동 및 과거 경품 배출(현재 환전 금지)',
    slotMachine: '카지노 중앙 관리 서버(CMS) 연동, 티켓 인/아웃(TITO) 및 잭팟 네트워크 연결',
    note: '인허가 카지노는 중앙 감사 시스템 하에 엄격히 관리됨',
  },
  {
    criterion: '환수율 정보 공개 여부',
    reelGame: '과거 오프라인 기기의 공식 RTP 수치 미공개 및 기기별 편차로 객관적 확인 불가',
    slotMachine: '관할 게임 규제기관(네바다·마카오 등) 기준에 따라 최소 환수율 규정 및 감사 적용',
    note: '확인되지 않은 온라인 릴게임의 환수율 홍보는 신뢰할 수 없음',
  },
  {
    criterion: '국가별 법적 규제',
    reelGame: '한국 「게임산업진흥에 관한 법률」에 의해 사행성·환전형 운영 엄격 금지',
    slotMachine: '한국(「관광진흥법」상 허가 카지노), 미국(주별 게이밍 위원회), 일본(풍영법) 등 별도 규율',
    note: '국내에서는 합법 카지노와 일반 아케이드 게임장의 법적 지위가 완전히 분리됨',
  },
];

export const LEGAL_DOSSIERS: LegalDossierItem[] = [
  {
    id: 'rating-system',
    code: 'STATUTE 01',
    title: '게임물 등급 분류 제도',
    summary:
      '대한민국에서 유통되는 모든 아케이드 및 디지털 게임물은 제공 전 법정 기관의 등급 분류를 거쳐야 합니다.',
    details: [
      '「게임산업진흥에 관한 법률」 제21조에 따라 게임물관리위원회(GRAC) 또는 지정 등급분류기관의 사전 심의를 받아야 합니다.',
      '과거 영상물등급위원회 시절 통과된 기기라 하더라도 프로그램을 임의로 개·변조하거나 사행성을 가미하면 등급분류 취소 및 형사 처벌 대상이 됩니다.',
      '아케이드 게임물은 전체이용가와 청소년이용불가 등급으로 엄격히 구분되며, 베팅·배당·우연적 결과로 환전을 조장하는 사행성 게임물은 등급 분류 자체가 거부됩니다.',
    ],
    source: '근거: 「게임산업진흥에 관한 법률」 제21조·제22조 / 게임물관리위원회(grac.or.kr)',
  },
  {
    id: 'game-industry-act',
    code: 'STATUTE 02',
    title: '게임산업진흥에 관한 법률 및 사행성 규제',
    summary:
      '2006년 제정된 게임산업법은 정상적인 게임 문화 진흥과 사행성 조장 행위 차단을 핵심 목적으로 합니다.',
    details: [
      '법 제2조 제1호의2 및 제28조는 우연적인 방법으로 결과를 얻어 재산상 이익·손실을 주는 사행성 게임물의 유통과 게임물 이용자의 사행 행위를 금지합니다.',
      '게임물 관련 사업자는 시간당 투입 금액 제한, 게임기 개·변조 금지, 점수 보관증 발행 금지 등 엄격한 영업 준수사항을 따라야 합니다.',
      '적법한 등급을 받은 아케이드 게임이라 하더라도 영업장 내에서 점수에 따라 현금이나 유가증권을 지급하는 순간 불법 사행행위 영업으로 전환됩니다.',
    ],
    source: '근거: 법제처 국가법령정보센터 「게임산업진흥에 관한 법률」 제2조·제28조·제32조',
  },
  {
    id: 'prize-exchange',
    code: 'STATUTE 03',
    title: '경품 지급 및 환전 금지 규정',
    summary:
      '2006년 경품용 상품권 제도 폐지 이후, 유가증권 제공 및 환전·환전 알선 행위는 전면 불법입니다.',
    details: [
      '법 제32조 제1항 제7호에 따라 누구든지 게임물의 이용을 통하여 획득한 유·무형의 결과물(점수, 경품, 게임머니 등)을 환전하거나 환전을 알선·재매입하는 업을 할 수 없습니다.',
      '청소년이용불가 아케이드 게임장에서는 원칙적으로 경품 제공 자체가 금지되어 있으며, 전체이용가 게임물도 대통령령이 정한 소비자가격 1만 원 이내의 제한적 경품(완구·문구 등)만 허용됩니다.',
      '위반 시 5년 이하의 징역 또는 5천만 원 이하의 벌금 등 무거운 형사 처벌 규정이 적용됩니다.',
    ],
    source: '근거: 「게임산업진흥에 관한 법률」 제32조 제1항 제7호·제44조 / 동법 시행령 제16조의2',
  },
  {
    id: 'online-illegal',
    code: 'SECURITY 04',
    title: '온라인 불법 사이트 구별법 및 금융사기 위험',
    summary:
      '“정식 심의 완료”, “높은 환수율 보장” 등의 문구로 유인하는 온라인 릴게임 서비스는 모두 불법입니다.',
    details: [
      '구별 기준 ①: 계좌이체, 무통장 입금, 상품권 핀번호 또는 가상자산으로 게임 머니를 충전하고 현금 환전을 약속하는 사이트는 100% 불법 사설 사이트입니다.',
      '구별 기준 ②: 게임물관리위원회 홈페이지의 ‘등급분류 조회’에서 실제 심의 번호와 일치하는지 확인할 수 있으며, 불법 사이트는 타 게임의 심의번호를 도용하거나 가짜 인증 마크를 게시합니다.',
      '보안·금융 위험: 비인가 APK 설치 파일이나 피싱 링크를 통해 악성코드 감염, 신분증·계좌 정보 탈취, 대포통장 연루(전자금융거래법 위반) 및 보이스피싱 피해로 이어질 수 있습니다.',
    ],
    source: '근거: 게임물관리위원회 불법게임물 신고센터 / 경찰청 사이버수사국 예방 안내',
  },
];

export const HELPLINE_INFO = {
  organization: '한국도박문제예방치유원 (KCGP)',
  helplineNumber: '1336',
  operatingHours: '연중무휴 24시간 무료 상담 (유선 및 온라인 채팅)',
  website: 'https://www.kcgp.or.kr',
  textCounsel: '문자 상담 #1336 / 온라인 넷라인(netline.kcgp.or.kr)',
  description:
    '과도한 사행성 게임 이용으로 본인이나 가족이 경제적·심리적 어려움을 겪고 있다면 전문 상담기관의 비밀 보장 상담을 받을 수 있습니다. 모든 상담 내용은 비공개로 보호됩니다.',
};

export const GLOBAL_FAQS: GlobalFaqItem[] = [
  {
    id: 'faq-1',
    category: '기본 개념',
    question: '릴게임이란 무엇인가요?',
    answer:
      '릴게임(Reel Game)은 회전하는 원통형 바퀴(Reel) 또는 화면상의 가상 릴 위에 배치된 심볼들이 일정한 규칙이나 우연에 의해 멈추면서 조합을 이루는 형태의 게임을 뜻합니다. 한국에서는 1990년대 오락실 메달게임과 2000년대 중반 성인 게임장의 화면형 아케이드 게임을 통칭하는 용어로 널리 쓰였습니다.',
  },
  {
    id: 'faq-2',
    category: '구조 비교',
    question: '릴게임과 슬롯머신은 같은 게임인가요?',
    answer:
      '회전하는 릴과 심볼 매칭이라는 기계적 뿌리는 같지만, 한국에서 지칭하는 ‘릴게임’과 카지노의 ‘슬롯머신’은 발전 경로와 법적 지위가 다릅니다. 한국 릴게임은 2000년대 화면형 서사 연출 중심의 오프라인 아케이드 형태로 독자 분화되었으며, 현재 환전이 수반되는 사행성 릴게임은 법적으로 금지되어 있습니다. 반면 슬롯머신은 「관광진흥법」 등 각국 법령에 따라 허가된 카지노 내부에서만 운영됩니다.',
  },
  {
    id: 'faq-3',
    category: '대표 게임',
    question: '바다이야기와 오션파라다이스는 무엇이 다른가요?',
    answer:
      '두 게임 모두 2004~2005년 무렵 국내 아케이드 시장의 해양 테마 유행을 대표하던 화면형 릴게임이지만, 서로 다른 타이틀과 기기 계보를 가집니다. 바다이야기가 고래·상어 등 굵직한 심해 생물과 2006년 정책 전환의 상징성으로 기억된다면, 오션파라다이스는 산호초와 열대 어류 등 다채로운 수중 낙원 연출에 초점을 맞춘 후속 유행작 중 하나로 분류됩니다.',
  },
  {
    id: 'faq-4',
    category: '역사',
    question: '릴게임의 역사는 어떻게 되나요?',
    answer:
      '릴 메커니즘의 역사는 1895년경 미국 찰스 페이의 3릴 기계식 슬롯머신 ‘리버티 벨’에서 시작됩니다. 한국에서는 1990년대 체리마스터 같은 오락실 메달게임을 거쳐 2000년대 초반 화면형 디지털 릴게임으로 전환되었고, 2004~2005년 해양·황금 테마가 급성장했으나 2006년 바다이야기 사태와 「게임산업진흥에 관한 법률」 제정을 계기로 사행성 기기들이 전면 규제되었습니다.',
  },
  {
    id: 'faq-5',
    category: '법률·안전',
    question: '온라인 릴게임은 합법인가요?',
    answer:
      '현금이나 유가증권으로 환전이 가능하거나 사행성을 띤 온라인 릴게임 서비스는 대한민국 현행법상 합법이 아닙니다. 「게임산업진흥에 관한 법률」은 게임 결과물의 환전과 환전 알선, 사행성 게임물의 유통을 엄격히 금지하고 있으며, 인터넷에 유포되는 관련 사이트나 앱은 무허가 불법 도박 사이트에 해당합니다.',
  },
  {
    id: 'faq-6',
    category: '법률·안전',
    question: '오프라인 게임장의 릴게임은 어떤 규제를 받나요?',
    answer:
      '국내 모든 아케이드 게임장은 「게임산업진흥에 관한 법률」에 따라 게임물관리위원회의 등급 분류를 받은 기기만 설치해야 하며, 기기의 임의 개·변조, 점수 보관증 발행, 경품용 상품권 지급 및 사설 환전 행위가 전면 금지됩니다. 적법한 전체이용가 아케이드 게임이라도 정해진 경품 한도(소비자가격 1만 원 이내)와 운영 수칙을 위반하면 형사 처벌을 받습니다.',
  },
  {
    id: 'faq-7',
    category: '용어 해설',
    question: '환수율(RTP)이란 무엇인가요?',
    answer:
      '환수율(RTP, Return to Player)은 통계적으로 장기간에 걸쳐 게임에 투입된 총금액 대비 이용자에게 되돌아가는 비율을 뜻하는 이론적 수학 지표입니다. 해외 합법 카지노 슬롯머신은 관할 규제기관의 검증을 받아 최소 기준이 관리되지만, 과거 국내 비인가 아케이드 기기나 불법 온라인 사이트가 임의로 홍보하는 환수율 수치는 객관적으로 검증할 수 없는 허위 정보인 경우가 대부분입니다.',
  },
  {
    id: 'faq-8',
    category: '이용자 보호',
    question: '릴게임 관련 불법 사이트는 어떻게 구별하나요?',
    answer:
      '첫째, 현금 입금이나 계좌이체로 포인트를 충전하고 출금(환전)이 가능하다고 안내한다면 명백한 불법 사이트입니다. 둘째, 바다이야기·야마토 등 과거 성인 게임장 기기 명칭을 온라인 서비스로 제공한다면 100% 무허가 사설 사이트입니다. 셋째, 출처 불명의 설치 파일(APK) 다운로드를 요구하거나 게임물관리위원회(grac.or.kr) 등급 조회 결과와 일치하지 않는 경우 즉시 이용을 중단해야 합니다.',
  },
  {
    id: 'faq-9',
    category: '상담 안내',
    question: '도박 문제로 어려움을 겪으면 어디에서 도움을 받을 수 있나요?',
    answer:
      '사행성 게임이나 도박 문제로 본인 또는 가족이 어려움을 겪고 있다면 ‘한국도박문제예방치유원’ 헬프라인 1336으로 연락하여 도움을 받을 수 있습니다. 전화(1336)와 문자(#1336), 온라인 채팅(넷라인) 모두 연중무휴 24시간 무료로 운영되며, 모든 상담 내용은 철저히 비밀이 보장됩니다.',
  },
];
