import {
  ADDTOCART,
  DECREASEPRODUCTQUANTITY,
  DELETECARTITEM,
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
