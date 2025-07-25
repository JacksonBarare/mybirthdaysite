import React, { useState } from 'react';
import GalleryCarousel from './GalleryCarousel';
import './Gallery.css';
import imageList from './components/imageData';

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Photo Gallery</h2>
      <div className="gallery-grid">
        {imageList.map((src, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => openModal(index)}
            tabIndex={0}
            role="button"
            aria-label={`Open image ${index + 1}`}
          >
            <img src={src} alt={`Gallery ${index + 1}`} className="gallery-image" />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close gallery">&times;</button>
            <GalleryCarousel initialIndex={currentIndex} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
