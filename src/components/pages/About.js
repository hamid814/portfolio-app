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
  const [contentPos, setContentPos] = useState('left')

  const onClick = () => {
    if(!aPageIsActive && !pagesTransiting.status) {
      setActivePage('about')
      setPagesStatus('zoom-in')
      setPagesTransiting(true, 'go')
    }
  }

  const changeContentPos = () => {
    if(contentPos === 'left') {
      setContentPos('right');
    } else if(contentPos === 'right') {
      setContentPos('left');
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
        <div className='back-sheet'>

        </div>
        <div className='content'>
          <div className={`content-sheet ${contentPos}`} onMouseEnter={changeContentPos}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, aspernatur natus quos ea ullam temporibus consectetur quis, ab animi cupiditate nostrum dolor suscipit provident recusandae. Aperiam excepturi corrupti amet tempora?
          </div>
          <div className={`front-sheet ${contentPos}`}>

          </div>
        </div>
        <div className='go-to-Contact-container' onClick={goToContact}>
          Contect Me
        </div>
      </div>
      <div className={`go-to-home-container ${pagesStatus !== 'zoom-in' && 'd-n'} ${pagesTransiting.status && 'd-n'} ${pagesTraversing.status && 'd-n'}`} onClick={goToHome}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 65 600'>
          <path fill='#fff' fillOpacity='1'>
          </path>
          <text fill='#fff'>
            Home
          </text>
        </svg>
      </div>
      <div className={`go-to-works-container ${pagesStatus !== 'zoom-in' && 'd-n'} ${pagesTransiting.status && 'd-n'} ${pagesTraversing.status && 'd-n'}`} onClick={goToWorks} onMouseEnter={onMouseEnterWorks} onMouseLeave={onMouseLeaveWorks}>
        {
          console.log(pagesStatus)
        }
      </div>
    </div>
  )
}

export default About