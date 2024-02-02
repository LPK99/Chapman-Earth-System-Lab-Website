import './App.css';
import React, { useEffect } from 'react';
import Footer from './components/Footer';
import MemberSection from './components/MemberSection';
function App() {
  useEffect(() => {
    document.title = 'Members'; // Set the page title
  }, []);
  return (
    <>
    <MemberSection />
    <Footer />
    </>
  );
}

export default App;
