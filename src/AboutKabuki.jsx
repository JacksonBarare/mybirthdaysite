import React, { useEffect, useState } from 'react';
import './AboutKabuki.css';

const imageList = [
  '/images/img1.jpg',
  '/images/img2.jpg',
  '/images/img3.jpg',
  '/images/img4.jpg',
  '/images/img5.jpg',
];

const AboutKabuki = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % imageList.length);
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="about-section">
        <div className="about-image-container">
        <img
          src={imageList[currentImage]}
          alt={`Kabuki ${currentImage + 1}`}
          className="about-image fade-in"
          key={imageList[currentImage]} // forces re-animation
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
        <button className="about-button">View Photos</button>
      </div>
      
    </section>
  );
};

export default AboutKabuki;
