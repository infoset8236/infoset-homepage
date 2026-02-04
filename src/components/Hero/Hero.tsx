import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';
import bg from '@/assets/videos/main.mp4';
import logo from '@/assets/images/logo.png';
import { useSectionStore } from '../../stores/useSectionStore';

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const activeSection = useSectionStore(state => state.activeSection);

    const isHero = activeSection === 'hero';

    const [showTitle, setShowTitle] = useState(false);
    const [count, setCount] = useState(0);

    if (!isHero) {
        if (showTitle || count !== 0) {
            setShowTitle(false);
            setCount(0);
        }
    }

    useEffect(() => {
        if (!isHero) return;

        const video = videoRef.current;
        if (!video) return;

        video.currentTime = 0;
        video.play().catch(() => {});

        const timer = setTimeout(() => {
            setShowTitle(true);
            startCounter();
        }, 1500);

        let animationFrame: number;
        const startCounter = () => {
            const duration = 1200;
            const target = 200;
            const startTime = performance.now();

            const animate = (now: number) => {
                const progress = Math.min((now - startTime) / duration, 1);
                setCount(Math.floor(progress * target));
                if (progress < 1) animationFrame = requestAnimationFrame(animate);
            };

            animationFrame = requestAnimationFrame(animate);
        };

        return () => {
            clearTimeout(timer);
            cancelAnimationFrame(animationFrame);
        };
    }, [isHero]);

    return (
        <div className={`section ${styles.section}`}>
            <video
                ref={videoRef}
                src={bg}
                muted
                playsInline
                preload="auto"
            />
            <div className={styles.content}>
                <img className={styles.logo} src={logo} alt="Logo" />

                <div className={`${styles.title} ${showTitle ? styles.show : ''}`}>
                    <span className={styles.count}>{count}</span>개 도서관의 선택
                </div>
            </div>
        </div>
    );
}