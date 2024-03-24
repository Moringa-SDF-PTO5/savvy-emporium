import React from 'react';
import { useLocation } from 'react-router-dom';

function OrderPage() {
  const location = useLocation();
  const { product } = location.state; 

  return (
    <div>
      <h2>Order Details</h2>
      <table>
        <tbody>
          <tr>
            <td>Title:</td>
            <td>{product.title}</td>
          </tr>
          <tr>
            <td>Price:</td>
            <td>${product.price}</td>
          </tr>
          {/* Add more rows for other product details */}
        </tbody>
      </table>
    </div>
  );
}

export default OrderPage;
