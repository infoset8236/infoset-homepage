import { useSectionStore } from '../../stores/useSectionStore';
import styles from '../Header/Header.module.css';
import { logoMap } from '../../constants/logoConfig.ts';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import Inquiry from '../../sections/Hero/Inquiry.tsx';

const Header = () => {
  const active = useSectionStore((s) => s.activeSection) !== 'hero';
  const [isOpen, setIsOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  return (
    <div className={`${styles.header} ${active ? styles.active : ''}`}>
      <div className={styles.inner}>
        <a href="#hero">
          <img className={styles.logo} src={active ? logoMap.active : logoMap.default} alt="Logo" />
        </a>
        <nav className={styles.nav}>
          <a href="#hero">홈</a>
          <a href="#business">사업분야</a>
          <a href="#portfolio">포트폴리오</a>
          <a href="#partners">도입기관</a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setIsInquiryOpen(true);
            }}
          >
            도입문의
          </a>
        </nav>
      </div>

      <button className={styles.mbMenuBtn} onClick={() => setIsOpen(true)}>
        <img
          src={active ? '/src/assets/images/menuActive.svg' : '/src/assets/images/menu.svg'}
          alt="menu"
        />
      </button>

      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onOpenInquiry={() => {
          setIsOpen(false);
          setIsInquiryOpen(true);
        }}
      />

      {isInquiryOpen && <Inquiry onClose={() => setIsInquiryOpen(false)} />}
    </div>
  );
};

export default Header;
