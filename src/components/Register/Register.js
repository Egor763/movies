import './Register.css';

import logo from '../../images/logo.svg';

export function Register() {
  return (
    <section className='register'>
      <img className='register__logo' src={logo} alt='Логотип' />
      <h2 className='register__title'>Добро пожаловать!</h2>
      <form className='register__form'>
        <input
          className='register__input'
          id='input__name'
          type='text'
          placeholder='Имя'
        />
        <input
          className='register__input'
          id='input__email'
          type='email'
          placeholder='E-mail'
        />
        <input
          className='register__input'
          id='input__password'
          type='password'
          placeholder='Пароль'
        />
        <button className='register__button hover__link' type='button'>
          Зарегистрироваться
        </button>
        <button className='register__button-login hover__link' type='button'>
          Уже зарегистрированы? <span className='register__link'>Войти</span>
        </button>
      </form>
    </section>
  );
}
