import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { portfolioData } from './portfolioData';
import styles from '../Portfolio/KioskComponent.module.css';
import kiosk from '/portfolio/kiosk.png';

const INTERVAL_MS = 8000;
const LAST = portfolioData.length - 1;
const DIRS = ['prev', 'next'] as const;

const KioskComponent = () => {
  const [index, setIndex] = useState(0);
  const [hoverDir, setHoverDir] = useState<string | null>(null);
  const slideRefs = useRef<HTMLDivElement[]>([]);

  const move = (next: number) => setIndex(next > LAST ? 0 : next < 0 ? LAST : next);

  useEffect(() => {
    slideRefs.current.forEach((el, i) =>
      gsap.to(el, {
        opacity: i === index ? 1 : 0,
        visibility: i === index ? 'visible' : 'hidden',
        duration: 0.6,
      }),
    );
  }, [index]);

  useEffect(() => {
    const id = setInterval(() => move(index < LAST ? index + 1 : 0), INTERVAL_MS);
    return () => clearInterval(id);
  }, [index]);

  return (
    <div className={styles.viewport}>
      {portfolioData.map((data, i) => (
        <div
          className={styles.tabWrap}
          key={i}
          ref={(el) => {
            if (el) slideRefs.current[i] = el;
          }}
        >
          <div className={styles.imageWrap}>
            <img className={styles.frame} src={kiosk} alt="" />
            <img src={data.img} alt="" />
          </div>

          <div className={styles.content}>
            <p className={styles.title}>{data.title}</p>

            <div className={styles.meta}>
              <p className={styles.label}>작업 기간</p>
              <p className={styles.date}>{data.period}</p>
            </div>

            <div className={styles.control}>
              <div className={styles.arrow}>
                {DIRS.map((dir) => (
                  <div
                    key={dir}
                    className={styles[dir]}
                    onMouseEnter={() => setHoverDir(dir)}
                    onMouseLeave={() => setHoverDir(null)}
                    onClick={() => move(index + (dir === 'next' ? 1 : -1))}
                  >
                    {(['arrow_normal', 'arrow_hover'] as const).map((img) => (
                      <img
                        key={img}
                        className={`${styles.arrowImg} ${
                          (hoverDir === dir) === (img === 'arrow_hover')
                            ? styles.fadeIn
                            : styles.fadeOut
                        }`}
                        src={`/portfolio/${img}.svg`}
                        alt=""
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <p className={styles.caption}>*최근 3년 기준 실적입니다.</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KioskComponent;
