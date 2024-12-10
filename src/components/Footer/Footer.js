import './Footer.css';

export function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__text'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__copyright-container'>
        <p className='footer__copyright'>&copy; 2020</p>
        <ul className='footer__links'>
          <li className='footer__links-item'>
            <a className='footer__link' href='#'>
              Яндекс Практикум
            </a>
          </li>
          <li className='footer__links-item'>
            <a className='footer__link' href='#'>
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
