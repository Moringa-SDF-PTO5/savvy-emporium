import React from 'react';
import './Footer.css';


function Footer() {
  return (
    <footer className='footer'>
      <div className="footer-container">
        <div className="business-details"  >
          <h2 style={{color:'white'}}>Savvy Emporium</h2>
          <p style={{color:'white'}}>1234 Street, New Empire Building</p>
          <p style={{color:'white'}}>Phone: 123-456-7890</p>
          <p style={{color:'white'}}>Email: info@savvyemporium.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
