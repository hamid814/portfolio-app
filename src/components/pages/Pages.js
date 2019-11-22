import React, { useState, useContext } from 'react';

import Context from '../../context/Context.js';

import './styles/pages.css';

import Home from './Home';
import About from './About';
import Works from './Works';
import Contact from './Contact';

const Pages = () => {
  const { pagesStatus, pagesPos } = useContext(Context);

  const [hoveredPage, setHoveredPage] = useState(null);
  const [mosPos, setMosPos] = useState({
    X: 0,
    Y: 0
  })

  const onMouseEnter = () => {
    setHoveredPage('pages')
  }

  const onMouseLeave = () => {
    setHoveredPage(null)
  }

  const onMouseMove = (e) => {
    const x = e.clientX / window.innerWidth
    const y = e.clientY / window.innerHeight

    setMosPos({
      X: x,
      Y: y
    })
  }

  return (
    <div
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      className={`pages ${pagesStatus} ${pagesPos} ${hoveredPage === 'pages' && 'is-hover'}`}>
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