import React from 'react';
import './App.css';
import Header from './components/Header';
import ProjectCarousel from './components/ProjectCarousel';
import About from './components/About';

function Hello() {
  return (
    <div className='background'>
      <Header />
      <ProjectCarousel />
      <About />
    </div>
  );
}

export default Hello;