import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const getData = () => {
    axios.get("http://localhost:3000/products")
      .then((res) => {
        setProducts(res.data);
        setFilteredProducts(res.data); 
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handlePriceChange = (range) => {
    const updatedRanges = selectedPriceRanges.includes(range)
      ? selectedPriceRanges.filter(r => r !== range) 
      : [...selectedPriceRanges, range]; 

    setSelectedPriceRanges(updatedRanges);
    filterProducts(updatedRanges, selectedCategories);
  };

  const handleCategoryChange = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category) 
      : [...selectedCategories, category]; 
    setSelectedCategories(updatedCategories);
    filterProducts(selectedPriceRanges, updatedCategories);
  };

  const filterProducts = (priceRanges, categories) => {
    let filtered = products;

    if (priceRanges.length > 0) {
      filtered = filtered.filter(product => {
        return priceRanges.some(r => {
          const [min, max] = r.split('-').map(Number);
          return product.price >= min && product.price <= max;
        });
      });
    }

  
    if (categories.length > 0) {
      filtered = filtered.filter(product => categories.includes(product.category));
    }

   
    filtered.sort((a, b) => a.price - b.price);
    setFilteredProducts(filtered);
  };

  return (
   <div>
    <div>
    <Navbar />
     <section className='productpage-product d-flex row container'>

<aside className='page-p'>
  <p>Home / Audio</p>
</aside>
<h5 className='productpage-h1'>Audio</h5>
<div className='d-flex'>
  <div className='productpage-btn'>
    <button>Technology (37)</button>
    <button>Home (5)</button>
    <button>Accessories (4)</button>
    <button>Sleep (2)</button>
    <button>Entertainment (1)</button>
    <button>Fitness (1)</button>
    <button>Outdoor (1)</button>
    <button>Wellness (1)</button>
  </div>
</div>
<section className='product-items d-flex row'>
  <aside className='product-price col-3'>
    <hr />
    <p style={{ marginLeft: "30px" }}>Price</p>
    {['50-100', '100-150', '150-200', '200-250', '250-300'].map((range) => (
      <span className='price-span' key={range}>
        <input 
          type="checkbox" 
          onChange={() => handlePriceChange(range)} 
          checked={selectedPriceRanges.includes(range)} 
        /> 
        ${range.replace('-', ' - $')}
      </span>
    ))}
    <hr />
    <p style={{ marginLeft: "30px" }}>Categories</p>
    {['Technology', 'Home', 'Accessories', 'Sleep', 'Entertainment', 'Fitness', 'Outdoor', 'Wellness'].map((category, index) => (
      <span className='price-span' key={`category-${index}`}>
        <input 
          type="checkbox" 
          onChange={() => handleCategoryChange(category)} 
          checked={selectedCategories.includes(category)} 
        /> 
        {category}
      </span>
    ))}
    <hr />
  </aside>
  <article className='col-9 container'>
    <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", width: "100%" }}>
      {filteredProducts.map((el) => (
        <article key={el.id} className='product-information' style={{ textDecoration: "none" }}>
          <Link to={`/description/${el.id}`}>
            <img src={el.image} alt={el.title} />
          </Link>

            <h3  style={{textDecoration:"none"}} className='productpage-h3 text-dark'>{el.title}</h3>
            <h3 className='productpage-h3'>${el.price}</h3> 
        </article>
      ))}
    </section>
  </article>
</section>
</section>
   </div>
   </div>
   
  );
};

export default ProductPage;