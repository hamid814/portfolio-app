import React, { useState, useContext } from 'react';

import Context from '../../context/Context.js';

import './styles/pages.css';

import Home from './Home';
import About from './About';
import Works from './Works';
import Contact from './Contact';

const Pages = () => {
  const { pagesStatus, pagesPos } = useContext(Context);

  const [mosX, setMosX] = useState(0)

  const onMouseMove = (e) => {
    const x = Math.floor(e.clientX / window.innerWidth * 70)

    setMosX(x)
  }

  return (
    <div
      onMouseMove={onMouseMove}
      className={`pages ${pagesStatus} ${pagesPos}`}>
        <Home
          mosX={mosX} />
        <About
          mosX={mosX} />
        <Works
          mosX={mosX} />
        <Contact
          mosX={mosX} />
    </div>
  )
}

export default Pages