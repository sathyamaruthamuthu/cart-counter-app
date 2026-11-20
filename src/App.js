import React from 'react';
import CartProvider from './CartContext.js';
import Header from './Header.jsx';
import AddToCart from './AddToCart.jsx';

export default function App() {
  //const [isHidden, setIsHidden] = useState(true);
  return (
    <CartProvider>
        <Header />
        <AddToCart />
    </CartProvider>
  );
}
