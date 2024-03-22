import React, { useState, useEffect } from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';
import ChangePassword from '../login/ChangePassword';

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {const data = JSON.parse(userData);
      console.log(userData)
      setUser(data)
    } else {navigate("/login")}
  
  }, []);


  return (
    <div>
      {user && (
    <div>
        <div className="profile-container">
          <h2>User Profile</h2>
          <p className='name-us'>Username: {user.username}</p>
          <p className='email-us'>Email: {user.email}</p>
          <p className='first-us'>First Name: {user.firstName}</p>
          <p className='last-us'>Last Name: {user.lastName}</p>
          <p className='city-us'>City: {user.city}</p>
          <p className='street-us'>Street: {user.street}</p>
          <p className='bldg-us'>Building: {user.building}</p>
          <p className='phone-us'>Phone: {user.phone}</p>
        </div>
        <div>
        <ChangePassword id={user.id} password={user.password} />
        </div>
    </div>
      )}
    </div>
  );
};

export default Profile;
