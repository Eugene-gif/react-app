import styles from './Header.module.css';
import Logo from '@/assets/Logo';
import hasIsLogged from '@/utils/hasIsLogged';
import getUserName from '@/utils/getUserName';

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
            {hasIsLogged()
              ? <li className={styles['nav-item']}>
                <a href="#logout">
                  {getUserName() || 'Без имени'}
                </a>
              </li>
              : <li className={styles['nav-item']}>
                <a href="#login-form">
                  Войти
                </a>
              </li>}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
