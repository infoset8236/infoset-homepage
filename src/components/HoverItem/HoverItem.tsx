import styles from '../../sections/Business/Business.module.css';
import { useState, useEffect } from 'react';

type Props = {
  slide: {
    img: string;
    sub: string;
    title: string;
    desc: string;
  };
  isOpen: boolean;
  onClick: () => void;
};

const HoverItem = ({ slide, isOpen, onClick }: Props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 768px)');
    const handler = () => setIsMobile(media.matches);
    handler();
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, []);

  return (
    <div
      className={`${styles.wrap} ${isOpen ? styles.open : ''}`}
      onClick={() => {
        if (isMobile) onClick();
      }}
    >
      <div className={styles.imgContainer}></div>

      <div className={styles.content}>
        <p className={styles.label}>{slide.sub}</p>

        <h3 className={styles.title}>
          {slide.title.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </h3>

        <p className={styles.desc}>
          {slide.desc.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default HoverItem;
