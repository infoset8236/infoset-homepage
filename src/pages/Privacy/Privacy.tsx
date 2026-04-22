import styles from './privacy.module.css';

const Privacy = () => {
  return (
    <div className={styles.privacy}>
      <p className={styles.logo}>
        <img src="/src/assets/images/logo_black.svg" alt="" />
      </p>
      <h1 className={styles.title}>개인정보 약관 </h1>
      <ul className={styles.list}>
        <li>
          1. 수집하는 개인정보 항목 필수항목: 담당자명, 소속기관명, 연락처(이메일 또는 전화번호),
          문의내용
        </li>
        <li>2. 수집 및 이용 목적 도입 문의에 대한 상담, 답변 제공 및 관련 업무 연락</li>
        <li>
          3. 보유 및 이용 기간 문의 응대 및 상담 완료 후 1년간 보관 (단, 관련 법령에 따라 보존이
          필요한 경우 해당 기간까지 보관)
        </li>
        <li>
          4. 동의 거부 권리 및 불이익 귀하는 개인정보 수집 및 이용에 동의하지 않을 권리가 있습니다.
          다만, 동의를 거부하실 경우 도입 상담 및 서비스 이용에 제한이 있을 수 있습니다.
        </li>
      </ul>
    </div>
  );
};

export default Privacy;
