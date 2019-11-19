import React, { useState, useEffect, useContext } from 'react';

import Context from '../../context/Context.js';

import Home from './Home';
import About from './About';
import Works from './Works';
import Contact from './Contact';

const Pages = () => {
  const { activePage, pagesStatus } = useContext(Context);

  const [pos, setPos] = useState('top-left')

  useEffect(() => {
    activePage === 'home' && setPos('top-left')
    activePage === 'about' && setPos('top-right')
    activePage === 'works' && setPos('bottom-right')
    activePage === 'contact' && setPos('bottom-left')
    // eslint-disable-next-line
  }, [activePage])

  return (
    <div className={`pages ${pagesStatus} ${pagesStatus === 'zoom-in' && pos}`}>
      <Home />
      <About />
      <Works />
      <Contact />
      {/* <div id='back-frame'> */}
      
      {/* </div> */}
      {/* <div className='current-page'>
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
      </div> */}
    </div>
  )
}

export default Pages