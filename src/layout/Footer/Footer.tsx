import { Link } from 'react-router-dom';
import styles from '../Footer/Footer.module.css';
import logo from '@/assets/images/logo.svg';

const Footer = () => {
  return (
    <div className={`section ${styles.footer}`}>
      <div className={styles.footerInner}>
        <div className={styles.footerLogo}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.footerInfo}>
          <dl className={styles.infoItem}>
            <dt className={styles.infoTitle}>주소</dt>
            <dd className={styles.infoDesc}>
              대구광역시 수성구 화랑로 204 동문빌딩 3층, 4층 (주)인포셋
            </dd>
          </dl>
          <dl className={styles.infoItem}>
            <dt className={styles.infoTitle}>전화</dt>
            <dd className={styles.infoDesc}>053-956-8235, 053-957-8235</dd>
          </dl>
          <dl className={styles.infoItem}>
            <dt className={styles.infoTitle}>팩스</dt>
            <dd className={styles.infoDesc}>053-956-8237</dd>
          </dl>
          <dl className={styles.infoItem}>
            <dt className={styles.infoTitle}>메일</dt>
            <dd className={styles.infoDesc}>contract@infoset.co.kr</dd>
          </dl>
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.copy}>© (주)인포셋 all rights reserved.</p>
          <p className={styles.policy}>
            <Link to="/privacy" target="_blank" className={styles.policy}>
              개인정보 처리방침
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
