import { useState, useEffect } from 'react';

const AdminProductsForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: '',
  });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error.message);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Failed to add product');
      }
      setFormData({
        title: '',
        price: '',
        description: '',
        category: '',
        image: '',
      });
      fetchProducts();
    } catch (error) {
      console.error('Error adding product:', error.message);
    }
  };

  const handleDelete = async (productId) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete product');
      }
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error.message);
    }
  };

  return (
    <div>
      <h2>Add/Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type='text'
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminProductsForm;