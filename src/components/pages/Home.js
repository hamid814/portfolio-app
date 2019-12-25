import React, { useState, useEffect, useContext } from 'react';

import Context from '../../context/Context.js';

import './styles/home.scss';

const Home = () => {
  const { myName,
          pagesStatus,
          activePage,
          aPageIsActive,
          setActivePage,
          setPagesStatus,
          setPagesTransiting,
          traversPages,
          pagesTransiting } = useContext(Context)

  const [name, setName] = useState('HOME')
  // eslint-disable-next-line
  const [bugName, setBugName] = useState([
    {
      name: 'HOME',
      time: 100
    },
    {
      name: 'H&ME',
      time: 250
    },
    {
      name: 'H&*E',
      time: 300
    },
    {
      name: 'H0*E',
      time: 500
    },
    {
      name: 'HO^#',
      time: 650
    },
    {
      name: 'H@ME',
      time: 800
    },
    {
      name: '$@ME',
      time: 900
    },
    {
      name: '$OME',
      time: 1050
    },
    {
      name: '#OME',
      time: 1150
    },
    {
      name: '##ME',
      time: 1250
    },
    {
      name: '###E',
      time: 1350
    },
    {
      name: '####',
      time: 1450
    },
    {
      name: 'H123',
      time: 1600
    },
    {
      name: 'HOM4',
      time: 1800
    },
    {
      name: 'H!M4',
      time: 2000
    },
    {
      name: 'H!ME',
      time: 2150
    },
    {
      name: 'HOME',
      time: 2400
    },
  ])

  useEffect(() => {
    bugName.forEach(bug => {
      setTimeout(() => {
        setName(bug.name)
      }, bug.time*1.8);
    })

    // eslint-disable-next-line
  }, [])

  const onClick = () => {
    if(!aPageIsActive && !pagesTransiting.status) {
      setActivePage('home')
      setPagesStatus('zoom-in')
      setPagesTransiting(true, 'go')
    }
  }

  const goToAbout = () => {
    traversPages('about')
  }

  const goToContact = () => {
    traversPages('contact')
  }

  return (
    <div className={`page-container ${activePage === 'home' && aPageIsActive && 'active'}`} id='home'>
      <div className={`side-layer ${aPageIsActive ? 'not' : 'is'}`}>

      </div>
      <div className={`back-layer ${aPageIsActive ? 'not' : 'is'}`}>
      
      </div>
      <div className={`layer ${aPageIsActive ? 'not' : 'is'} ${pagesStatus === 'zoom-in' ? 'zoom-in-vertical' : 'zoom-out-vertical'}`} onClick={onClick}>
        <h1>
          {name}
          <span className='desc'>
            <div className='text'>
              click
            </div>
          </span>
        </h1>
      </div>
      <div className='background-layer'></div>
      <div className={`page ${activePage === 'home' ? 'on' : 'off'}`}>
        Hi!
        <div>
          I'm { myName }
        </div>
        <div className='go-to-contact-container' onClick={goToContact}>
          <div className='go-to-contact'>
            <div className='arrow'>
              <div className='line line-one'></div>
              <div className='line line-two'></div>
              <div className='line line-three'></div>
            </div>
            <div className='text'>
              Contact
            </div>
          </div>
        </div>
        <div className='go-to-about-container' onClick={goToAbout}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 600">
            <path fill="#fff" fill-opacity="1">
            </path>
            <text fill="#fff">
              Home
            </text>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Home