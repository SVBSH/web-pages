import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import styles from './Basket.module.css';
import { useBasketContext, BasketActions } from "../../context/BasketContext";
import ProductCounter from "../ProductCounter/ProductCounter";


const Basket = ({ refBasketMenuContainer }) => {
  const navigate = useNavigate();

  const basketContext = useBasketContext();
  const basketMenuItems = useRef(null);

  const handleCheckoutBtn = e => {
    if (basketContext.basketInfo.basket.length <= 0 && basketContext.basketInfo.priceSummary <= 0) {
      return;
    }

    refBasketMenuContainer.current.classList.toggle('inactive')
    navigate('/checkout');
  }


  const handleRemoveProductsFromBasket = e => {
    let basketItems = basketMenuItems.current.querySelectorAll('.basket__order');
    console.log('items')
    console.log(basketItems, basketMenuItems.current)

    basketItems = Array.from(basketItems);

    const baseTimeout = 800;
    // run animation
    basketItems.forEach(
      async (item, i) => {
        (function (i) {
          setTimeout(function () {
            item.classList.add('roll-out-right');
          }, baseTimeout * i);
        })(i);
      }
    )
    // remove products from basket 
    setTimeout(function () {
      basketContext.dispatch({
        type: BasketActions.REMOVE_ALL,
      })
    }, baseTimeout * basketItems.length);
  }

  return (
    <div ref={refBasketMenuContainer} className={`bg-white-4 rounded-4 ${styles['basket-container']}`}>
      <div className={`bg-white-4 rounded-4 ${styles['basket__menu']}`}>
        <div className="flex flex-row justify-space-between pb-4 text-lg">
          <div className="flex flex-row justify-space-between text-black-4 font-bold" style={{ '--gap': '.2em', }}>
            <p className={`basket__menu-title uppercase tracking-normal ${styles.basket__title}`}>Cart</p>
            <p>({basketContext.basketInfo.basket.length})</p>
          </div>
          <button
            onClick={handleRemoveProductsFromBasket}
            className={`text-sm ${styles['basket-btn-remove']}`} >
            Remove all
          </button>
        </div>
        {/* Basket - Products */}
        <ul
          className={"grid basket-scrollbar  " + styles.basket__orders}
          ref={basketMenuItems}
        >
          {
            basketContext.basketInfo.basket.map(
              (product, index) =>
                <li key={index} className={`grid grid-col justify-space-between basket__order`} >
                  <img
                    src={product.descriptiveImg}
                    alt={product.name}
                    className={`rounded-4 ${styles['basket__order-img']}`}
                    draggable="false"
                  />
                  <div className="flex flex-col font-bold justify-center" style={{ '--gap': '0rem' }}>
                    <p className="text-black-4">{product.name}</p>
                    <p className="text-gray-4">$ {product.price}</p>
                  </div>
                  <ProductCounter id={product.id} basketIndex={index} quantity={product.quantity} />
                </li>
            )
          }
        </ul>
        {/* Basket - Checkout with price Summary */}
        <div className="flex flex-col">
          <div className="flex flex-row justify-space-between items-center">
            <p className="text-gray-4 uppercase">Total</p>
            <p className="text-black-4 font-bold text-lg">$ {basketContext.basketInfo.priceSummary}</p>
          </div>
          <button className="btn uppercase" data-type="1" onClick={handleCheckoutBtn}>Checkout</button>
        </div>

      </div>
    </div>
  )
}

export default Basket;