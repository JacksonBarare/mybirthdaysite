import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolledUp, setScrolledUp] = useState(false);

  useEffect(() => {
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const onScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop < lastScrollTop) {
        // Scrolling up
        setScrolledUp(true);
      } else if (scrollTop > lastScrollTop) {
        // Scrolling down
        setScrolledUp(false);
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolledUp ? 'navbar-bg' : 'navbar-transparent'}`}>
      <div className="navbar-logo">YOUR LOGO</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#photo">Photo</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
      <div className="navbar-search">
        <input type="text" placeholder="Search" />
        <button aria-label="Search">&#128269;</button>
      </div>
    </nav>
  );
};

export default Navbar;
