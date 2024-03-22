import { useState } from "react";
import { useNavigate } from "react-router-dom";


const ChangePassword = ({id, password}) => {
    const  [currentPassword, setCurrentPassword] = useState('')
    const  [newPassword, setNewPassword] = useState('')
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleCurrentPassword = (e) =>{
        setCurrentPassword(e.target.value);
    }
    const handleNewPassword = (e) =>{
        setNewPassword(e.target.value);
    }

const handleFormSubmit = async (e) => {
    e.preventDefault()
    setError('')
    const valid = isPasswordValid();
    if (valid) {
        try {
            const response = await fetch(`http://localhost:3000/users/${id}`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json'
              },       
              body: JSON.stringify({ password:newPassword })
            });
            
            if (!response.ok) {
                setError('Failed to reset password');
              throw new Error('Failed to reset password');
            } else { 
                alert('Password changed successfully. Login with your new Password!');
                navigate("/login")
            }
            // Optionally handle success scenario

          } catch (error) {
           setError('Error resetting password');
          }
    } else {
        setError('You entered the wrong current Password!')
    }
}


const isPasswordValid = () => {
    if (password) {
       return password === currentPassword ? true : false ;
        
    } else {
        return undefined
    }
}

    return (
        <div>
            <form>
            {error && <p style={{ color: 'red' }}>{error}</p>} 
            <label htmlFor="current-password">Current Password:
            <br/>
            <input type="text" id="current-password" onChange={handleCurrentPassword} value={currentPassword}/>
            </label>
            <label htmlFor="new-password">New Password:
            <br/><input type="text"  id="new-password" onChange={handleNewPassword} value={newPassword}/>
            </label>
            <button className="btn btn-primary btn-sm " type="button" onClick={handleFormSubmit} >Change Password</button>
            </form>
        </div>
    )
}


export default ChangePassword;