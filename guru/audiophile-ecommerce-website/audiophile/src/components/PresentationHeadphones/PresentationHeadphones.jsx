import './PresentationHeadphones.css';

import ImgHeroMobile from '../../assets/images/shared/mobile/image-best-gear.jpg'
import ImgHeroTablet from '../../assets/images/shared/tablet/image-best-gear.jpg'
import ImgHeroDesktop from '../../assets/images/shared/desktop/image-best-gear.jpg'


const PresentationHeadphones = () => {

  return (
    <article class="presentation">
      <div className="presentation__info">
        <h1 className={`presentation__title text-3xl font-bold text-black-4 uppercase tracking-normal`}>Bringing you the <span class="text-orange-4">best</span> <span className='presentation_haeding-decor-1'>audio gear</span></h1>
        <p className='presentation__text text-gray-4 font-medium'>
          Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
        </p>
      </div>
      <picture className='presentation__img-container rounded-4'>
        <source srcSet={ImgHeroDesktop} media="(min-width: 1200px)" alt="lala" />
        <source srcSet={ImgHeroTablet} media="(min-width: 700px)" alt="lala" />
        <img src={ImgHeroMobile} draggable="false" alt="Man with headphones" className='rounded-4' />
      </picture>
    </article>
  )
}

export default PresentationHeadphones;