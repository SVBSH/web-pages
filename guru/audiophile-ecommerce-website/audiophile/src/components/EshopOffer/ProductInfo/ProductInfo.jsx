import './ProductInfo.css';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

import { motion, useAnimation } from 'framer-motion';


const boxVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.96
    }
  }
}

const boxVariants1 = {
  hidden: { opacity: 0, height: '80%' },
  visible: {
    height: '100%',
    opacity: 1,
    transition: {
      duration: .95,
    }
  }
}


const ProductInfo = (props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px'
  });

  const controls = useAnimation();


  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
    if (!inView) {
      controls.start('hidden')

    }
  }, [controls, inView])


  return (
    <motion.article
      ref={ref}
      className="product text-black-4 bg-white-4"
    // initial="hidden"
    // animate={controls}
    // variants={boxVariants}
    >
      <picture className="product__img-container rounded-4">
        <source srcSet={props.productImages.desktop} media="(min-width: 1200px)" alt="lala" />
        <source srcSet={props.productImages.tablet} media="(min-width: 700px)" alt="lala" />
        <img draggable="false" src={props.productImages.mobile} alt="product" className="product__img rounded-4" loading="lazy" />
      </picture>
      <motion.div
        animate={controls}
        initial="hidden"
        variants={boxVariants1}
        className="product__info flex flex-col"
      >
        <h2 className="product__title text-3xl font-bold tracking-normal leading-10">{props.productTitle}</h2>
        <p className="product__text text-xs text-gray-4 font-medium">{props.productDescription}</p>
        <Link to={`product/${props.id}`} className="btn product__btn uppercase font-bold tracking-wide" data-type="1">See product</Link>
      </motion.div>
    </motion.article>
  )
}

export default ProductInfo;