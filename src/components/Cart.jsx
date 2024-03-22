import React from 'react';

function Cart({ cart }) {
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

