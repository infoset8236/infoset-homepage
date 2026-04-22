export type BusinessSlide = {
  img: string;
  hoverImg: string;
  sub: string;
  title: string;
  desc: string;
};

export const businessSlides: BusinessSlide[] = [
  {
    img: '/src/assets/images/business/ict.png',
    hoverImg: '/src/assets/images/business/ict_hover.png',
    sub: 'ICT Infrastructure',
    title: '스마트 도서관 \n키오스크 시스템',
    desc: '독보적인 제어 기술이 집약된\n 스마트 키오스크 시스템을 통해,\n 관리자와 이용자 모두에게 최적화된\n 스마트 라이브러리 환경을 조성합니다.',
  },
  {
    img: '/src/assets/images/business/system.png',
    hoverImg: '/src/assets/images/business/system_hover.png',
    sub: 'System Integration',
    title: '도서관 \n통합시스템 구축',
    desc: '기획부터 운영까지\n 전 과정을 아우르는 인포셋만의 \n통합 기술로 사용자 경험과 \n운영 효율을 극대화한 \n완성형 도서관 솔루션을 제공합니다.',
  },
  {
    img: '/src/assets/images/business/ai.png',
    hoverImg: '/src/assets/images/business/ai_hover.png',
    sub: 'AI & Big Data',
    title: '3세대 도서관의 시작\n AI 솔루션',
    desc: '디지털 기술과 사용자 경험이 결합된\n 3세대 도서관을 만들어나갑니다.\n 데이터 분석과 AI 로봇을 결합하여\n 정보 탐색부터 현장 안내까지\n 도서관의 모든 경험을 지능화합니다.',
  },
];
