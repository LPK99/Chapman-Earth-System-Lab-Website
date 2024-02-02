import './App.css';
import ImageCarousel from './components/ImageCarousel';
import DescriptionSection from './components/DescriptionSection';
import Footer from './components/Footer';
import Contact from './components/Contact'
import React, { useEffect } from 'react';
function App() {
  useEffect(() => {
    document.title = 'Earth System and Data Solution Lab'; // Set the page title
  }, []);
  
  return (
    <>
    <ImageCarousel />
    <DescriptionSection />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
