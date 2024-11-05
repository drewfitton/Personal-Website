import './App.css';
import Navbar from './Navbar'
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import About from './About';
import Projects from './Projects';

function App() {
  return (
    <div class="container">
      <div>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/about" />} /> 
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            {/* <Route path="/resume" element={<Resume />} /> */}
            {/* <Route path="/connect" element={<Connect />} /> */}
          </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
