import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolledUp, setScrolledUp] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const onScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setScrolledUp(scrollTop < lastScrollTop);
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Smooth scroll on anchor links
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <nav className={`navbar ${scrolledUp ? 'navbar-bg' : 'navbar-transparent'}`}>
      <div className="navbar-logo">🎉 Kabuki's Day</div>

      <div className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
        ☰
      </div>

      <ul className={`navbar-links ${mobileOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setMobileOpen(false)}>Home</Link></li>
        <li><a href="#about" onClick={() => setMobileOpen(false)}>About</a></li>
        <li><Link to="/gallery" onClick={() => setMobileOpen(false)}>Gallery</Link></li>
        <li><a href="#program" onClick={() => setMobileOpen(false)}>Program</a></li>
        <li><a href="#messages" onClick={() => setMobileOpen(false)}>Messages</a></li>
        <li><a href="#rsvp" onClick={() => setMobileOpen(false)}>RSVP</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
