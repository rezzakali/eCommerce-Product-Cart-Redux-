import { combineReducers } from 'redux';
import cartReducer from '../redux/cartReducer';
import reducer from '../redux/reducer';

const rootReducer = combineReducers({
  product: reducer,
  cart: cartReducer,
});

export default rootReducer;
