import styles from './Header.module.css';
import Logo from '../../assets/Logo';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles['header-wrapper']}>
        <Logo className={styles['logo']} />
        <nav className={styles['nav']}>
          <ul className={styles['nav-list']}>
            <li className={styles['nav-item']}>
              <a href="">
                Поиск фильмов
              </a>
            </li>
            <li className={styles['nav-item']}>
              <a href="">
                Мои фильмы
              </a>
            </li>
            <li className={styles['nav-item']}>
              <a href="">
                Войти
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
