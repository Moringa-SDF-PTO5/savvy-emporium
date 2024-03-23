
import React, { useEffect, useState } from 'react';


function Category() {
const [products, setProducts] = useState([]);
const [filteredProducts, setFilteredProducts] = useState([]);
const [selectedCategory, setSelectedCategory] = useState('All');

useEffect(() => {
fetch('https://fakestoreapi.com/products')
.then(res => res.json())
.then(data => {
setProducts(data);
setFilteredProducts(data);
})
.catch(error => console.error('Error fetching products:', error));
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

const deleteProduct = (productId) => {
fetch(`https://fakestoreapi.com/products/${productId}`, {
method: 'DELETE',
})
.then(() => {
const updatedProducts = filteredProducts.filter(product => product.id !== productId);
setFilteredProducts(updatedProducts);
setProducts(updatedProducts);
})
.catch(error => console.error('Error deleting product:', error));
};
return (
<div className="home-page">
<h4>Featured Products</h4>
<h4>Category: {selectedCategory}</h4>
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
<button className='btn btn-primary btn-sm' onClick={() => deleteProduct(product.id)}>Delete</button>
</div>
))}
</div>
</div>
);
}

export default Category;