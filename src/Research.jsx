import './App.css';
import Footer from './components/Footer';
import React, { useEffect } from 'react';
function App() {
  useEffect(() => {
    document.title = 'Research'; // Set the page title
  }, []);
  return (
    <>

    <Footer />
    </>
  );
}

export default App;
