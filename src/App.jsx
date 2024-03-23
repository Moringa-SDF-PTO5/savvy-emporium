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
import Navbar from './components/structure/Navbar';
import Footer from './components/structure/Footer';
import '../src/App.css'


function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div>
    <Router>
    <Navbar />
      <Routes>   
        <Route path="/" element={<Home selectedCategory={selectedCategory} />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/forgot"  element={<ForgotPassword/> }/>
        {/* PrivateRoutes */}
        <Route path='/' element={<PrivateRoute />} >
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/users" element={<UserProfile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/change-password" element={<ChangePassword />} /> 
        </Route >
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;