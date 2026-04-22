import { useEffect, useState } from 'react';
import styles from './Inquiry.module.css';
import closeIcon from '/src/assets/images/hero/close.svg';
import emailjs from 'emailjs-com';

interface ModalProps {
  onClose: () => void;
}

const INQUIRY_TYPES = ['시스템 도입 문의', '프로젝트/견적 문의', '기타 문의'];

const INITIAL_FORM = {
  type: '',
  name: '',
  organization: '',
  contact: '',
  inquiry: '',
  consent: false,
};

const Inquiry = ({ onClose }: ModalProps) => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const root = document.querySelector('#root') as HTMLElement | null;
    window.fullpage_api?.setAllowScrolling(false);
    window.fullpage_api?.setKeyboardScrolling(false);
    if (root) root.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    return () => {
      window.fullpage_api?.setAllowScrolling(true);
      window.fullpage_api?.setKeyboardScrolling(true);
      if (root) root.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) return alert('원활한 답변을 위해 개인정보 수집 동의가 필요합니다.');
    if (!form.name || !form.contact || !form.inquiry)
      return alert('항목에 입력항목을 입력해 주세요');

    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          type: form.type || '미선택',
          name: form.name,
          organization: form.organization || '없음',
          contact: form.contact,
          inquiry: form.inquiry,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      alert('문의가 접수되었습니다!');
      onClose();
    } catch (err) {
      alert('전송 실패 😢');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={styles.overlay}
      onWheel={(e) => e.preventDefault()}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>도입문의</h2>
          <button onClick={onClose} className={styles.closeButton}>
            <img src={closeIcon} alt="Close" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.content}>
            <div className={styles.formGroup}>
              <div className={styles.inquiryTypeGroup}>
                문의 유형을 선택해 주세요
                <div className={styles.inquiryTypeOptions}>
                  {INQUIRY_TYPES.map((t) => (
                    <label key={t} className={styles.radio}>
                      <input
                        type="radio"
                        name="type"
                        checked={form.type === t}
                        onChange={() => setForm((p) => ({ ...p, type: t }))}
                      />
                      <span className={styles.circle}></span>
                      {t}
                    </label>
                  ))}
                </div>
              </div>

              {(
                [
                  ['name', '담당자명', '담당자명을 입력해 주세요'],
                  ['organization', '소속 기관명', '소속된 기관이나 단체 이름'],
                  ['contact', '연락처', '이메일 또는 전화번호'],
                ] as const
              ).map(([id, label, placeholder]) => (
                <label key={id}>
                  {label}
                  <input
                    type="text"
                    id={id}
                    value={form[id]}
                    onChange={handleChange}
                    placeholder={placeholder}
                  />
                </label>
              ))}

              <div className={styles.inquiryContent}>
                <label>
                  문의 내용
                  <textarea
                    id="inquiry"
                    value={form.inquiry}
                    onChange={handleChange}
                    placeholder="간단한 설명만 작성해도 접수 가능합니다."
                  />
                </label>
                <div className={styles.consentArea}>
                  <label>
                    <input
                      type="checkbox"
                      id="consent"
                      checked={form.consent}
                      onChange={handleChange}
                    />
                    개인정보 수집 및 이용 동의
                  </label>
                  <button type="button" onClick={() => window.open('/privacy', '_blank')}>
                    보기
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.footer}>
            <input type="submit" value="도입 문의하기" disabled={loading} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Inquiry;
