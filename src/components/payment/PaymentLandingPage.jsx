import React from 'react';
import { Link } from 'react-router-dom';
import './PaymentLandingPage.css'; 


function PaymentLandingPage() {
  return (
    <div className="payment-landing-page"> 
      <h2>Payment Successful!</h2>
      <p>Thank you for your purchase.</p>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default PaymentLandingPage;
