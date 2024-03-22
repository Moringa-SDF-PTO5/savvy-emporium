import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { logout } from './auth'; // Import logout function

const UpdateProductForm = () => {
  const [product, setProduct] = useState({
    id: '',
    title: '',
    price: '',
    description: '',
    category: '',
    image: ''
  });

  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`https://fakestoreapi.com/products/${productId}`, product);
      alert('Product updated successfully!');
    } catch (error) {
      if (error.response.status === 401) {
        logout(); // Logout user if unauthorized
      }
      console.error('Error updating product:', error);
      alert('Failed to update product. Please try again.');
    }
  };

  return (
    <div>
      <h2>Update Product</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default UpdateProductForm;
