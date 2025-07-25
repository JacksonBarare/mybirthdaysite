import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './GalleryCarousel.css';
import imageList from './components/imageData';

export default function GalleryCarousel({ initialIndex = 0, images = imageList }) {
  const sectionRef = useRef(null);
  const swiperRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [modalImage, setModalImage] = useState(null);

  // Intersection Observer animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleImageClick = (src) => {
    setModalImage(src);
    swiperRef.current?.swiper?.autoplay?.stop();
  };

  const handleCloseModal = () => {
    setModalImage(null);
    swiperRef.current?.swiper?.autoplay?.start();
  };

  return (
    <section
      className={`carousel-section ${isVisible ? 'fade-in-section' : ''}`}
      ref={sectionRef}
    >
      <h2 className="carousel-title">Memories Worth Sharing</h2>

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 4000 }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1.5}
        initialSlide={activeIndex}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3 },
        }}
        className="gallery-swiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Memory ${index + 1}`}
              className="carousel-image"
              onClick={() => handleImageClick(src)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {modalImage && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Zoomed memory" className="modal-image" />
          </div>
        </div>
      )}
    </section>
  );
}
