import React from "react";

function Login () {

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

}

return (
  <div>

  </div>
)

export default Login;