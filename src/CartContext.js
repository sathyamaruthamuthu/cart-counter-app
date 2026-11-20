import React, { useState, createContext, useCallback, useMemo } from 'react';

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const itemValues = [
    {
      name: 'toothbrush',
      price: 25,
    },
    {
      name: 'soap',
      price: 100,
    },
    {
      name: 'shampoo',
      price: 250,
    },
  ];
  const [items, setItems] = useState(itemValues);
  const count = items.length;
  const handleAddtoCart = useCallback((item) => {
    console.log('addtocart click');
    setItems((current) => [...current, item]);
  }, []);
  const totalPrice = useMemo(() => {
    return items.reduce((acc, current) => acc + current.price, 0);
  }, [items]);

  return (
    <CartContext.Provider value={{ count, items, handleAddtoCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}
