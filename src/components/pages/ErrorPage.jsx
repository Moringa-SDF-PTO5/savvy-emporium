import React from 'react';
import './ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>Oops! Page Doesn't Exist.</h1>
      <button onClick={() => location.href='/' }>Homepage</button>
    </div>
  );
};

export default ErrorPage;