import React, { useState, useEffect } from 'react';
import './UserProfile.css';

function UserProfile() {
  const [userData, setUserData] = useState([]);

  useEffect(() => { 
    fetch(`https://emporium-ha7b.onrender.com/users`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch user data');
        }
        return res.json();
      })
      .then((json) => {
        setUserData(json);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div className="user-profile-container">
      <h2 className='user-detail'>Users Details</h2>
        <div className="user-profile">
          {userData.map(user => (
            <div key={user.id}>
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
              {user.address ? (
                <p><strong>Address:</strong> {user.city}, {user.street}, {user.building}</p>
              ) : null}
              <p><strong>Phone:</strong> {user.phone}</p>
              <hr />
            </div>
          ))}
        </div>
    </div>
  );
}

export default UserProfile;
