import { DECREASE_PRODUCT_QUANTITY, PRODUCT_ADDED } from '../redux/actionTypes';
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

    default:
      return state;
  }
};

export default reducer;
