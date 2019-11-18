import React, { useContext } from 'react';

import Context from '../../context/Context.js';

import Home from './Home';
import About from './About';
import Works from './Works';
import Contact from './Contact';

const Pages = () => {
  const { activePage } = useContext(Context);

  return (
    <>
      <div id='back-frame'>
      
      </div>
      <div className='upper-page'>
      
      </div>
      <div className='current-page'>
        {
          activePage === 'home' &&
            <Home />
        }
        {
          activePage === 'about' &&
            <About />
        }
        {
          activePage === 'works' &&
            <Works />
        }
        {
          activePage === 'contact' &&
            <Contact />
        }
      </div>
      <div className='lower-page'>
      </div>
    </>
  )
}

export default Pages