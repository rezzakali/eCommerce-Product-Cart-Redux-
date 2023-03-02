import {
  ADD_TO_CART,
  DECREASE_PRODUCT_QNTY,
  DELETE_CART_ITEM,
  INCREASE_PRODUCT_QNTY,
} from './actionTypes';
import { initialStateForCart } from './initialState';

const cartReducer = (state = initialStateForCart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const productToAdd = action.payload;

      const productInCart = state.cart.find(
        (item) => item.id === productToAdd.id
      );
      if (productInCart) {
        // If the product is already in the cart, increase its quantity by 1
        productInCart.quantity += 1;
        return {
          ...state,
          cart: [...state.cart],
        };
      } else {
        // If the product is not in the cart, add it with a quantity of 1
        const newProduct = {
          ...productToAdd,
          quantity: 1,
        };
        return {
          ...state,
          cart: [...state.cart, newProduct],
        };
      }

    case DELETE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case INCREASE_PRODUCT_QNTY:
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          }
          return product;
        }),
      };
    case DECREASE_PRODUCT_QNTY:
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              quantity:
                product.quantity > 1 ? product.quantity - 1 : product.quantity,
            };
          }
          return product;
        }),
      };

    default:
      return state;
  }
};

export default cartReducer;
