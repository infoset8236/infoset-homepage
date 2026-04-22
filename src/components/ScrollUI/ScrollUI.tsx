import styles from '../../sections/Hero/Hero.module.css';

const ScrollUI = () => {
  return (
    <>
      <div className={styles.scrollDown}>SCROLL DOWN</div>
      <div className={styles.infoIco}>
        <img src="@/assets/images/hero/infoIco.svg" alt="" />
      </div>
    </>
  );
};

export default ScrollUI;
