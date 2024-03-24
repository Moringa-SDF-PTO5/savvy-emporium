import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../images/savvy_a.png';
import './Home.css';

function Home({ handleAddToCart, cartItems, emptyCart }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [inCart, setInCart] = useState({});

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.map(product => ({ ...product, inCart: false }))); 
        setFilteredProducts(data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const addToCart = (product) => {
    handleAddToCart(product);
    console.log(`Product added to cart:`, product);
    setInCart(prevState => ({ ...prevState, [product.id]: true })); 
  };

  const filterProductsByCategory = category => {
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      fetch(`https://fakestoreapi.com/products/category/${category.toLowerCase()}`)
        .then(res => res.json())
        .then(data => setFilteredProducts(data))
        .catch(error => console.error(`Error fetching ${category} products:`, error));
    }
    setSelectedCategory(category);
  };

  const handlePayment = (product) => {
    // Navigate to the payment page
    // This code depends on how you handle navigation in your application
  };
  

  return (
    <div className="home-page">
       <img src={image1} className='main-pic' alt='Main Image' />
      <div className="product-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h6>{product.title}</h6>
            <p className="price">${product.price}</p>
            <p className="category">{product.category}</p>
            <button onClick={() => addToCart(product)} disabled={inCart[product.id]}>Add to Cart</button>
            <Link to={{ pathname: '/payment', state: { product } }}>Proceed to Payment</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
