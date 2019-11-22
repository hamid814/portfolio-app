import React, { useState, useContext } from 'react';

import Context from '../../context/Context.js';

import './styles/pages.css';

import Home from './Home';
import About from './About';
import Works from './Works';
import Contact from './Contact';

const Pages = () => {
  const { pagesStatus, pagesPos } = useContext(Context);

  const [mosPos, setMosPos] = useState({
    x: 0,
    y: 0
  })

  const onMouseMove = (e) => {
    const x = Math.floor(e.clientX / window.innerWidth * 70)
    // const y = e.clientY / window.innerHeight * 0.3
    const y = 0

    setMosPos({
      x,
      y
    })
  }

  return (
    <div
      onMouseMove={onMouseMove}
      className={`pages ${pagesStatus} ${pagesPos}`}>
        <Home
          mosPos={mosPos} />
        <About
          mosPos={mosPos} />
        <Works
          mosPos={mosPos} />
        <Contact
          mosPos={mosPos} />
    </div>
  )
}

export default Pages