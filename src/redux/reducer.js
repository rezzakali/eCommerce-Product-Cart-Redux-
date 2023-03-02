import {
  DECREASE_PRODUCT_QUANTITY,
  PRODUCT_ADDED,
  UPDATE_PRODUCT_QUANTITY_BY_DECREAMENT,
  UPDATE_PRODUCT_QUANTITY_BY_INCREAMENT,
} from '../redux/actionTypes';
import { initialState } from './initialState';

const nextProductId = (products) => {
  const maxId = products.reduce(
    (maxId, product) => Math.max(product.id, maxId),
    -1
  );
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_ADDED:
      return [
        ...state,
        {
          id: nextProductId(state),
          name: action.payload.name,
          category: action.payload.category,
          image: action.payload.image,
          price: action.payload.price,
          quantity: action.payload.quantity,
        },
      ];

    case DECREASE_PRODUCT_QUANTITY:
      const productId = action.payload;

      const products = state.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
      return products;

    case UPDATE_PRODUCT_QUANTITY_BY_INCREAMENT:
      const product = state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: (item.quantity -= 1) }
          : item
      );

      return product;

    case UPDATE_PRODUCT_QUANTITY_BY_DECREAMENT:
      const produck = state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: (item.quantity += 1) }
          : item
      );

      return produck;

    default:
      return state;
  }
};

export default reducer;
