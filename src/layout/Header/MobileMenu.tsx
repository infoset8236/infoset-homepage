import styles from './MobileMenu.module.css';
import { logoMap } from '../../constants/logoConfig.ts';

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onOpenInquiry: () => void;
};

const MobileMenu = ({ onClose, isOpen, onOpenInquiry }: Props) => {
  return (
    <div
      className={`${styles.menu} ${isOpen ? styles.open : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
        <div className={styles.mbHeader}>
          <img className={styles.logo} src={logoMap.active} alt="Logo" />
          <button className={styles.closeBtn} onClick={onClose}>
            <img src="/src/assets/images/close.svg" alt="Close" />
          </button>
        </div>

        <nav
          className={styles.nav}
          onClick={(e) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A') {
              onClose();
            }
          }}
        >
          <a href="#business">사업분야</a>
          <a href="#portfolio">포트폴리오</a>
          <a href="#partners">도입기관</a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onOpenInquiry();
            }}
          >
            도입문의
          </a>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
