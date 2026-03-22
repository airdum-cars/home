import React from 'react';
import './ProductCard.css';

const assetModules = import.meta.glob('../assets/*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' });

const resolveImage = (imagePath) => {
  if (!imagePath) return '';
  if (imagePath.startsWith('http')) return imagePath;

  // Extract just the filename (e.g. "foam_cleaner.png") from whatever path string the user provided
  const filename = imagePath.split('/').pop();

  // Find the exact mapped file path from Vite's glob import
  const matchKey = Object.keys(assetModules).find(key => key.endsWith(`/${filename}`));

  return matchKey ? assetModules[matchKey] : imagePath; // Fallback to provided path if not found
};

const ProductCard = ({ product, onClick }) => {
  const handleBuyNow = (e) => {
    e.stopPropagation();
    const message = `Hello, I'm interested in buying: ${product.title} (₹${product.price.toFixed(2)})`;
    window.open(`https://wa.me/7011209823?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="product-card glass" onClick={onClick}>
      <div className="card-image-wrapper">
        <img src={resolveImage(product.image)} alt={product.title} className="card-image" loading="lazy" />
        <span className="category-badge">{product.category}</span>
      </div>
      <div className="card-content">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-description">{product.description}</p>
        <div className="card-footer">
          <span className="card-price">₹{product.price.toFixed(2)}</span>
          <button className="btn btn-primary add-btn" onClick={handleBuyNow}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
