import { useEffect, useState } from 'react';
import Tag from '../../components/Tag/Tag';
import { tagData } from '../../data/tagData';
import { partnersData } from './partnersData';
import styles from '../Partners/Partners.module.css';

const CountUp = ({ end, duration = 1000 }: { end: number; duration?: number }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setValue(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <>{value.toLocaleString()}</>;
};

const chunkSize = Math.ceil(tagData.length / 3);

const TAG_CONFIGS: Array<{ dir: 'left' | 'right'; data: typeof tagData }> = [
  { dir: 'left', data: tagData.slice(0, chunkSize) },
  { dir: 'right', data: tagData.slice(chunkSize, chunkSize * 2) },
  { dir: 'left', data: tagData.slice(chunkSize * 2) },
];

export default function Partners() {
  return (
    <div className={`section ${styles.section}`}>
      <div className={styles.mainTit}>
        <h2 className={styles.Tit}>
          인포셋의 기술은 지금 이 순간에도 <span>전국으로 연결</span>되고 있습니다.
        </h2>
      </div>

      <div className={styles.stats}>
        {partnersData.map((stat, i) => (
          <div className={styles.statItem} key={i}>
            <p className={styles.statNumber}>
              <CountUp end={stat.number} />
            </p>
            <p className={styles.statLabel}>{stat.label}</p>
          </div>
        ))}
      </div>

      <div className={styles.tagArea}>
        {TAG_CONFIGS.map(({ dir, data }, i) => (
          <div key={i} className={`${styles.tagContainer} ${styles[dir]}`}>
            {data.map((item, j) => (
              <Tag key={`${item.id}-${j}`} {...item} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
