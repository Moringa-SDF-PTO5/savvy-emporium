/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import './Home.css'

function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
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

    



  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} />
          <h6>{product.title}</h6>
            <p className="price">${product.price}</p>
            <p className="category">{product.category}</p>
        </div>
      ))}
    </div>
  );
}



export default Home;
