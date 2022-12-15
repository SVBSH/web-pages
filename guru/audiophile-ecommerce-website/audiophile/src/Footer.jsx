import './Footer.css';
import { Link } from 'react-router-dom';

import Logo from './assets/images/shared/desktop/logo.svg';

import LogoFacebook from './assets/images/shared/icon-facebook.svg';
import LogoInstagram from './assets/images/shared/icon-instagram.svg';
import LogoTwitter from './assets/images/shared/icon-twitter.svg';

const Footer = () => {
  return (
    <footer className="footer bg-black-3 text-gray-4 color-outside-container" style={{'--bg-color': 'var(--bg-black-3)'}}>
      <img className='footer__logo logo' alt='company logo' src={Logo} />

      <nav data-type="footer__nav" className='nav text-white-4 uppercase font-bold'>
        <ul className='footer__nav-list'>
          <li className='nav__link'><Link to="home">Home</Link></li>
          <li className='nav__link'><Link to="headphones">Headphones</Link></li>
          <li className='nav__link'><Link to="speakers">Speakers</Link></li>
          <li className='nav__link'><Link to="earphones">Earphones</Link></li>
        </ul>
      </nav>

      <p className="footer__description">
        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers
        and sound specialists who are devoted to helping you get the most out of personal audio. Come and
        visit our demo facility - we’re open 7 days a week.
      </p>

      <ul className='footer__socials flex' style={{ '--gap': '1rem' }}>
        <li className='social'>
          <img draggable="false" src={LogoFacebook} alt="facebook logo" />
        </li>
        <li className='social'><img draggable="false" src={LogoTwitter} alt="twitter logo" />
        </li>
        <li className='social'><img draggable="false" src={LogoInstagram} alt="instagram logo" />
        </li>
      </ul>

      <p className="footer__copyright">
        Copyright 2021. All Rights Reserved
      </p>
    </footer>
  )
}

export default Footer;