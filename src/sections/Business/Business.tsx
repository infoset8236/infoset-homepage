import styles from './Business.module.css';
import { businessSlides } from '../../sections/Business/businessData';
import HoverItem from '../../components/HoverItem/HoverItem';
import { useState } from 'react';

export default function Business() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className={`section ${styles.section}`}>
      <div className={styles.mainTit}>
        <p className={styles.sub}>WHAT WE DO</p>
        <h2 className={styles.tit}>
          우리의 기술이 모여, <br />
          <span>도서관의 새로운 일상</span>을 완성합니다.
        </h2>
      </div>

      <div className={styles.area}>
        {businessSlides.map((slide, index) => (
          <HoverItem
            key={index}
            slide={slide}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
}
