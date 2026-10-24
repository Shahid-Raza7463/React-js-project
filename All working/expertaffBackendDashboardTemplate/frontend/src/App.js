import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Web/Pages/Home/Home';
import About from './components/Web/Pages/About/About';
import Dashboard from './components/Web/Pages/About/Dashboard';
import Contact from './components/Web/Pages/Contact/Contact';
import Footer from './components/Web/Pages/Common/Footer';
import NavBar from './components/Web/Pages/Common/NavBar';

import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
