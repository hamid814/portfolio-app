import React, { useContext } from 'react';

import Context from '../../context/Context.js';

import './styles/pages.css';

import Home from './Home';
import About from './About';
import Works from './Works';
import Contact from './Contact';

const Pages = () => {
  const { pagesStatus, pagesPos } = useContext(Context);

  return (
    <div
      className={`pages ${pagesStatus} ${pagesPos}`}>
        <Home />
        <About />
        <Works />
        <Contact />
    </div>
  )
}

export default Pages