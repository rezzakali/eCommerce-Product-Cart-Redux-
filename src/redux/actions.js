import {
  ADD_TO_CART,
  DECREASE_PRODUCT_QNTY,
  DECREASE_PRODUCT_QUANTITY,
  DELETE_CART_ITEM,
  INCREASE_PRODUCT_QNTY,
  PRODUCT_ADDED,
} from '../redux/actionTypes';

export const added = (productDetails) => {
  return {
    type: PRODUCT_ADDED,
    payload: productDetails,
  };
};

export const cart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const deleteCart = (id) => {
  return {
    type: DELETE_CART_ITEM,
    payload: id,
  };
};

export const decreaseProductQuantity = (productId) => {
  return {
    type: DECREASE_PRODUCT_QUANTITY,
    payload: productId,
  };
};

export const cart_item_decrease = (product) => {
  return {
    type: DECREASE_PRODUCT_QNTY,
    payload: product,
  };
};
export const cart_item_increase = (product) => {
  return {
    type: INCREASE_PRODUCT_QNTY,
    payload: product,
  };
};
