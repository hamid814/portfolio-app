import React, { useState, useContext } from 'react';

import Context from '../../context/Context.js';

import './styles/about.scss';

const About = () => {
  const { setActivePage,
          pagesStatus,
          activePage,
          setPagesStatus,
          aPageIsActive,
          setModal,
          setPagesTransiting,
          traversPages,
          pagesTraversing,
          pagesTransiting } = useContext(Context)

  const [goingToWorks, setgoingToWorks] = useState(false)

  const onClick = () => {
    if(!aPageIsActive && !pagesTransiting.status) {
      setActivePage('about')
      setPagesStatus('zoom-in')
      setPagesTransiting(true, 'go')
    }
  }

  const onMouseEnterWorks = () => {
    setgoingToWorks(true)
  }

  const onMouseLeaveWorks = () => {
    setgoingToWorks(false)

  }

  const headerClick = () => {
    setModal('on', {name: 'header', id: 1})
  }

  const goToWorks = () => {
    traversPages('works')
  }

  const goToHome = () => {
    traversPages('home')
  }

  const goToContact = () => {
    traversPages('contact')
  }

  return (
    <div className={`page-container ${activePage === 'home' && aPageIsActive && 'active'}`} id='about'>
      <div className={`side-layer ${aPageIsActive ? 'not' : 'is'}`}>

      </div>
      <div className={`back-layer ${aPageIsActive ? 'not' : 'is'}`}>
        
      </div>
      <div className={`layer ${aPageIsActive ? 'not' : 'is'} ${pagesStatus === 'zoom-in' ? 'zoom-in-vertical' : 'zoom-out-vertical'}`} onClick={onClick}>
        <h1>
          ABOUT
          <span className='desc'>
            <div className='text'>
              click
            </div>
          </span>
        </h1>
      </div>
      <div className='background-layer'>
        {
          !pagesTraversing.status && !pagesTransiting.status
            && <div>my <span>Works</span></div>
        }
      </div>
      <div className={`page ${activePage === 'about' ? 'on' : 'off'} ${goingToWorks && 'pull-up'}`}>
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
        <div className='go-to-home-container' onClick={goToHome}>
          Home
        </div>
        <div className='go-to-works-container' onClick={goToWorks} onMouseEnter={onMouseEnterWorks} onMouseLeave={onMouseLeaveWorks}>
          
        </div>
        <div className='go-to-Contact-container' onClick={goToWorks}>
          Contect Me
        </div>
      </div>
    </div>
  )
}

export default About