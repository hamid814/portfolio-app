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

  const onMousemove = e => {
    const x = e.clientX
    const y = e.clientY
    setTimeout(() => {
      document.querySelector('#home').style.setProperty('--mouse-x', `${x}px`)
      document.querySelector('#home').style.setProperty('--mouse-y', `${y}px`)
    }, 0);
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
      <div className={`page ${activePage === 'home' ? 'on' : 'off'}`} onMouseMove={onMousemove}>
        Hi!
        <div>
          I'm { myName }
        </div>
        {/* <div className='background-image'> */}

        {/* </div> */}
        {/* <div className='circle'> */}
          {/* <div className='dot'></div> */}
        {/* </div> */}
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='50 150 1500 1000'>
            <path fill="#fff" d="M 100 185 L 160 185 L 230 255 L 240 245 L 270 275 L 260 285 L 390 415 L 540 265 L 570 295 L 420 445 L 480 505 L 715 270 L 680 235 L 710 205 L 745 240 L 770 215 L 800 245 L 775 270 L 875 370 L 1045 200 L 1075 230 L 905 400 L 1005 500 L 1320 185 L 1380 185 L 1035 530 L 1135 630 L 1305 460 L 1335 490 L 1265 560 L 1315 610 L 1500 425 L 1500 485 L 1440 545 L 1500 605 L 1500 665 L 1480 645 L 1310 815 L 1250 815 L 1450 615 L 1410 575 L 1345 640 L 1375 670 L 1345 700 L 1235 590 L 1165 660 L 1205 700 L 1175 730 L 745 300 L 630 415 L 745 530 L 785 490 L 815 520 L 775 560 L 985 770 L 955 800 L 745 590 L 520 815 L 460 815 L 560 715 L 475 630 L 505 600 L 590 685 L 685 590 L 570 475 L 385 660 L 485 760 L 455 790 L 225 560 L 30 815 L 0 815 L 0 785 L 345 440 L 375 470 L 315 530 L 415 630 L 495 550 L 275 330 L 0 605 L 0 545 L 245 300 Z">

            </path>
          </svg>
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
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 65 600'>
            <path fill='#fff' fillOpacity='1'>
            </path>
            <text fill='#fff'>
              About
            </text>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Home