import styles from './EshopOffers.module.css'
import EshopOffer from '../EshopOffer/EshopOffer';
// Eshop product links
import ImgEshopHeadphones from '../../assets/images/shared/image-category-thumbnail-headphones.png'
import ImgEshopEarphones from '../../assets/images/shared/image-category-thumbnail-earphones.png'
import ImgEshopSpeakers from '../../assets/images/shared/image-category-thumbnail-speakers.png'


const EshopOffers = () => {
  return(
    <section className={`bg-white-4`}>
      <div className={`${styles['eshop-offers']}`}>
        <EshopOffer image={ImgEshopHeadphones} title="Headphones" linkUrl="/headphones" />
        <EshopOffer image={ImgEshopSpeakers} title="Earphones" linkUrl="/earphones" />
        <EshopOffer image={ImgEshopEarphones} title="Speaker" linkUrl="/speakers" />
      </div>
    </section>
  )
}

export default EshopOffers;