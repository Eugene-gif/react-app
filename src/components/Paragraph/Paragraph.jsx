import styles from './Paragraph.module.css';

function Paragraph({ children, fontSize }) {
  return (
    <p className={styles['paragraph']} style={{ fontSize: fontSize }}>{children}</p>
  );
}

export default Paragraph;
