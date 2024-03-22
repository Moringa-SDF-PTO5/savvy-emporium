import React, { useEffect, useState } from "react";
import './Home.css'

function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data); // Initialize filtered products with all products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData(); 
  }, []); 

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

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (																									
    <div className="home-page">																									
      <h4>Featured Products</h4>		
      <div className="cart">
        <h4>Shopping Cart</h4>
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.title} - ${item.price}
            </li>
          ))}
        </ul>
      </div>																								
      <p>Selected Category: {selectedCategory}</p>																									
      <div className="category-buttons">																									
        <button onClick={() => filterProductsByCategory('All')} className={selectedCategory === 'All' ? 'selected' : ''}>All</button>																									
        <button onClick={() => filterProductsByCategory('Electronics')} className={selectedCategory === 'Electronics' ? 'selected' : ''}>Electronics</button>																									
        <button onClick={() => filterProductsByCategory('Jewelery')} className={selectedCategory === 'Jewelery' ? 'selected' : ''}>Jewelery</button>																									
        <button onClick={() => filterProductsByCategory("Men's Clothing")} className={selectedCategory === "Men's Clothing" ? 'selected' : ''}>Men's Clothing</button>																									
        <button onClick={() => filterProductsByCategory("Women's clothing")} className={selectedCategory === "Women's clothing" ? 'selected' : ''}>Women's Clothing</button>																									
      </div>																									
      <div className="product-grid">																									
        {filteredProducts.map(product => (																									
          <div key={product.id} className="product-card">																									
            <img src={product.image} alt={product.title} />																									
            <h6>{product.title}</h6>																									
            <p className="price">${product.price}</p>																									
            <p className="category">{product.category}</p>	
            <button onClick={() => addToCart(product)}>Add to Cart</button>																								
          </div>																									
        ))}																									
      </div>
    																								
    </div>																									
  );																									
}																									
                                                      
export default Home;
