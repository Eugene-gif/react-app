import './Header.css';
import Logo from '../../assets/Logo';
console.log(Logo);

function Header() {
  return (
    <div className='header'>
      <div className='header-wrapper'>
        <Logo className='logo' />
        <nav className='nav'>
          <ul className='nav-list'>
            <li className='nav-item'>
              <a href="">
                Поиск фильмов
              </a>
            </li>
            <li className='nav-item'>
              <a href="">
                Мои фильмы
              </a>
            </li>
            <li className='nav-item'>
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
