import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutKabuki from './AboutKabuki';
import GalleryCarousel from './GalleryCarousel';
import MessagesFromFriends from './MessagesFromFriends';
import BirthdayProgram from './BirthdayProgram';
import LocationRSVP from './LocationRSVP';
import Footer from './Footer';
import Gallery from './Gallery';
import './App.css';

function Home() {
  return (
    <>
      <HeroSection />
      <AboutKabuki />
      <GalleryCarousel />
      <MessagesFromFriends />
      <BirthdayProgram />
      <LocationRSVP />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
