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
  // eslint-disable-next-line
  const [data, setData] = useState([
    {
      id: 1,
      initialPos: 'left',
      logo: ['fab fa-react fa-5x rotate'],
      title: <b>React</b>,
      text: <i>
              experienced with <b>react</b> and have done several projects with
            </i>
    },
    {
      id: 2,
      initialPos: 'left',
      logo: ['fab fa-js fa-5x'],
      title: 'JavaScript',
      text: <i>
              mastered <b>es6</b> and <b>es7</b>
            </i>
    },
    {
      id: 3,
      initialPos: 'right',
      logo: ['fab fa-html5 fa-5x mr-1', 'fab fa-css3-alt fa-5x'],
      title: 'HTML, CSS',
      text: <i>
              <b>html5</b> and <b>css3</b>
              <br/>
              <b>semantic</b> and <b>modern</b>
              <br/>
              the fundations of any webpage
            </i>
    },
    {
      id: 4,
      initialPos: 'right',
      logo: ['fas fa-ruler-combined fa-5x'],
      title: 'UI',
      text: <i>
              have a passion for <b>greate</b> UIs
            </i>
    },
  ])

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

  const gotToAbout = () => {
    
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
        <div className='back-sheet background-pattern-1'>

        </div>
        <div className='content'>
          {
            data.map(item => (
              <ContentGroup key={item.id} item={item} />    
            ))
          }
        </div>
        <div className='go-to-contact-container' onClick={goToContact}>
          <div>
            Contact Me
          </div>
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
        
      </div>
    </div>
  )
}

const ContentGroup = ({ item }) => {
  const [contentPos, setContentPos] = useState(item.initialPos)
  
  const changeContentPos = () => {
    if(contentPos === 'left') {
      setContentPos('right');
    } else if(contentPos === 'right') {
      setContentPos('left');
    }
  }
  
  return (
    <div className='content-group'>
      <div className={`content-sheet ${contentPos}`}>
        <div className='content-title'>
          {
            item.title
          }
        </div>
        <div className='content-text'>
          {
            item.text
          }
        </div>
      </div>
      <div className={`front-sheet background-pattern-2 ${contentPos}`} onMouseEnter={changeContentPos}>
        {
          item.logo.map(i => (
            <i className={i}></i>    
          ))
        }
      </div>
    </div>
  )
}

export default About