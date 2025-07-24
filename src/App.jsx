import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import './App.css';
import AboutKabuki from './AboutKabuki';
import GalleryCarousel from './GalleryCarousel';
import MessagesFromFriends from './MessagesFromFriends';
import BirthdayProgram from './BirthdayProgram';
import LocationRSVP from './LocationRSVP';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutKabuki />
      <GalleryCarousel />
      <MessagesFromFriends />
      <BirthdayProgram />
      <LocationRSVP />
    </>
  );
}

export default App;
