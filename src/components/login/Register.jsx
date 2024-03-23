import React, { useState } from 'react';
import './Register.css';

function Register({ onRegister, setShowRegisterForm }) {
  const [userData, setUserData] = useState({
    id:'',
    email: '',
    role: 'user',
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    city: '',
    street: '',
    building: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://emporium-ha7b.onrender.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      alert('Registered Successfully');
      setShowRegisterForm(false);
      onRegister(data);
    } catch (error) {
      console.error('Error registering user:', error.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form >
        <input type="email" name="email" value={userData.email} onChange={handleChange} placeholder="Email" required />
        <input type="text" name="username" value={userData.username} onChange={handleChange} placeholder="Username" required />
        <input type="password" name="password" value={userData.password} onChange={handleChange} placeholder="Password" required />
        <input type="text" name="firstName" value={userData.firstName} onChange={handleChange} placeholder="First Name" required />
        <input type="text" name="lastName" value={userData.lastName} onChange={handleChange} placeholder="Last Name" required />
        <input type="text" name="city" value={userData.city} onChange={handleChange} placeholder="City" required />
        <input type="text" name="street" value={userData.street} onChange={handleChange} placeholder="Street" required />
        <input type="text" name="building" value={userData.building} onChange={handleChange} placeholder="Building" required />
        <input type="number" name="phone" value={userData.phone} onChange={handleChange} placeholder="Phone" required />
        <button className='btn btn-primary btn-sm w-50' type="button" onClick={handleSubmit}>Register</button>
      </form>
    </div>
  );
}

export default Register;
