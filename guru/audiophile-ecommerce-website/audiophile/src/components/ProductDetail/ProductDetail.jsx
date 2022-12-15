import './ProductDetial.css';

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { useReducer } from 'react';

import { useBasketContext, BasketActions } from '../../context/BasketContext';


const productReducer = (productAmount, action) => {
  let newAmount;
  switch (action.type) {
    case 'INC_AMOUNT': {
      newAmount = productAmount + 1;
      break;
    }
    case 'DEC_AMOUNT': {
      if (productAmount < 2) {
        newAmount = productAmount;
        break;
      }
      newAmount = productAmount - 1;
      break;
    }
    default: {
      throw new Error();
    }
  }
  return newAmount;
}


const ProductDetail = ({fetchURL}) => {
  const [productAmount, dispatchProductAmount] = useReducer(productReducer, 1);
  const basketContext = useBasketContext();
  console.log(basketContext);


  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(false)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${fetchURL}/product/${id}`);
        console.log(response.data)
        setProduct(response.data);
      }
      catch (e) {
        console.log(e)
      }
    }

    fetchProduct();
  }, [id, fetchURL])


  return <>
    {product ?
      <main className="product-detial color-outside-container" style={{'--bg-color': 'var(--bg-white-3)'}}>
        <button className="product-detail__go-back" onClick={() => { navigate(-1) }}>go back</button>

        <section className="product-detail__hero">
          <picture className="product-detail__main-img-container rounded-4">
            <source srcSet={product.image.desktop} media="(min-width: 1400px)" alt={product.name} />
            <source srcSet={product.image.tablet} media="(min-width: 1200px)" alt={product.name} />
            <img draggable="false" src={product.image.mobile} alt="product" className="product-detail__img rounded-4" loading="lazy" />
          </picture>

          <div className="product-detail__info flex flex-col" style={{ '--gap': 'var(--product-gap)' }}>

            <div className="flex flex-col uppercase text-" style={{ '--gap': '.5em' }}>
              {
                product.new && <div className="text-orange-4 text-xs tracking-10xl">New Product</div>
              }
              <h1 className="product-detail__title text-3xl font-bold tracking-normal">
                {product.name}
              </h1>
            </div>

            <p className='text-gray-4 font-medium'>{product.description}</p>
            <p className="text-black-4 font-bold text-lg font-medium">$ {product.price}</p>

            {/* Add product to chart */}
            <div className="flex flex-row-reverse justify-start">
              <button
                className="btn"
                data-type='1'
                onClick={() => {

                  const payload = {
                    id: product.id,
                    name: product.name,
                    quantity: productAmount,
                    price: product.price,
                    descriptiveImg: product.image.mobile
                  }

                  basketContext.dispatch({ 
                    type: BasketActions.ADD_PRODUCT, 
                    payload: payload 
                  })
                }}
              >
                Add to Cart
              </button>

              <div className="add-to-cart-container">
                {/* FIXME: */}
                {/* <button className="add-to-cart__btn" onClick={handleProductCart('-')}>-</button>
                <div className="add-to-cart__amount">{productCartAmount}</div>
                <button className="add-to-cart__btn" onClick={handleProductCart('+')}>+</button> */}
                <button className="add-to-cart__btn" onClick={() => { dispatchProductAmount({ type: 'DEC_AMOUNT' }) }}>-</button>
                <div className="add-to-cart__amount">{productAmount}</div>
                <button className="add-to-cart__btn" onClick={() => { dispatchProductAmount({ type: 'INC_AMOUNT' }) }}>+</button>
              </div>
            </div>
          </div>
        </section>


        <div className="product-detail__container-1">
          <section className="product-detail__features flex flex-col">
            <h1 className="text-black-4 text-2xl uppercase">Features</h1>
            <p className="text-gray-4 text-lg">{product.features}</p>
          </section>
          <section className="product-detail__in-the-box flex flex-col">
            <h1 className="text-black-4 text-2xl uppercase">In the box</h1>
            <ul className="product-detail__basket-list">
              {
                product.includes.map(
                  item =>
                    <li className="product-detail__basket-item text-gray-4 text-lg">
                      <span className="product-detail__basket-amount text-orange-4 font-bold">{item.quantity}x</span>
                      {item.item}
                    </li>
                )
              }
            </ul>
          </section>
        </div>


        <section className="gallery">
          
          <picture className="gallery__item-container">
            <source srcSet={product.gallery.first.desktop} media="(min-width: 1200px)" alt="gallery product feature" />
            <source srcSet={product.gallery.first.tablet} media="(min-width: 700px)" alt="gallery product feature" />
            <img draggable="false" src={product.gallery.first.mobile} alt="gallery product feature" className="gallery__item" />
          </picture>
          <picture className="gallery__item-container">
            <source srcSet={product.gallery.second.desktop} media="(min-width: 1200px)" alt="gallery product feature" />
            <source srcSet={product.gallery.second.tablet} media="(min-width: 700px)" alt="gallery product feature" />
            <img draggable="false" src={product.gallery.second.mobile} alt="gallery product feature" className="gallery__item" />
          </picture>
          <picture className="gallery__item-container">
            <source srcSet={product.gallery.third.desktop} media="(min-width: 1200px)" alt="gallery product feature" />
            <source srcSet={product.gallery.third.tablet} media="(min-width: 700px)" alt="gallery product feature" />
            <img draggable="false" src={product.gallery.third.mobile} alt="gallery product feature" className="gallery__item" />
          </picture>
          
        </section>
      </main>
      :
      <div
        className="notFount"
        style={{
          color: 'purple',
          padding: '4rem 3rem',
          backgroundColor: 'white'
        }}>
        Product Not Found
      </div>
    }
  </>
}

export default ProductDetail;