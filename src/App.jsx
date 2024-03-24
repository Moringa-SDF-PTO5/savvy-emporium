import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import Login from './components/login/Login';
import Register from './components/login/Register';
import AdminDashboard from './components/dashboard/AdminDashboard';
import PrivateRoute from './components/Auth/PrivateRoute';
import ForgotPassword from './components/login/ForgotPassword';
import ErrorPage from './components/pages/ErrorPage';
import ChangePassword from './components/login/ChangePassword';
import UserProfile from './components/dashboard/UserProfile';
import Category from './components/dashboard/Category';
import Navbar from './components/structure/Navbar';
import Footer from './components/structure/Footer';
import Cart from './components/cart/Cart';
import PaymentLandingPage from './components/payment/PaymentLandingPage';
import OrderPage from './components/payment/OrderPage';
import '../src/App.css'


function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    
    setCartItems(prevCartItems => [...prevCartItems, product]);
  };

const [selectedCategory, setSelectedCategory] = useState('All');
  return (
    <div>
    <Router>
    <Navbar />
      <Routes>   
        <Route path="/" element={<Home selectedCategory={selectedCategory} handleAddToCart={handleAddToCart} />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/forgot"  element={<ForgotPassword/> }/>
        {/* PrivateRoutes */}
        <Route path='/' element={<PrivateRoute />} >
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/users" element={<UserProfile />} />
        <Route path="/products" element={<Category />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/change-password" element={<ChangePassword />} /> 
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        <Route path="/payment" element={<PaymentLandingPage />} />
        <Route path="/order" element={<OrderPage />} />
        </Route >
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;