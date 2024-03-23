import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';
import { Link, useNavigate } from 'react-router-dom';
import Logout from '../login/Logout';

const AdminDashboard = () => {
  const [usersCount, setUsersCount] = useState(0);
  const [categoriesCount, setCategoriesCount] = useState({});
  const [user, setUser] = useState(null);
  const [showUserProfile, setShowUserProfile] = useState(false); // State to manage UserProfile visibility
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      const data = JSON.parse(userData);
      setUser(data);
      if (data.role !== 'admin') {
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    fetch('https://emporium-ha7b.onrender.com/users')
      .then(res => res.json())
      .then(users => setUsersCount(users.length))
      .catch(error => console.error('Error fetching users:', error));

    fetch('https://fakestoreapi.com/products?sort=desc')
      .then(res => res.json())
      .then(products => {
        const categories = {};
        products.forEach(product => {
          if (categories[product.category]) {
            categories[product.category]++;
          } else {
            categories[product.category] = 1;
          }
        });
        setCategoriesCount(categories);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className='dashboard-container'>
      <h2 className='dashboard-header'>Admin Dashboard</h2>
      <div className='category-box jewelry'>
        <h3 className='category-header'>Jewelry</h3>
        <p className='category-count'>Number of Products: {categoriesCount['jewelry'] || 0}</p>
      </div>
      <div className='category-box electronics'>
        <h3 className='category-header'>Electronics</h3>
        <p className='category-count'>Number of Products: {categoriesCount['electronics'] || 0}</p>
      </div>
      <div className='category-box womens-clothing'>
        <h3 className='category-header'>Women's Clothing</h3>
        <p className='category-count'>Number of Products: {categoriesCount["women's clothing"] || 0}</p>
      </div>
      <div className='category-box mens-clothing'>
        <h3 className='category-header'>Men's Clothing</h3>
        <p className='category-count'>Number of Products: {categoriesCount["men's clothing"] || 0}</p>
      </div>
      <div className='category-box users'>
        <h3 className='category-header'>
          <Link to="/users">Registered Users</Link>
        </h3>
        <p className='user-count'>Number of Clients: {usersCount}</p>
      </div>
      <Logout />
      {/* Render UserProfile component conditionally */}
      {showUserProfile && <UserProfile />}
    </div>
  );
};

export default AdminDashboard;
