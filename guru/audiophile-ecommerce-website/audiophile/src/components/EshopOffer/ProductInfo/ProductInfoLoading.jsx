
import './ProductInfo.css';
import './ProductInfoLoading.css'
import { Link } from 'react-router-dom';


const ProductInfoLoading = (props) => {

  return (
    <article
      className="product text-black-4 bg-white-4"
    >
      <div className="product__img rounded-4 animate"></div>
      {/* <img draggable="false" src={props.productImages.mobile} alt="loading product ..." className="product__img rounded-4" loading="lazy" /> */}
      <div
        className="product__info flex flex-col"

      >
        <h2 className="product__title text-3xl font-bold tracking-normal leading-10">{props.productTitle}</h2>
        <p className="product__text text-xs text-gray-4">{props.productDescription}</p>
        <Link to={`product/${props.id}`} className="btn product__btn uppercase font-bold tracking-wide" data-type="1">See product</Link>
      </div>
    </article>
  )
}

export default ProductInfoLoading;