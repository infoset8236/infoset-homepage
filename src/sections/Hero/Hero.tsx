import { useEffect, useReducer, useRef } from 'react';
import styles from './Hero.module.css';
import { heroSlides } from './heroData';
import { useSectionStore } from '../../stores/useSectionStore';

type State = {
  index: number;
  showTitle: boolean;
  count: number;
  prevIndex: number | null;
  transitioning: boolean;
};

type Action =
  | { type: 'RESET' }
  | { type: 'NEXT'; prevIndex: number; nextIndex: number }
  | { type: 'NEXT_DONE' }
  | { type: 'SHOW_TITLE' }
  | { type: 'SET_COUNT'; count: number };

const initial: State = {
  index: 0,
  showTitle: false,
  count: 0,
  prevIndex: null,
  transitioning: false,
};

const reducer = (s: State, a: Action): State => {
  switch (a.type) {
    case 'RESET':
      return initial;
    case 'NEXT':
      return { ...s, prevIndex: a.prevIndex, index: a.nextIndex, transitioning: true };
    case 'NEXT_DONE':
      return { ...s, prevIndex: null, transitioning: false };
    case 'SHOW_TITLE':
      return { ...s, showTitle: true };
    case 'SET_COUNT':
      return { ...s, count: a.count };
  }
};

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isHero = useSectionStore((s) => s.activeSection === 'hero');
  const [{ index, showTitle, count, prevIndex, transitioning }, dispatch] = useReducer(
    reducer,
    initial,
  );

  const current = heroSlides[index];
  const prev = prevIndex !== null ? heroSlides[prevIndex] : null;
  const isVideo = current.type === 'video';

  const next = () => {
    dispatch({ type: 'NEXT', prevIndex: index, nextIndex: (index + 1) % heroSlides.length });
    setTimeout(() => dispatch({ type: 'NEXT_DONE' }), 800);
  };

  useEffect(() => {
    if (!isHero) dispatch({ type: 'RESET' });
  }, [isHero]);

  useEffect(() => {
    if (!isHero) return;
    dispatch({ type: 'SET_COUNT', count: 0 });
    const timer = setTimeout(() => {
      dispatch({ type: 'SHOW_TITLE' });
      const target = current.highlight;
      if (!target) return;
      const start = performance.now();
      let raf: number;
      const animate = (now: number) => {
        const p = Math.min((now - start) / 600, 1);
        dispatch({ type: 'SET_COUNT', count: Math.floor(p * target) });
        if (p < 1) raf = requestAnimationFrame(animate);
      };
      raf = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(raf);
    }, 1500);
    return () => clearTimeout(timer);
  }, [index, isHero]);

  useEffect(() => {
    if (!isHero) return;
    if (isVideo) {
      const video = videoRef.current;
      if (!video) return;
      video.currentTime = 0;
      video.play().catch(() => {});
      video.addEventListener('ended', next);
      return () => video.removeEventListener('ended', next);
    }
    const timer = setTimeout(next, 8000);
    return () => clearTimeout(timer);
  }, [index, isHero]);

  return (
    <>
      <div className={styles.scrollDown}>SCROLL DOWN</div>
      <div className={`section ${styles.section}`}>
        <video
          ref={videoRef}
          src={heroSlides[0].src}
          muted
          playsInline
          preload="auto"
          className={styles.media}
          style={{ opacity: isVideo ? 1 : 0 }}
        />
        <div
          className={styles.media}
          style={{
            backgroundImage: prev?.type !== 'video' ? `url(${prev?.src})` : 'none',
            opacity: transitioning && prev?.type !== 'video' ? 0 : 1,
            transition: 'opacity 0.8s ease-in-out',
            position: 'absolute',
            zIndex: 1,
          }}
        />
        <div
          className={styles.media}
          style={{
            backgroundImage: !isVideo ? `url(${current.src})` : 'none',
            opacity: isVideo ? 0 : 1,
            transition: 'opacity 0.8s ease-in-out',
            zIndex: 0,
          }}
        />
        <div className={styles.content}>
          <div className={`${styles.title} ${showTitle ? styles.show : ''}`}>
            <div className={styles.line1}>
              {current.title} {current.highlight && <span className={styles.count}>{count}</span>}
              {current.suffix}
            </div>
            <p className={styles.line2}>{current.sub}</p>
          </div>
        </div>
      </div>
    </>
  );
}
