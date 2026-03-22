import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import { products } from '../data/products';
import './ProductGrid.css';

const ProductGrid = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };
  
  const closeModal = () => {
    setSelectedIndex(null);
    document.body.style.overflow = 'unset';
  };
  
  const nextProduct = () => setSelectedIndex((prev) => (prev + 1) % products.length);
  const prevProduct = () => setSelectedIndex((prev) => (prev - 1 + products.length) % products.length);

  return (
    <section className="product-section" id="catalogue">
      <div className="container">
        <div className="section-header">
          <h2>Featured Accessories</h2>
          <p>Upgrade your vehicle with meticulously crafted components.</p>
        </div>
        <div className="grid-container">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} onClick={() => openModal(index)} />
          ))}
        </div>
      </div>
      
      {selectedIndex !== null && (
        <ProductModal 
          product={products[selectedIndex]} 
          onClose={closeModal} 
          onNext={nextProduct} 
          onPrev={prevProduct} 
        />
      )}
    </section>
  );
};

export default ProductGrid;
