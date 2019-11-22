import React, { useContext } from 'react';

import Context from '../../context/Context.js';

import './styles/about.css';

const About = () => {
  const { setActivePage, setPagesStatus, aPageIsActive, setModal } = useContext(Context)

  const onClick = () => {
    if(!aPageIsActive) {
      setActivePage('about')
      setPagesStatus('zoom-in')
    }
  }

  const headerClick = () => {
    setModal('on', {name: 'header', id: 1})
  }

  return (
    <div className='page-container' id='about'>
      <div className={`layer ${aPageIsActive ? 'not' : 'is'}`} onClick={onClick}>
        <h1>
          ABOUT
        </h1>
      </div>
      <div className='page'>
        <div className='header' onClick={headerClick}>
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