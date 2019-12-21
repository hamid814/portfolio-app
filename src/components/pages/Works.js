import React, { useState, useEffect, useContext } from 'react';

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
      ghLink: '',
      ghPagesLink: '',
      screenShotLink: '',
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

  useEffect(() => {
    setActiveWork(null)
    // eslint-disable-next-line
  }, [activePage])

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
        <div className={`work works-one ${activeWork === 'work-one' ? 'opened' : 'closed'}`}>
          <div className='background'></div>
          <div className='title'>
            {
              works.workOne.name
            }
          </div>
          <div className='buttons-panel'>
            <div className='button' id='work-one' onClick={onWorkBtnClick}>
              <div className='text' id='work-one'>
                {
                  activeWork !== 'work-one'
                  ? 'Open'
                  : 'Close'
                }
              </div>
            </div>
            <div className='button gh'>
              <div className='text'>
                Code on Github
              </div>
            </div>
            <div className='button gh'>
              <div className='text'>
                View Project
              </div>
            </div>
          </div>
        </div>
        <div className={`work reverse works-two ${activeWork === 'work-two' ? 'opened' : 'closed'}`}>
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
        <div className={`work works-three ${activeWork === 'work-three' ? 'opened' : 'closed'}`}>
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
        <div className={`work reverse works-four ${activeWork === 'work-four' ? 'opened' : 'closed'}`}>
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
        <div className={`work github ${activeWork === 'github' ? 'opened' : 'closed'}`}>
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
