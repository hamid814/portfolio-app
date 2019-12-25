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
  const [pathHover, setPathHover] = useState(false)

  // const path1 = `M 150 0 Q 170 150 180 250 Q 190 300 180 350 Q 170 430 150 600`
  const path1 = `M 0 0 Q 65 300 0 600`
  // const path2 = `M 150 0 Q 170 150 180 250 Q 220 300 180 350 Q 170 430 150 600 `
  const path2 = `M 0 0 Q 130 300 0 600`

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

  const onMouseEnterPath = () => {
    setPathHover(true)
  }

  const onMouseLeavePath = () => {
    setPathHover(false)
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 600">
          <path onMouseEnter={onMouseEnterPath} onMouseLeave={onMouseLeavePath} fill="#fff" fill-opacity="1">
            <title>
              hamid
            </title>
          </path>
          <text fill="#fff">
            hamid
          </text>
        </svg>
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
        <div className='go-to-Contact-container' onClick={goToContact}>
          Contect Me
        </div>
      </div>
    </div>
  )
}

export default About