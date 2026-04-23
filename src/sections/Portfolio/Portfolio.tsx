import { useEffect, useState } from 'react';
import styles from '../Portfolio/Portfolio.module.css';
import KioskComponent from './KioskComponent';
import HomepageComponent from './HomepageComponent ';
import ServiceComponent from './ServiceComponent';

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

const tabData: TabItem[] = [
  {
    id: 'kiosk',
    label: 'ICT',
    content: <KioskComponent />,
  },
  {
    id: 'homepage',
    label: '홈페이지',
    content: <HomepageComponent />,
  },
  {
    id: 'service',
    label: '통합 유지보수',
    content: <ServiceComponent />,
  },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('kiosk');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const activeContent = tabData.find((tab) => tab.id === activeTab)?.content;

  const activeIndex = tabData.findIndex((tab) => tab.id === activeTab);

  return (
    <div className={`section ${styles.section}`}>
      <div className={styles.mainTit}>
        <p className={styles.subTit}>OUR WORKS</p>
        <h2 className={styles.Tit}>
          인포셋의 기술로 완성된 <span>스마트 도서관</span>
        </h2>
      </div>

      <div className={styles.area}>
        <div className={styles.tab}>
          <div
            className={styles.slider}
            style={{
              transform: `translateX(${activeIndex * (isMobile ? 93 : 100)}%)`,
            }}
          />

          {tabData.map((tab) => (
            <div
              key={tab.id}
              className={`${styles.tabItem} ${activeTab === tab.id ? styles.active : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </div>
          ))}
        </div>

        <div className={styles.tabContent}>{activeContent}</div>
      </div>
    </div>
  );
}
