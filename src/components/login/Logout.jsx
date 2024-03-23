import React from "react";
import { useNavigate, Link } from 'react-router-dom'

function Logout() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        location.href = '/';
        location.reload();
      };
    return (
        <Link to="#" onClick={handleLogout}>Log out</Link>
    )
}
export default Logout;