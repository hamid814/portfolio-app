import React, { useContext } from 'react';

import Context from '../../context/Context.js';

import './styles/pages.scss';

import Home from './Home';
import About from './About';
import Works from './Works';
import Contact from './Contact';


const Pages = () => {
  const { pagesStatus, pagesPos, pagesTransiting, pagesTraversing } = useContext(Context);

  return (
    <div
      className={`pages
                  ${pagesStatus}
                  ${pagesPos}
                  ${pagesTransiting.status && `transiting ${pagesTransiting.direction}`}
                  ${pagesTraversing.status && 'traversing'}`}>
        <Home />
        <About />
        <Works />
        <Contact />
    </div>
  )
}

export default Pages