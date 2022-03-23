import React from 'react';
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';

function Hello() {
  return (
    <div className='background'>
      <Header />
      <About />
      <Projects />
    </div>
  );
}

export default Hello;