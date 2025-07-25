import React, { useState } from 'react';
import './Gallery.css';
import imageList from './components/imageData';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (src) => setSelectedImage(src);
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Photo Gallery</h2>

      <div className="gallery-grid">
        {imageList.map((src, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => openModal(src)}
            tabIndex={0}
            role="button"
            aria-label={`View image ${index + 1}`}
          >
            <img src={src} alt={`Gallery ${index + 1}`} className="gallery-image" />
          </div>
        ))}
      </div>

      <div className="back-home-wrapper">
        <Link to="/" className="back-home-button">← Return to Home</Link>
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <img src={selectedImage} alt="Full size" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
