import React from 'react';

function Cart({ cart }) {
  // Check if cart is undefined or null
  if (!cart) {
    return <div className="cart">Your cart is empty.</div>;
  }

  return (
    <div className="cart">
      <h4>Shopping Cart</h4>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.title} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
