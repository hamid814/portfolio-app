import React, { useState, useContext } from 'react';

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

  const [activeWork, setActiveWork] = useState(null)
  // eslint-disable-next-line
  const [works, setWorks] = useState({
    workOne: {
      name: 'trello',
      description: 'desc',
    },
    workTwo: {
      name: 'formi',
      description: 'desc',
    },
    workThree: {
      name: 'diprella',
      description: 'desc',
    },
    workFour: {
      name: 'todo',
      description: 'desc',
    },
  })

  const onClick = () => {
    if(!aPageIsActive && !pagesTransiting.status) {
      setActivePage('works')
      setPagesStatus('zoom-in')
      setPagesTransiting(true, 'go')
    }
  }

  const onWorkBtnClick = e => {
    if(activeWork && e.target.id === activeWork) {
      setActiveWork(null)
    } else if(activeWork && e.target.id !== activeWork) {
      setActiveWork(e.target.id)
    } else if(activeWork === null) {
      setActiveWork(e.target.id)
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
      <div className={`page ${activePage === 'works' ? 'on' : 'off'} ${activeWork !== null ? 'a-work-is-active' : 'no-works-active'}`}>
        <div className='work works-one'>
          <div className='background'></div>
          <div className='title'>
            {
              works.workOne.name
            }
          </div>
          <div className='button' id='work-one' onClick={onWorkBtnClick}>
            <div className='text' id='work-one'>
              {
                activeWork !== 'work-one'
                ? 'Open'
                : 'Close'
              }
            </div>
          </div>
        </div>
        <div className='work reverse work-two'>
          <div className='background'></div>
          <div className='title'>
            {
              works.workTwo.name
            }
          </div>
          <div className='button' id='work-two' onClick={onWorkBtnClick}>
            <div className='text' id='work-two'>
              {
                activeWork !== 'work-two'
                ? 'Open'
                : 'Close'
              }
            </div>
          </div>
        </div>
        <div className='work work-three'>
          <div className='background'></div>
          <div className='title'>
            {
              works.workThree.name
            }
          </div>
          <div className='button' id='work-three' onClick={onWorkBtnClick}>
            <div className='text' id='work-three'>
              {
                activeWork !== 'work-three'
                ? 'Open'
                : 'Close'
              }
            </div>
          </div>
        </div>
        <div className='work reverse work-four'>
          <div className='background'></div>
          <div className='title'>
            {
              works.workFour.name
            }
          </div>
          <div className='button' id='work-four' onClick={onWorkBtnClick}>
            <div className='text' id='work-four'>
              {
                activeWork !== 'work-four'
                ? 'Open'
                : 'Close'
              }
            </div>
          </div>
        </div>
        <div className='work github'>
          <div className='background'></div>
          <div className='title'>
            github
          </div>
          <div className='button' id='github' onClick={onWorkBtnClick}>
            <div className='text' id='github'>
              {
                activeWork !== 'github'
                ? 'Open'
                : 'Close'
              }
            </div>
          </div>
        </div>
        <div className='go-to-contact-container' onClick={goToContact}>
          <div className='text'>
            <span>Contact</span> Me
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
