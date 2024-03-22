import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home addToCart={setCart} />} />
          <Route path="/cart" element={<Cart cart={cart} />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
