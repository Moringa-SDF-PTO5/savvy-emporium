import React from 'react';

function Cart({ cart }) {
  // Check if cart is undefined or null
  if (!cart || cart.length === 0) {
    return <div className="cart">Your cart is empty.</div>;
  }

  return (
    <div className="cart">
      <h4>Shopping Cart</h4>
      <div className="cart-grid">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <div className="cart-item-details">
              <h6>{item.title}</h6>
              <p className="price">${item.price}</p>
              <p className="category">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;

