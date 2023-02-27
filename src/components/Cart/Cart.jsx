import React from 'react';
import { useSelector } from 'react-redux';
import LeftCart from '../Cart/LeftCart';
import BillDetails from './BillDetails';

function Cart() {
  const cartItems = useSelector((state) => state.cart);

  return (
    <main className="py-16">
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          <div className="space-y-6">
            {cartItems?.map((cartItem, id) => (
              <LeftCart cartItem={cartItem} key={id} />
            ))}
          </div>
          <BillDetails />
        </div>
      </div>
    </main>
  );
}

export default Cart;
