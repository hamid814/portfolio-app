import React, { useContext } from 'react';

import Context from '../../context/Context.js';

import './styles/works.scss';

const Works = () => {
  const { setActivePage,
          activePage,
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
    <div className={`page-container ${activePage === 'home' && aPageIsActive && 'active'}`} id='works'>
      <div className={`side-layer ${aPageIsActive ? 'not' : 'is'}`}>

      </div>
      <div className={`back-layer ${aPageIsActive ? 'not' : 'is'}`}>
        
      </div>
      <div className={`layer ${aPageIsActive ? 'not' : 'is'} ${pagesStatus === 'zoom-in' ? 'zoom-in-vertical' : 'zoom-out-vertical'}`} onClick={onClick}>
        <h1>  
          WORKS
          <span className='desc'>
            <div className='text'>
              click
            </div>
          </span>
        </h1>
      </div>
      <div className={`page ${activePage === 'works' ? 'on' : 'off'}`}>
        <div className='work works-one'>
          <div className="background"></div>
          trello
        </div>
        <div className='work work-two'>
          <div className="background"></div>
          formi
        </div>
        <div className='work work-three'>
          <div className="background"></div>
          diprella
        </div>
        <div className='work work-four'>
          <div className="background"></div>
          todo
        </div>
        <div className='work github'>
          <div className="background"></div>
          github
        </div>
        <div className='go-to-contact-container' onClick={goToContact}>
          <div className='text'>
            Contact Me
          </div>
        </div>
        <div className='go-to-about-container' onClick={goToAbout}>
          About Me
        </div>
      </div>
    </div>
  )
}

export default Works
