import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'; 

function Cart({ cartItems, emptyCart }) {
  const [cart, setCart] = useState(cartItems);

  const handleEmptyCart = () => {
    emptyCart();
  };

  const handleQuantityChange = (newValue, index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = newValue;
    setCart(updatedCart);
  };

  const handleIncrement = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
  };

  const handleDecrement = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
    }
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div>
      <h2>Cart</h2>
      
     
        <Link to="/payment" className="btn btn-success">Proceed to Payment</Link>
      <Link to="/" className="btn btn-primary">Go Back to Home</Link>
      <div className="total-price">
        <p>Total Price in Cart: ${calculateTotalPrice()}</p>
      </div>
      <div className="cart-container">
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.title} />
              <div>
                <h6>{item.title}</h6>
                <p className="price">${item.price}</p>
                <p className="category">{item.category}</p>
                <div className="quantity-controls">
                  <button onClick={() => handleIncrement(index)}>+</button>
                  <input 
                    type="number" 
                    value={item.quantity} 
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value), index)} 
                    min="1"
                    className="quantity-input" 
                  />
                  <button onClick={() => handleDecrement(index)}>-</button>
                </div>
                <p>Total: ${item.price * item.quantity}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      
    </div>
  );
}

export default Cart;

