import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css'

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [users, setUsers] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate()
  const onCancel = () => {navigate('/')};
  const handleInputChange = (e) => {
    const value = e.target.value;
    setEmail(value)
  }
  const findUserId = (email) => {
    if (users && users.length && users.length > 0) {
    const user = users.find((user) => user.email === email);
    if (user &&  user.id){
      return user.id;
    }
    else {setError('Invalid Credentials');} 
      } else {
        setError('Invalid Credentials');
      }
  } 
  useEffect(() => {handleFetchUsers() }, [])
  useEffect(() => {console.log(users) }, [users])

  const handleFetchUsers= async ()  => {
    try {
      const response = await fetch('https://emporium-ha7b.onrender.com/users')
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error resetting password:', error.message);
    }
  };
  const handleResetPassword = async (e)  => {
    e.preventDefault(); 
    const id = findUserId(email);
    try {
      const response = await fetch(`https://emporium-ha7b.onrender.com/users/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        
        body: JSON.stringify({ password:newPassword })
      });     
      if (!response.ok) {
        setError('Error resetting password');
        throw new Error('Failed to reset password');
      } else { 
        alert('Password reset successfully. Please log in with your new credentials.');
        navigate('/login')
      }
    } catch (error) {
     setError('Error resetting password');
    }
  };

  return (
    <div className='reset-container'>
      <h3 className='reset-title'>Reset Password</h3>
      <form className='form' onSubmit={handleResetPassword}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input className='w-25 form-control' type="email" placeholder="Enter your email" value={email} onChange={handleInputChange} required />
        <input className='w-25 form-control' type="password" placeholder="Enter new password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
        <button className='btn btn-primary btn-sm w-25' type="submit">Reset Password</button><br/>
        <button className='btn btn-danger btn-sm w-25' type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
