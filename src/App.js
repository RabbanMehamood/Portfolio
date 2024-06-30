import './App.css';
import React from 'react';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from  './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="app">
    <Navbar />
    <div className="content-container">
      <AboutMe />
      <Contact />
    </div>
  </div>
  );
}

export default App;
