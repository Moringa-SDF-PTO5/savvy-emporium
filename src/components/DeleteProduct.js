import React, { useState } from 'react';
import axios from 'axios';

const DeleteProduct = () => {
  const [productId, setProductId] = useState('');
  
  const handleDelete = async () => {
    try {
  
      const isAuthenticated = localStorage.getItem('token');
      if (!isAuthenticated) {
        alert('You need to login to perform this action.');
        return;
      }
      

      const userRole = localStorage.getItem('role');
      if (userRole !== 'admin') {
        alert('You are not authorized to perform this action.');
        return;
      }

      await axios.delete(`https://fakestoreapi.com/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      alert('Product deleted successfully!');
      // Optionally, you can add logic to refresh the product list or update the UI
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product. Please try again.');
    }
  };

  return (
    <div>
      <h2>Delete Product</h2>
      <input
        type="text"
        placeholder="Enter product ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete Product</button>
    </div>
  );
};

export default DeleteProduct;
