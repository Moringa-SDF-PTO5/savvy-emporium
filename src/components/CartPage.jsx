
import React from 'react';
import Cart from './components/Cart';

function CartPage({ cart }) {
  return (
    <div>
      <h1>Cart Page</h1>
      <Cart cart={cart} />
    </div>
  );
}

export default CartPage;
