import './Header.css';
import logo from '../../images/logo.svg';

export function Header() {
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='Логотип' />
      <ul className='header__links'>
        <li className='header__link-item'>
          <a className='header__link hover__link' href='#'>
            Фильмы
          </a>
        </li>
        <li className='header__link-item'>
          <a className='header__link hover__link' href='#'>
            Сохраненные фильмы
          </a>
        </li>
      </ul>
      <div className='header__container'>
        <button className='header__register hover__link'>Регистрация</button>
        <button className='header__login hover__link'>Войти</button>
      </div>
    </header>
  );
}
