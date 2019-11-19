import React, { useContext } from 'react';

import Context from '../../context/Context.js';

const About = () => {
  const { setActivePage, setPagesStatus, aPageIsActive } = useContext(Context)

  const onClick = () => {
    if(!aPageIsActive) {
      setActivePage('about')
      setPagesStatus('zoom-in')
    }
  }

  return (
    <div className='page-container' id='about'>
      <div className={`layer ${aPageIsActive ? 'not' : 'is'}`} onClick={onClick}>
        ABOUT
      </div>
      <div className='page'>
        <div className='header'>
          ABOUT ME
        </div>
        <div className='content'>
          <div className='item'>
            item
          </div>
          <div className='item'>
            item
          </div>
          <div className='item'>
            item
          </div>
        </div>
      </div>
    </div>
  )
}

export default About