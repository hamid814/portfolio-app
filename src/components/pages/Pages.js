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
    </>
  )
}

export default Pages
