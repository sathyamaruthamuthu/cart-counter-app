import React, { useContext } from 'react';
import { CartContext } from './CartContext.js';

function AddToCart() {
  const item = {
      name: 'powder',
      price: 150,
    }
  
  const { handleAddtoCart } = useContext(CartContext);
  return (
    <>
      <h1>AddtoCart</h1>
      <button onClick={() => handleAddtoCart(item)}>Add To Cart</button>
    </>
  );
}

export default AddToCart;
