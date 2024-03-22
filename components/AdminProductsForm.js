import React, { useState } from 'react';

const AdminProductsForm = () => {
  const [formData, setFormData] = useState({
    productName: '',
    price: '',
    description: '',
    quantity: '',
    category: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('your_api_endpoint_here', formData);
    console.log('Form submitted with data:', formData);

    setFormData({
      productName: '',
      price: '',
      description: '',
      quantity: '',
      category: '',
      imageUrl: '',
    });
  };

  return (
    <><div>
          <h2>Add/Edit Product</h2>
          <form onSubmit={handleSubmit}>
              <div>
                  <label htmlFor="productName">Product Name:</label>
                  <input
                      type="text"
                      id="productName"
                      name="productName"
                      value={formData.productName}
                      onChange={handleChange}
                      required />
              </div>
              <div>
                  <label htmlFor="price">Price:</label>
                  <input
                      type="number"
                      id="price"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      required />
              </div>
              <div>
                  <label htmlFor="description">Description:</label>
                  <input
                      type='text'
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required />
              </div>
              <label htmlFor="quantity">Description:</label>
                  <input
                  type='text'
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  required />
              </div>
              <div>
              <label htmlFor="category">Product Name:</label>
                  <input
                  type="text"
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required />
              </div>
              <div>
              <label htmlFor="imageurl">Product Name:</label>
                  <input
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  required
                
                />
              <button type="submit">Submit</button>
          </form></>
    )/div>
  );
};

export default AdminProductsForm;

