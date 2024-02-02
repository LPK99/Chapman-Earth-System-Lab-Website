import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './Home'; // Import your Home component
import Members from './Members'; // Import your Members component
import Research from './Research'; // Import your Research component

function App() {
  return (
  <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/research" element={<Research />} />
      </Routes>
  </>
  );
}

export default App;
