import React, { useContext } from 'react';

import Context from '../../context/Context.js';

const About = () => {
  const { setActivePage, setPagesStatus } = useContext(Context)

  const onClick = () => {
    setActivePage('about')
    setPagesStatus('zoom-in')
  }

  return (
    <div className='page-container' id='about'>
      <div className='layer' onClick={onClick}>
        ABOUT
      </div>
      <div className='page'>
        AB
      </div>
    </div>
  )
}

export default About