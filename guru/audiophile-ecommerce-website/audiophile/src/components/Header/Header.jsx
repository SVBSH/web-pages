import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// Contexts
import { useBasketContext } from '../../context/BasketContext';
// Icons
import Logo from '../../assets/images/shared/desktop/logo.svg';
import HamburgerMenu from '../../assets/images/shared/icon-hamburger.svg';
import IconBasket from '../../assets/images/shared/icon-cart.svg';
import Basket from '../Basket/Basket';
// Styles
import "./Header.css";


const MENU_STATE = {
  active: true,
  inactive: false
}

const Header = () => {
  const basketContext = useBasketContext();
  const navBar = useRef(null);
  const refBasketMenuContainer = useRef(null);

  // FIXME zbytocny kod
  const [menuStatus, setMenuStatus] = useState(MENU_STATE.inactive);
  const handleMenu = () => {

    if (menuStatus === MENU_STATE.inactive) {
      setMenuStatus(MENU_STATE.active);
    }
    else {
      setMenuStatus(MENU_STATE.inactive);
    }
  }

  return (
    <header className='header' data-menu-active={menuStatus} style={{'--bg-color': 'var(--bg-black-3)'}}>
      <img
        className='hamburger'
        alt="menu"
        src={HamburgerMenu}
        onClick={handleMenu}
        draggable="false"
      />
      <img draggable="false" className={'logo'} alt='company logo' src={Logo} />
      <nav ref={navBar} data-type="primary" className='nav'>
        <ul className='nav__list uppercase text-white-4 uppercase font-medium'>
          <li className='nav__item'><Link to="/home" className="nav__link text-white-4 text-white-4 font-bold text-2xs tracking-wide">Home</Link></li>
          <li className='nav__item'><Link to="/headphones" className="nav__link text-white-4 font-bold text-2xs tracking-wide">Headphones</Link></li>
          <li className='nav__item'><Link to="/speakers" className="nav__link text-white-4 font-bold text-2xs tracking-wide">Speakers</Link></li>
          <li className='nav__item'><Link to="/earphones" className="nav__link text-white-4 font-bold text-2xs tracking-wide">Earphones</Link></li>
        </ul>
      </nav>
      <div
        data-active="false"
        className="basket-container"
      >

        <div className="basket-img-wrapper">
          <img
            draggable="false"
            alt="Basket"
            src={IconBasket}
            className='basket'
            onClick={
              () => refBasketMenuContainer.current.classList.toggle('inactive')
            }
          />
          {
            basketContext.basketInfo.basket.length > 0 &&
            <p className="basket-amount text-black-4 bg-white-4 grid justify-center align-center font-bold">{basketContext.basketInfo.basket.length}</p>
          }
        </div>

        <Basket refBasketMenuContainer={refBasketMenuContainer} />
      </div>
    </header>
  )
}


export default Header;