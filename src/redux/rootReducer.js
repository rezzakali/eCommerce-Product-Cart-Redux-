import { combineReducers } from 'redux';
import cartReducer from '../components/Cart/cartReducer';
import reducer from './reducer';

const rootReducer = combineReducers({
  product: reducer,
  cart: cartReducer,
});

export default rootReducer;
