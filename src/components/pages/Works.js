import React, { useContext } from 'react';

import Context from '../../context/Context.js';

import './styles/works.css';

const Works = () => {
  const { setActivePage,
          pagesStatus,
          setPagesStatus,
          aPageIsActive,
          setPagesTransiting,
          traversPages,
          pagesTransiting } = useContext(Context)

  const onClick = () => {
    if(!aPageIsActive && !pagesTransiting.status) {
      setActivePage('works')
      setPagesStatus('zoom-in')
      setPagesTransiting(true, 'go')
    }
  }

  const goToContact = () => {
    traversPages('contact')
  }

  const goToAbout = () => {
    traversPages('about')
  }

  return (
    <div className='page-container' id='works'>
      <div className={`side-layer ${aPageIsActive ? 'not' : 'is'}`}>

      </div>
      <div className={`back-layer ${aPageIsActive ? 'not' : 'is'}`}>
        
      </div>
      <div className={`layer ${aPageIsActive ? 'not' : 'is'} ${pagesStatus === 'zoom-in' ? 'zoom-in-vertical' : 'zoom-out-vertical'}`} onClick={onClick}>
        <h1>  
          WORKS
        </h1>
      </div>
      <div className='page'>
        Works
        <div className='go-to-contact-container' onClick={goToContact}>
          Contact Me
        </div>
        <div className='go-to-about-container' onClick={goToAbout}>
          About Me
        </div>
      </div>
    </div>
  )
}

export default Works
