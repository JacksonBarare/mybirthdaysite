import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutKabuki.css';

const imageList = [
  '/images/about1.jpeg',
  '/images/about2.jpeg',
  '/images/about3.jpeg',
  '/images/about4.jpeg',
  '/images/heropr.jpeg',
];

const AboutKabuki = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  // Auto image switch every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % imageList.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Observe when section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleViewPhotos = () => {
    navigate('/gallery');
  };

  return (
    <section
      ref={sectionRef}
      className={`about-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="about-image-container">
        <img
          src={imageList[currentImage]}
          alt={`Kabuki ${currentImage + 1}`}
          className="about-image fade-in"
          key={imageList[currentImage]} // re-triggers animation
        />
      </div>
      <div className="about-text">
        <h2>About Kabuki</h2>
        <p>
          Kabuki is a bright, beautiful soul who lights up every room she enters.
          She's full of love, laughter, and creativity. This birthday is not just another year —
          it's a celebration of all the joy she brings to everyone around her.
        </p>
        <p>
          From her favorite hobbies to unforgettable memories, there's so much to celebrate about Kabuki.
        </p>
        <button className="about-button" onClick={handleViewPhotos}>View Photos</button>
      </div>
    </section>
  );
};

export default AboutKabuki;
