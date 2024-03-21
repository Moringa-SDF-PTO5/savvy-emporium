import React,{useEffect,useState} from "react";

function Home (){
    const [products, setProducts] = useState([]);
    useEffect(() => {
        useEffect(() => {
            const fetchData = async () => {
              try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                  throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
                setFilteredProducts(data);
              } catch (error) {
                console.error('Error fetching products:', error);
              }
            };
    return (
        <div> </div>
    )
}
}
export default Home;