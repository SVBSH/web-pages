import './Home.css';
import EshopOffers from '../../components/EshopOffers/EshopOffers';
// Hero image
import HeroImg from '../../assets/images/home/desktop/image-hero-1.jpg';
// Eshop Product Offer
import ImgProductOfferSpeaker_1_Desktop from '../../assets/images/home/desktop/image-speaker-zx9.png';
import ImgProductOfferSpeaker_1_Tablet from '../../assets/images/home/tablet/image-speaker-zx9.png';
import ImgProductOfferSpeaker_1_Mobile from '../../assets/images/home/mobile/image-speaker-zx9.png';

import ImgProductOfferSpeaker_2_Desktop from '../../assets/images/home/desktop/image-speaker-zx7.jpg';
import ImgProductOfferSpeaker_2_Tablet from '../../assets/images/home/tablet/image-speaker-zx7.jpg';
import ImgProductOfferSpeaker_2_Mobile from '../../assets/images/home/mobile/image-speaker-zx7.jpg';

import ImgProductOfferEarphones_3_Desktop from '../../assets/images/home/desktop/image-earphones-yx1.jpg';
import ImgProductOfferEarphones_3_Tablet from '../../assets/images/home/tablet/image-earphones-yx1.jpg';
import ImgProductOfferEarphones_3_Mobile from '../../assets/images/home/mobile/image-earphones-yx1.jpg';



import { Link } from 'react-router-dom';

const Home = () => {
  return (

    <main className="main">

      <div className="hero-content-container color-outside-container" style={{'--bg-color': 'var(--bg-black-3)'}}>
        <div className="hero-container">
          <div className="info">
            <h1 className="showUp main__heading uppercase text-5xl text-white-4 font-bold">
              <span className='main__heading--decorator text-gray-4 text-xs'>New product</span>
              XX99 Mark II Headphones
            </h1>
            <p className="main__text text-gray-4 showUp" style={{'--a-duration': '1500ms'}}>
              Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
            </p>
          </div>
          <Link 
            to='/headphones/product/3'
            data-type="1" 
            className="main__btn btn uppercase font-bold"
            >
              See product
          </Link>
        </div>
        <img src={HeroImg} draggable="false" className='main__hero-img' alt="headphones" />
      </div>
      
      <div className="bg-white-4 color-outside-container">
        <div className="main__bg-wrapper">
          <EshopOffers />
        </div>

        <div className="product-offer-container flex flex-col bg-white-4 text-white-4" style={{ '--gap': '1.7rem' }}>

          <div className="product-offer bg-orange-4 rounded-4" data-number="1">
            <picture className='product-offer__img-container'>
              <source srcSet={ImgProductOfferSpeaker_1_Desktop} media="(min-width: 1200px)" alt="lala" />
              <source srcSet={ImgProductOfferSpeaker_1_Tablet} media="(min-width: 1000px)" alt="lala" />
              <img draggable="false" className='product-offer__img' src={ImgProductOfferSpeaker_1_Mobile} alt="MDN" />
            </picture>
            <div className="product-offer-info  flex flex-col items-center" style={{ '--gap': '1rem' }}>
              <h2 className='product-offer__heading text-3xl uppercase'><span className="block">ZX9</span> speaker</h2>
              <p className='product-offer__text'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
              <Link to='/speakers/product/5' className="btn uppercase text-2xs" data-type="2">See product</Link>
            </div>
          </div>

          <div className="product-offer bg-gray-3 text-black-4 rounded-4" data-number="2">
            <picture className='product-offer__img-container'>
              <source srcSet={ImgProductOfferSpeaker_2_Desktop} media="(min-width: 1200px)" alt="lala" />
              <source srcSet={ImgProductOfferSpeaker_2_Tablet} media="(min-width: 1000px)" alt="lala" />
              <img draggable="false" className='product-offer__img rounded-4' src={ImgProductOfferSpeaker_2_Mobile} alt="MDN" />
            </picture>
            <div className="product-offer-info">
              <h2 className='product-offer__heading text-3xl uppercase'>ZX7 Speaker</h2>
              <Link to='/speakers/product/5' className="btn uppercase text-2xs" data-type="4">See product</Link>
            </div>
          </div>

          <div className="product-offer text-black-4" data-number="3" style={{'--gap': '2rem'}}> 
            <picture className='product-offer__img-container rounded-4'>
              <source srcSet={ImgProductOfferEarphones_3_Desktop} media="(min-width: 1200px)" alt="earphones" />
              <source srcSet={ImgProductOfferEarphones_3_Tablet} media="(min-width: 1000px)" alt="earphones" />
              <img draggable="false" className='product-offer__img rounded-4' src={ImgProductOfferEarphones_3_Mobile} alt="earphones" />
            </picture>
            <div className="product-offer-info bg-gray-3  rounded-4 flex flex-col justify-center" style={{'--gap': '2rem'}}>
              <h2 className='product-offer__heading text-3xl uppercase'>YX1 Earphones</h2>
              <Link to='/earphones/product/1' className="btn uppercase text-2xs" data-type="4">See product</Link>
            </div>
          </div>

        </div>
      </div>

    </main>
  )
}

export default Home;