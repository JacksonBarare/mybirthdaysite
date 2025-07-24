import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './GalleryCarousel.css';

const imageList = [
  '/images/img1.jpg',
  '/images/img2.jpg',
  '/images/img3.jpg',
  '/images/img4.jpg',
  '/images/img5.jpg',
];

export default function GalleryCarousel() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section
      className={`carousel-section ${isVisible ? 'fade-in-section' : ''}`}
      ref={sectionRef}
    >
      <h2 className="carousel-title">Memories Worth Sharing</h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 4000 }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1.5}
        breakpoints={{
          768: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="gallery-swiper"
      >
        {imageList.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Memory ${index + 1}`}
              className="carousel-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
