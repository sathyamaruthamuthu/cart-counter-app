import React, { useContext } from 'react';
import { CartContext } from './CartContext.js';

function CartBadge() {
  const { count, totalPrice } = useContext(CartContext);
  return (
    <>
      <h1> CartBadge </h1>
      <div>Cart Total count: {count}</div>
      <div>Cart Total amount: {totalPrice}</div>
    </>
  );
}

export default CartBadge;
