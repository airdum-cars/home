import React, { useEffect } from 'react';
import './ProductModal.css';

// Reusing the asset resolver from ProductCard (or we can duplicate just the necessary part)
const assetModules = import.meta.glob('../assets/*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' });

const resolveImage = (imagePath) => {
  if (!imagePath) return '';
  if (imagePath.startsWith('http')) return imagePath;

  const filename = imagePath.split('/').pop();
  const matchKey = Object.keys(assetModules).find(key => key.endsWith(`/${filename}`));
  return matchKey ? assetModules[matchKey] : imagePath;
};

const ProductModal = ({ product, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  // Prevent clicks inside the modal content from closing the modal
  const handleContentClick = (e) => e.stopPropagation();

  const handleAddToCart = () => {
    const message = `Hello, I'm interested in buying: ${product?.title} (₹${product?.price?.toFixed(2)})`;
    window.open(`https://wa.me/7011209823?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">&times;</button>

      <button className="nav-btn prev-btn" onClick={(e) => { e.stopPropagation(); onPrev(); }} aria-label="Previous product">
        &#10094;
      </button>

      <div className="modal-content glass" onClick={handleContentClick}>
        <div className="modal-image-container">
          <img src={resolveImage(product.image)} alt={product.title} className="modal-image" />
          <span className="modal-category-badge">{product.category}</span>
        </div>
        <div className="modal-details">
          <h2 className="modal-title">{product.title}</h2>
          <div className="modal-price-tag">₹{product.price.toFixed(2)}</div>
          <div className="modal-divider"></div>
          <p className="modal-description">{product.description}</p>
          <div className="modal-actions">
            <button className="btn btn-primary modal-buy-btn" onClick={handleAddToCart}>Add to Cart</button>
            <button className="btn btn-outline" onClick={onClose}>Back to Catalogue</button>
          </div>
        </div>
      </div>

      <button className="nav-btn next-btn" onClick={(e) => { e.stopPropagation(); onNext(); }} aria-label="Next product">
        &#10095;
      </button>
    </div>
  );
};

export default ProductModal;
