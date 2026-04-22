import type { TagItem } from '../../data/tagData';
import styles from '../Tag/Tag.module.css';

export default function Tag({ img }: TagItem) {
  return (
    <div className={styles.tag}>
      <img src={img} alt="logo" />
    </div>
  );
}
