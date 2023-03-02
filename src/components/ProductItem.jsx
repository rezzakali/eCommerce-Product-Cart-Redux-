import React from 'react';
import { useDispatch } from 'react-redux';
import { cart, decreaseProductQuantity } from '../redux/actions';

function ProductItem({ product }) {
  const dispatch = useDispatch();
  const { name, category, image, price, quantity } = product;

  const addToCartHandler = (productForCart) => {
    dispatch(cart(productForCart));
    dispatch(decreaseProductQuantity(productForCart.id));
  };

  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={image} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{name}</h4>
        <p className="lws-productCategory">{category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{quantity}</span>
          </p>
        </div>
        <button
          className="lws-btnAddToCart"
          disabled={quantity <= 0}
          onClick={() => addToCartHandler(product)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
