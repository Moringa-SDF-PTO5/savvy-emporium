import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Register from './Register';

const authenticateUser = async (username, password) => {
  try {
    const response = await fetch('http://localhost:3000/users');
    const data = await response.json();

    const user = data.find(user => user.username === username && user.password === password);
    if (user) {
      return { success: true, userId: user.id, role: user.role };
    } else {
      return { success: false, error: 'Invalid username or password' };
    }
  } catch (error) {
    return { success: false, error: 'An error occurred during login' };
  }
};

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showRegisterForm, setShowRegisterForm] = useState(false); 
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await authenticateUser(username, password);

      if (response.success) {
        localStorage.setItem("currentUser", "isLogged")
        if (response.role === 'admin') {
          navigate('/dashboard'); 
        } else if (response.role === 'user') {
          navigate('/'); 
        }
      } else {
        setError(response.error);
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setError('An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = (userData) => {
    console.log('Registered user:', userData);
  };

  const handleToggleRegister = () => {
    setShowRegisterForm(!showRegisterForm); 
  };

  return (
    <div className='form-container'>
      <h3>Login</h3>
      <input className='log-input' type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input className='log-pwd' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button className='btn-login' onClick={handleLogin} disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
      <div>
        <p>Do you have an Account?</p>
        <button className='btn-reg' onClick={handleToggleRegister}>Register</button>
        {showRegisterForm && <Register onRegister={handleRegister} />} 
      </div>
    </div>
  );
};

export default Login;
