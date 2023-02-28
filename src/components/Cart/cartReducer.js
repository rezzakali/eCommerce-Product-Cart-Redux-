import {
  ADDTOCART,
  DECREASE,
  DECREASECARTITEM,
  DELETECARTITEM,
  INCREASE,
} from '../../redux/actionTypes';
import { initialStateForCart } from '../../redux/initialState';

const cartReducer = (state = initialStateForCart, action) => {
  switch (action.type) {
    case ADDTOCART:
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

    case DELETECARTITEM:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case DECREASECARTITEM:
      const oldItemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state[oldItemIndex].cartQuantity > 1) {
        state[oldItemIndex].cartQuantity -= 1;
      }

    case INCREASE:
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
    case DECREASE:
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
