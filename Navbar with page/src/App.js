import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/navbar/NavBar';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <Router>
      <div>
        <NavBar setCurrentPage={setCurrentPage} />
        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
