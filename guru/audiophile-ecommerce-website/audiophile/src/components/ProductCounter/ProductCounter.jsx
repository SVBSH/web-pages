import PropTypes from 'prop-types';
import { useBasketContext, BasketActions } from '../../context/BasketContext';
import './ProductCounter.css';


const ProductCounter = ({ id, basketIndex, quantity }) => {
  const basketContext = useBasketContext();

  const handleButtons = action => {
    basketContext.dispatch({
      type: BasketActions.CHANGE_QUANTITY,
      payload: {
        id: id,
        basketIndex: basketIndex,
        action: action,
      }
    })
  }

  return (
    <div className="product-counter text-black-4 bg-gray-3 ">
      <button onClick={() => handleButtons('decrease')} className="product-counter__btn bg-gray-3 text-gray-4 font-bold text-2xs">
        -
      </button>
      <p className="product-counter__amount">
        {quantity}
      </p>
      <button
        className="product-counter__btn bg-gray-3 text-gray-4 font-bold text-2xs"
        onClick={() => handleButtons('increase')}
      >
        +
      </button>
    </div>
  )
}


ProductCounter.propTypes = {
  id: PropTypes.number.isRequired,
  basketIndex: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
}



export default ProductCounter