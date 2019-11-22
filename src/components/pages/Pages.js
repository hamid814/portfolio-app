import React, { useState, useContext } from 'react';

import Context from '../../context/Context.js';

import './styles/pages.css';

import Home from './Home';
import About from './About';
import Works from './Works';
import Contact from './Contact';

const Pages = () => {
  const { pagesStatus, pagesPos } = useContext(Context);

  const [hoveredPage, setHoveredPage] = useState(null)

  const onMouseEnter = () => {
    setHoveredPage('pages')
  }

  const onMouseLeave = () => {
    setHoveredPage(null)
  }

  return (
    <div
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      className={`pages ${pagesStatus} ${pagesPos} ${hoveredPage === 'pages' && 'is-hover'}`}>
        <Home
          setHover={setHoveredPage}
          hovered={hoveredPage} />
        <About
          setHover={setHoveredPage}
          hovered={hoveredPage} />
        <Works
          setHover={setHoveredPage}
          hovered={hoveredPage} />
        <Contact
          setHover={setHoveredPage}
          hovered={hoveredPage} />
    </div>
  )
}

export default Pages