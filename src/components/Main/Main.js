import './Main.css';
import smalltumb from '../../images/smalltumb.svg';
import movie1 from '../../images/item-1.png';
import movie2 from '../../images/item-2.png';
import movie3 from '../../images/item-3.png';
import movie4 from '../../images/item-4.png';
import movie5 from '../../images/item-5.png';
import movie6 from '../../images/item-6.png';
import movie7 from '../../images/item-7.png';
import movie8 from '../../images/item-8.png';
import movie9 from '../../images/item-9.png';
import movie10 from '../../images/item-10.png';
import movie11 from '../../images/item-11.png';
import movie12 from '../../images/item-12.png';
import movie13 from '../../images/item-13.png';
import movie14 from '../../images/item-14.png';
import movie15 from '../../images/item-15.png';
import movie16 from '../../images/item-16.png';
import like from '../../images/like.svg';

export function Main() {
  return (
    <main className='main app__main'>
      <div className='main__search'>
        <form className='main__form'>
          <input
            className='main__search-input'
            id='input__movie'
            type='text'
            placeholder='Фильм'
          />
          <button className='form__button hover__link' type='button'>
            Найти
          </button>
        </form>
        <div className='smalltumb__container'>
          <button className='main__smalltumb hover__link' type='button'>
            <img
              className='main__smalltumb-icon'
              src={smalltumb}
              alt='Переключение'
            />
          </button>
          <p className='main__smalltumb-text'>Короткометражи</p>
        </div>
      </div>
      <ol className='main__container'>
        <li className='movie'>
          <img className='movie__image' src={movie1} alt='Фильм' />
          <div className='movie__container'>
            <p className='movie__title'>33 слова о дизайне</p>
            <button
              className='movie__like hover__link hover__link'
              type='button'
            >
              <img className='movie__like-icon' src={like} alt='Лайк' />
            </button>
          </div>
          <p className='movie__duration'>1ч 42мин</p>
        </li>
        <li className='movie'>
          <img className='movie__image' src={movie2} alt='Фильм' />
          <div className='movie__container'>
            <p className='movie__title'>Киноальманах «100 лет дизайна»</p>
            <button className='movie__like hover__link' type='button'>
              <img className='movie__like-icon' src={like} alt='Лайк' />
            </button>
          </div>
          <p className='movie__duration'>1ч 42мин</p>
        </li>
        <li className='movie'>
          <img className='movie__image' src={movie3} alt='Фильм' />
          <div className='movie__container'>
            <p className='movie__title'>В погоне за Бенкси</p>
            <button className='movie__like hover__link' type='button'>
              <img className='movie__like-icon' src={like} alt='Лайк' />
            </button>
          </div>
          <p className='movie__duration'>1ч 42мин</p>
        </li>
        <li className='movie'>
          <img className='movie__image' src={movie4} alt='Фильм' />
          <div className='movie__container'>
            <p className='movie__title'>Баския: Взрыв реальности</p>
            <button className='movie__like hover__link' type='button'>
              <img className='movie__like-icon' src={like} alt='Лайк' />
            </button>
          </div>
          <p className='movie__duration'>1ч 42мин</p>
        </li>
        <li className='movie'>
          <img className='movie__image' src={movie5} alt='Фильм' />
          <div className='movie__container'>
            <p className='movie__title'>Бег это свобода</p>
            <button className='movie__like hover__link' type='button'>
              <img className='movie__like-icon' src={like} alt='Лайк' />
            </button>
          </div>
          <p className='movie__duration'>1ч 42мин</p>
        </li>
        <li className='movie'>
          <img className='movie__image' src={movie6} alt='Фильм' />
          <div className='movie__container'>
            <p className='movie__title'>Книготорговцы</p>
            <button className='movie__like hover__link' type='button'>
              <img className='movie__like-icon' src={like} alt='Лайк' />
            </button>
          </div>
          <p className='movie__duration'>1ч 42мин</p>
        </li>
        <li className='movie'>
          <img className='movie__image' src={movie7} alt='Фильм' />
          <div className='movie__container'>
            <p className='movie__title'>Когда я думаю о Германии ночью</p>
            <button className='movie__like hover__link' type='button'>
              <img className='movie__like-icon' src={like} alt='Лайк' />
            </button>
          </div>
          <p className='movie__duration'>1ч 42мин</p>
        </li>
        <li className='movie'>
          <img className='movie__image' src={movie8} alt='Фильм' />
          <div className='movie__container'>
            <p className='movie__title'>
              Gimme Danger: История Игги и The Stooges
            </p>
            <button className='movie__like hover__link' type='button'>
              <img className='movie__like-icon' src={like} alt='Лайк' />
            </button>
          </div>
          <p className='movie__duration'>1ч 42мин</p>
        </li>
        <li className='movie'>
          <img className='movie__image' src={movie9} alt='Фильм' />
          <div className='movie__container'>
            <p className='movie__title'>Дженис: Маленькая девочка грустит</p>
            <button className='movie__like hover__link' type='button'>
              <img className='movie__like-icon' src={like} alt='Лайк' />
            </button>
          </div>
          <p className='movie__duration'>1ч 42мин</p>
        </li>
        <li className='movie'>
          <img className='movie__image' src={movie10} alt='Фильм' />
          <div className='movie__container'>
            <p className='movie__title'>Соберись перед прыжком</p>
            <button className='movie__like hover__link' type='button'>
              <img className='movie__like-icon' src={like} alt='Лайк' />
            </button>
          </div>
          <p className='movie__duration'>1ч 42мин</p>
        </li>
        <li className='movie'>
          <img className='movie__image' src={movie11} alt='Фильм' />
          <div className='movie__container'>
            <p className='movie__title'>Пи Джей Харви: A dog called money</p>
            <button className='movie__like hover__link' type='button'>
              <img className='movie__like-icon' src={like} alt='Лайк' />
            </button>
          </div>
          <p className='movie__duration'>1ч 42мин</p>
        </li>
        <li className='movie'>
          <img className='movie__image' src={movie12} alt='Фильм' />
          <div className='movie__container'>
            <p className='movie__title'>По волнам: Искусство звука в кино</p>
            <button className='movie__like hover__link' type='button'>
              <img className='movie__like-icon' src={like} alt='Лайк' />
            </button>
          </div>
          <p className='movie__duration'>1ч 42мин</p>
        </li>
        <li className='movie'>
          <img className='movie__image' src={movie13} alt='Фильм' />
          <div className='movie__container'>
            <p className='movie__title'>Рудбой</p>
            <button className='movie__like hover__link' type='button'>
              <img className='movie__like-icon' src={like} alt='Лайк' />
            </button>
          </div>
          <p className='movie__duration'>1ч 42мин</p>
        </li>
        <li className='movie'>
          <img className='movie__image' src={movie14} alt='Фильм' />
          <div className='movie__container'>
            <p className='movie__title'>Скейт — кухня</p>
            <button className='movie__like hover__link' type='button'>
              <img className='movie__like-icon' src={like} alt='Лайк' />
            </button>
          </div>
          <p className='movie__duration'>1ч 42мин</p>
        </li>
        <li className='movie'>
          <img className='movie__image' src={movie15} alt='Фильм' />
          <div className='movie__container'>
            <p className='movie__title'>Война искусств</p>
            <button className='movie__like hover__link' type='button'>
              <img className='movie__like-icon' src={like} alt='Лайк' />
            </button>
          </div>
          <p className='movie__duration'>1ч 42мин</p>
        </li>
        <li className='movie'>
          <img className='movie__image' src={movie16} alt='Фильм' />
          <div className='movie__container'>
            <p className='movie__title'>Зона</p>
            <button className='movie__like hover__link' type='button'>
              <img className='movie__like-icon' src={like} alt='Лайк' />
            </button>
          </div>
          <p className='movie__duration'>1ч 42мин</p>
        </li>
      </ol>
      <button className='main__button hover__link'>Ещё</button>
    </main>
  );
}
