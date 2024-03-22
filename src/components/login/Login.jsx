import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Register from './Register';

const authenticateUser = async (username, password) => {
  try {
    const response = await fetch('https://emporium-ha7b.onrender.com/users');
    const data = await response.json();  
    const user = data.find(user => user.username === username && user.password === password);
      if (user) {
        localStorage.setItem("userData", JSON.stringify(user));
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
    const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await authenticateUser(username, password);
      if (response.success) {
        localStorage.setItem("currentUser", "isLogged")
        if (response.role === 'admin') {
          location.href='/dashboard'; 
        } else if (response.role === 'user') {
          location.href='/'; 
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

const handleRegister = () => {
    console.log('Registered user:');
  };

  const handleToggleRegister = () => {
    setShowRegisterForm(!showRegisterForm); 
  };

  return (
    <div className='form-container d-flex flex-column align-items-center'>
      <form className='w-25' id='login-form'>
        <h3>Login</h3>
        {error && <p style={{ color: 'red' }}>{error}</p>}
          <input className='log-input' type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
          <input className='log-pwd' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <Link className='forgot-pwd' to="/forgot">Forgot Password?</Link> <br/>
          <button className='btn btn-primary btn-sm w-50' onClick={handleLogin} disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
          </button>
          <div>
          <Link className='forgot-pwd' to="#" onClick={handleToggleRegister}>Don't have an Account?</Link><br/>
          {showRegisterForm && <Register onRegister={handleRegister} />}   
        </div>
      </form> 
    </div>
  );
};

export default Login;
