import styles from './Button.module.css';

function Button({ text, onClick, isDisable=false }) {
  return (
    <button className={styles.button} disabled={isDisable} onClick={onClick}>{text}</button>
  );
}

export default Button;
