import video1 from '/src/assets/videos/main.mp4';
import img1 from '/src/assets/images/hero/main01.png';
import img2 from '/src/assets/images/hero/main02.png';
import img3 from '/src/assets/images/hero/main03.png';

export type HeroSlide = {
  type: 'video' | 'image';
  src: string;
  title: string;
  highlight?: number;
  suffix?: string;
  sub: string;
};

export const heroSlides: HeroSlide[] = [
  {
    type: 'video',
    src: video1,
    title: '전국',
    highlight: 554,
    suffix: '개 도서관이',
    sub: '선택한 파트너.',
  },
  {
    type: 'image',
    src: img1,
    title: '가장 오래된 지식의 공간에,',
    sub: '가장 앞선 기술을 채웁니다.',
  },
  {
    type: 'image',
    src: img2,
    title: '홈페이지부터 키오스크까지.',
    sub: '전국 최다 도입 실적이 증명하는 압도적인 완성도.',
  },
  {
    type: 'image',
    src: img3,
    title: '변화하는 도서관의 미래,',
    sub: '지금 인포셋과 함께 시작하세요.',
  },
];
