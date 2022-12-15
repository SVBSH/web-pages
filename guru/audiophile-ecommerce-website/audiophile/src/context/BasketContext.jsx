import PropTypes from 'prop-types';
import { useReducer, useContext } from "react";
import { createContext } from "react";


const BasketContext = createContext();


const basketTesting = [
  {
    id: 1,
    name: 'XX99 MK II',
    quantity: 1,
    price: 1000,
    descriptiveImg: '/path/to/img'
  },
  {
    id: 2,
    name: 'YX1',
    quantity: 1,
    price: 500,
    descriptiveImg: '/path/to/img'
  },
  {
    id: 3,
    name: 'XX59',
    quantity: 2,
    price: 500,
    descriptiveImg: '/path/to/img'
  }
]


const Product = {
  id: 0,
  name: '',
  price: 0,
  quantity: 0,
  descriptiveImg: ''
}


Product.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  descriptiveImg: PropTypes.string
}


class _BasketActionsFunctions {

  /* Add product to basket */
  static actionAddProduct(basketInfo, payload) {
    const newProductPrice = payload.price * payload.quantity;

    let productPrevSet = false;
    let updatedBasket = basketInfo.basket.map(
      (product) => {
        if (product.id === payload.id) {
          productPrevSet = true;
          return {
            ...product, quantity: product.quantity + payload.quantity
          }
        }
        return product;
      }
    )

    if (!productPrevSet) {
      updatedBasket.push(payload);
    }
    return {
      priceSummary: basketInfo.priceSummary + newProductPrice,
      basket: updatedBasket
    }
  }

  // TODO:
  // static removeProduct(basketInfo, payload) {
  //   return {
  //     priceSummary: basketInfo.priceSummary,
  //     basket: basketInfo.basket.filter();
  //   }
  // }

  /* Remove all products from basket and set priceSummary to null  */
  static actionRemoveAllProducts() {
    return {
      priceSummary: 0,
      basket: []
    }
  }

  /* Change quantity for a single product */
  static actionChangeProductQuantity(basketInfo, payload) {
    let quantityOffset = 0;

    switch (payload.action) {
      case 'increase': {
        quantityOffset = 1;
        break;
      }
      case 'decrease': {
        quantityOffset = - 1;
        break;
      }
      default: {
        throw new Error(`actionChangeQuantity: invalid quantity action <${payload.action}>`);
      }
    }

    const basketIndex = payload.basketIndex;
    const oldProduct = basketInfo.basket[basketIndex];

    const newProductQuantity = oldProduct.quantity + quantityOffset;
    if (newProductQuantity < 0) {
      return basketInfo;
    }

    // Update target product quantity
    const updatedBasket = basketInfo.basket.map(product => {
      if (product.id === payload.id) {
        return {
          ...product, quantity: newProductQuantity
        }
      }
      return product;
    })

    // Update priceSummary to reflect change of quantity
    const newProductTotalPrice = oldProduct.price * newProductQuantity;
    const oldProductTotalPrice = oldProduct.price * oldProduct.quantity;

    const updatedPriceSummary = (basketInfo.priceSummary - oldProductTotalPrice) + newProductTotalPrice;
    return {
      priceSummary: updatedPriceSummary,
      basket: updatedBasket
    }
  }
}

/* 
  Action Types
*/
export const BasketActions = {
  ADD_PRODUCT: 'ADD_PRODUCT',
  CHANGE_QUANTITY: 'CHANGE_QUANTITY',
  REMOVE_ALL: 'REMOVE_ALL'
}


export const basketReducer = (basketInfo, action) => {
  const payload = action.payload;

  switch (action.type) {
    case BasketActions.ADD_PRODUCT: {
      return _BasketActionsFunctions.actionAddProduct(basketInfo, payload);
    }
    case BasketActions.REMOVE_ALL: {
      return _BasketActionsFunctions.actionRemoveAllProducts();
    }
    case BasketActions.CHANGE_QUANTITY: {
      return _BasketActionsFunctions.actionChangeProductQuantity(basketInfo, payload);
    }
    default: {
      throw new Error(`BasketReducer: action <${action}> is not defined`);
    }
  }
}

const initialBasketInfo = {
  priceSummary: 0,
  basket: basketTesting
}

const BasketContextProvider = ({ children }) => {

  const [basketInfo, dispatch] = useReducer(
    basketReducer,
    initialBasketInfo
  );
  const values = { basketInfo, dispatch };

  return (
    <BasketContext.Provider value={values}>
      {children}
    </BasketContext.Provider>
  );
}


export const useBasketContext = () => {
  const context = useContext(BasketContext);

  return context;
}


export default BasketContextProvider;