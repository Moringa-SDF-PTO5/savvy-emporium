// DeleteProduct.jsx

import React, { useState } from 'react';
import FetchComponent from './FetchComponent'; // Import the FetchComponent

const DeleteProduct = () => {
  const [productIdToDelete, setProductIdToDelete] = useState('');
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [deleteError, setDeleteError] = useState('');

  const handleDelete = async () => {
    if (!productIdToDelete) {
      setDeleteError('Please provide a product ID to delete.');
      return;
    }

    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productIdToDelete}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Failed to delete product');
      }

      setDeleteSuccess(true);
      setDeleteError('');
    } catch (error) {
      setDeleteError(error.message);
      setDeleteSuccess(false);
    }
  };

  const handleProductIdChange = (event) => {
    setProductIdToDelete(event.target.value);
  };

  return (
    <div>
      <h2>Delete Product</h2>
      <input
        type="text"
        placeholder="Enter Product ID"
        value={productIdToDelete}
        onChange={handleProductIdChange}
      />
      <button onClick={handleDelete}>Delete Product</button>

      {deleteSuccess && <div>Product deleted successfully.</div>}
      {deleteError && <div className="error">{deleteError}</div>}

      <FetchComponent />
    </div>
  );
};

export default DeleteProduct;
