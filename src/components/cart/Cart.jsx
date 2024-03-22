import React from 'react';

function Cart({ cart }) { // Pass 'cart' as a prop to the Cart component
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>${item.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
