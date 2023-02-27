import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCart } from '../../redux/actions';

function LeftCart({ cartItem }) {
  const dispatch = useDispatch();

  const handleDelete = (cartId) => {
    dispatch(deleteCart(cartId));
  };

  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        {/* cart image  */}
        <img className="lws-cartImage" src={cartItem.image} alt="product" />
        {/* cart cartItem info  */}
        <div className="space-y-2">
          <h4 className="lws-cartName">{cartItem.name}</h4>
          <p className="lws-cartCategory">{cartItem.category}</p>
          <p>
            BDT <span className="lws-cartPrice">{cartItem.price}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* amount buttons  */}
        <div className="flex items-center space-x-4">
          <button className="lws-incrementQuantity">
            <i className="text-lg fa-solid fa-plus"></i>
          </button>
          <span className="lws-cartQuantity">2</span>
          <button className="lws-decrementQuantity">
            <i className="text-lg fa-solid fa-minus"></i>
          </button>
        </div>
        {/* price  */}
        <p className="text-lg font-bold">
          BDT <span className="lws-calculatedPrice">2200</span>
        </p>
      </div>
      {/* delete button  */}
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button
          className="lws-removeFromCart"
          onClick={() => handleDelete(cartItem.id)}
        >
          <i className="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default LeftCart;
