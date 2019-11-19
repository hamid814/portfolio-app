import React, { useContext } from 'react';

import Context from '../../context/Context.js';

import Home from './Home';
import About from './About';
import Works from './Works';
import Contact from './Contact';

const Pages = () => {
  const { activePage, pagesStatus } = useContext(Context);

  return (
    <div className={`pages ${pagesStatus}`}>
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