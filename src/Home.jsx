import './App.css';
import ImageCarousel from './components/ImageCarousel';
import DescriptionSection from './components/DescriptionSection';
import Footer from './components/Footer';
import Contact from './components/Contact'
import NewsSection  from './components/News';
import React, { useEffect } from 'react';
function App() {
  useEffect(() => {
    document.title = 'Earth System and Data Solution Lab'; // Set the page title
  }, []);
  
  return (
    <>
    <ImageCarousel />
    <DescriptionSection />
    <NewsSection />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
