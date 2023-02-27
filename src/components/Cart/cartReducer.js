import { ADDTOCART, DELETECARTITEM } from '../../redux/actionTypes';
import { initialStateForCart } from '../../redux/initialState';

const cartReducer = (state = initialStateForCart, action) => {
  switch (action.type) {
    case ADDTOCART:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          category: action.payload.category,
          image: action.payload.image,
          price: action.payload.price,
          quantity: action.payload.quantity,
        },
      ];
    case DELETECARTITEM:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export default cartReducer;
