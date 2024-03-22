import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logout from '../login/Logout';
import { GrCart } from "react-icons/gr";
import logo from '../images/logo.png'

function Navbar({ }) {

const [loggedIn, setLoggedIn] = useState(false);
const [username, setUsername] = useState('');
const userData = localStorage.getItem("userData");

useEffect(()=>{
const handleLogin = () => {
if (userData) {
const data = JSON.parse(userData);
setLoggedIn(true);
setUsername(data.firstName);
} else {setLoggedIn(false)}
};
handleLogin()
},[userData]);


return (

<nav>
<div className='d-flex flex-row'>
<img className='p-2' src={logo} alt='logo' />
<Link to='/'><h4 className='text-info p-2 brand'> Savvy <span id='emporium'>Emporium</span></h4></Link>
</div>

<div className="dropdown">
<Link className={`text-info ${loggedIn ? 'dropdown-toggle' : "" }`} data-bs-toggle={loggedIn ? "dropdown" : ''} to={loggedIn ? '#' : "/login"}>{loggedIn ? username : 'Login'}</Link>
{loggedIn ? <ul className="dropdown-menu">
<li><Link className='dropdown-item' to="/profile">Profile</Link></li>
<li className='dropdown-item'><Logout /></li>
</ul> : null}
</div>

<div className='text-info'><GrCart /></div>
</nav>
);
}

export default Navbar;