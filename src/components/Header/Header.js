import './Header.css';
import logo from '../../images/logo.svg';
import account from '../../images/account.svg';

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
        <p className='header__account'>Аккаунт</p>
        <button className='header__account-button' type='button'>
          <img className='header__account-icon' src={account} alt='Аккаунт' />
        </button>
      </div>
    </header>
  );
}
