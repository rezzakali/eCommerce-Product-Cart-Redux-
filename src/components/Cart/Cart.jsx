import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, deleteCart, increase } from '../../redux/actions';

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);

  const totalAmount = cartItems
    ?.map((cartItem) => cartItem.quantity * cartItem.price)
    ?.reduce((acc, curr) => acc + curr, 0);

  const handleDelete = (cartId) => {
    dispatch(deleteCart(cartId));
  };
  const incrementHandler = (product) => {
    dispatch(increase(product));
  };

  const decrementHandler = (product) => {
    dispatch(decrease(product));
  };

  return (
    <main className="py-16">
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          <div className="space-y-6">
            {cartItems?.map((cartItem, id) => {
              return (
                <div className="cartCard" key={id}>
                  <div className="flex items-center col-span-6 space-x-6">
                    {/* cart image  */}
                    <img
                      className="lws-cartImage"
                      src={cartItem.image}
                      alt="product"
                    />
                    {/* cart info  */}
                    <div className="space-y-2">
                      <h4 className="lws-cartName">{cartItem.name}</h4>
                      <p className="lws-cartCategory">{cartItem.category}</p>
                      <p>
                        BDT{' '}
                        <span className="lws-cartPrice">{cartItem.price}</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                    {/* amount buttons  */}
                    <div className="flex items-center space-x-4">
                      <button
                        className="lws-incrementQuantity"
                        onClick={() => incrementHandler(cartItem)}
                      >
                        <i className="text-lg fa-solid fa-plus"></i>
                      </button>
                      <span className="lws-cartQuantity">
                        {cartItem.quantity}
                      </span>
                      <button
                        className="lws-decrementQuantity"
                        onClick={() => decrementHandler(cartItem)}
                      >
                        <i className="text-lg fa-solid fa-minus"></i>
                      </button>
                    </div>
                    {/* price  */}
                    <p className="text-lg font-bold">
                      BDT{' '}
                      <span className="lws-calculatedPrice">
                        {cartItem.price}
                      </span>
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
            })}
          </div>
          <div>
            <div className="billDetailsCard">
              <h4 className="mt-2 mb-8 text-xl font-bold text-center">
                Bill Details
              </h4>
              <div className="space-y-4">
                {/* sub total  */}
                <div className="flex items-center justify-between">
                  <p>Sub Total</p>
                  <p>
                    BDT <span className="lws-subtotal">{totalAmount}</span>
                  </p>
                </div>
                {/* Discount  */}
                <div className="flex items-center justify-between">
                  <p>Discount</p>
                  <p>
                    BDT <span className="lws-discount">0</span>
                  </p>
                </div>
                {/* VAT  */}
                <div className="flex items-center justify-between">
                  <p>VAT</p>
                  <p>
                    BDT <span className="vat">0</span>
                  </p>
                </div>
                {/* Total  */}
                <div className="flex items-center justify-between pb-4">
                  <p className="font-bold">TOTAL</p>
                  <p className="font-bold">
                    BDT <span className="lws-total">{totalAmount}</span>
                  </p>
                </div>
                <button className="placeOrderbtn">place order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;
