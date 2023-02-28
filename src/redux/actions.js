import {
  ADDTOCART,
  DECREASE,
  DECREASEPRODUCTQUANTITY,
  DELETECARTITEM,
  INCREASE,
  PRODUCTADDED,
} from '../redux/actionTypes';

export const added = (productDetails) => {
  return {
    type: PRODUCTADDED,
    payload: productDetails,
  };
};

export const cart = (product) => {
  return {
    type: ADDTOCART,
    payload: product,
  };
};

export const deleteCart = (id) => {
  return {
    type: DELETECARTITEM,
    payload: id,
  };
};

export const decreaseProductQuantity = (productId) => {
  return {
    type: DECREASEPRODUCTQUANTITY,
    payload: productId,
  };
};

export const decrease = (product) => {
  return {
    type: DECREASE,
    payload: product,
  };
};
export const increase = (product) => {
  return {
    type: INCREASE,
    payload: product,
  };
};
