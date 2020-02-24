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
          pagesTraversing,
          pagesTransiting } = useContext(Context)

  const [goingToAbout, setGoingToAbout] = useState(false)
  const [activeWork, setActiveWork] = useState(null)
  // eslint-disable-next-line
  const [works, setWorks] = useState({
    workOne: {
      name: 'Trello',
      description: 'a clone for trello',
      text: <span>this project is the best example for minapulating data in several layers
      <br />fully made with <b>react</b>.</span>,
      ghLink: 'https://github.com/hamid814/trello-clone',
      ghPagesLink: 'https://hamid814.github.io/trello-clone/',
    },
    workTwo: {
      name: 'Formi',
      description: 'make forms fast',
      text: <span>applicatin idea is to construct simple html'5' forms with just some clicks
      <br />its a classBased component application
      <br />fully made with <b>react</b>.</span>,
      ghLink: 'https://github.com/hamid814/r-p',
      ghPagesLink: 'https://hamid814.github.io/r-p/',
    },
    workThree: {
      name: 'Diprella',
      description: 'design concept made visual',
      text: <span>
      <br />designed by <a href='https://selectoglobal.com/' target='_blanck'>SELECTO</a>
      <br />fully made with <b>react</b>.</span>,
      ghLink: 'https://github.com/hamid814/signup-signin-concept',
      ghPagesLink: 'https://hamid814.github.io/signup-signin-concept/',
    },
    workFour: {
      name: 'Todo',
      description: 'my first project',
      text: <span>project that every Developer should do, a simple Todo app
      <br />CRUD application
      <br />fully made with <b>react</b>.</span>,
      ghLink: 'https://github.com/hamid814/todo-app',
      ghPagesLink: 'https://hamid814.github.io/todo-app/',
    },
    github: {
      name: 'Github',
      description: 'my github repos',
      text: 'for more wroks and other reposetories, check out my github profile...',
      ghLink: 'https://github.com/hamid814/',
    }
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

  const onMouseEnterAbout = () => {
    setGoingToAbout(true);
  }

  const onMouseLeaveAbout = () => {
    setGoingToAbout(false);
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

  const goToLinkOnId = e => {
    window.open(e.target.id)
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
      <div className='background-layer'>
        {
          !pagesTraversing.status && !pagesTransiting.status
            && <div><span>About</span> Me</div>
        }
      </div>
      <div className={`page ${activePage === 'works' ? 'on' : 'off'} ${activeWork !== null ? 'a-work-is-active' : 'no-works-active'} ${goingToAbout && 'pull-down'}`}>
        <div className={`work works-one ${activeWork === 'work-one' ? 'opened' : 'closed'}`}>
          <div className='background'></div>
          <div className='title'>
            {
              works.workOne.name
            }
          </div>
          <div className='work-description'>
            {
              works.workOne.description
            }
          </div>
          <div className='details-placeholder'></div>
          <div className='work-details'>
            <div className={`work-image ${works.workOne.name}`}>

            </div>
            <div className='work-text'>
              {
                works.workOne.text
              }
            </div>
          </div>
          <div className='buttons-panel'>
            <div className='button toggle' id='work-one' onClick={onWorkBtnClick}>
              <div className='text' id='work-one'>
                {
                  activeWork !== 'work-one'
                  ? 'Open'
                  : 'Close'
                }
              </div>
            </div>
            <div className='button gh' id={works.workOne.ghLink} onClick={goToLinkOnId}>
              <div className='text' id={works.workOne.ghLink}>
                Github
              </div>
            </div>
            <div className='button view' id={works.workOne.ghPagesLink} onClick={goToLinkOnId}>
              <div className='text' id={works.workOne.ghPagesLink}>
                View
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
          <div className='work-description'>
            {
              works.workTwo.description
            }
          </div>
          <div className='details-placeholder'></div>
          <div className='work-details'>
            <div className={`work-image ${works.workTwo.name}`}>

            </div>
            <div className='work-text'>
              {
                works.workTwo.text
              }
            </div>
          </div>
          <div className='buttons-panel'>
            <div className='button toggle' id='work-two' onClick={onWorkBtnClick}>
              <div className='text' id='work-two'>
                {
                  activeWork !== 'work-two'
                  ? 'Open'
                  : 'Close'
                }
              </div>
            </div>
            <div className='button gh' id={works.workTwo.ghLink} onClick={goToLinkOnId}>
              <div className='text' id={works.workTwo.ghLink}>
                Github
              </div>
            </div>
            <div className='button view' id={works.workTwo.ghPagesLink} onClick={goToLinkOnId}>
              <div className='text' id={works.workTwo.ghPagesLink}>
                View
              </div>
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
          <div className='work-description'>
            {
              works.workThree.description
            }
          </div>
          <div className='details-placeholder'></div>
          <div className='work-details'>
            <div className={`work-image ${works.workThree.name}`}>

            </div>
            <div className='work-text'>
              {
                works.workThree.text
              }
            </div>
          </div>
          <div className='buttons-panel'>
            <div className='button toggle' id='work-three' onClick={onWorkBtnClick}>
              <div className='text' id='work-three'>
                {
                  activeWork !== 'work-three'
                  ? 'Open'
                  : 'Close'
                }
              </div>
            </div>
            <div className='button gh' id={works.workThree.ghLink} onClick={goToLinkOnId}>
              <div className='text' id={works.workThree.ghLink}>
                Github
              </div>
            </div>
            <div className='button view' id={works.workThree.ghPagesLink} onClick={goToLinkOnId}>
              <div className='text' id={works.workThree.ghPagesLink}>
                View
              </div>
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
          <div className='work-description'>
            {
              works.workFour.description
            }
          </div>
          <div className='details-placeholder'></div>
          <div className='work-details'>
            <div className={`work-image ${works.workFour.name}`}>

            </div>
            <div className='work-text'>
              {
                works.workFour.text
              }
            </div>
          </div>
          <div className='buttons-panel'>
            <div className='button toggle' id='work-four' onClick={onWorkBtnClick}>
              <div className='text' id='work-four'>
                {
                  activeWork !== 'work-four'
                  ? 'Open'
                  : 'Close'
                }
              </div>
            </div>
            <div className='button gh' id={works.workFour.ghLink} onClick={goToLinkOnId}>
              <div className='text' id={works.workFour.ghLink}>
                Github
              </div>
            </div>
            <div className='button view' id={works.workFour.ghPagesLink} onClick={goToLinkOnId}>
              <div className='text' id={works.workFour.ghPagesLink}>
                View
              </div>
            </div>
          </div>
        </div>
        <div className={`work github ${activeWork === 'github' ? 'opened' : 'closed'}`}>
          <div className='background'></div>
          <div className='title'>
            {
              works.github.name
            }
          </div>
          <div className='work-description'>
            {
              works.github.description
            }
          </div>
          <div className='details-placeholder'></div>
          <div className='work-details'>
            <div className='work-text'>
              {
                works.github.text
              }
            </div>
          </div>
          <div className='buttons-panel'>
            <div className='button toggle' id='github' onClick={onWorkBtnClick}>
              <div className='text' id='github'>
                {
                  activeWork !== 'github'
                  ? 'Open'
                  : 'Close'
                }
              </div>
            </div>
            <div className='button gh' id={works.github.ghLink} onClick={goToLinkOnId}>
              <div className='text' id={works.github.ghLink}>
                Github
              </div>
            </div>
          </div>
        </div>
        <div className='go-to-contact-container' onClick={goToContact}>
          <div className='text'>
            <span>Contact</span> Me
          </div>
        </div>
        <div className='go-to-about-container' onClick={goToAbout} onMouseEnter={onMouseEnterAbout} onMouseLeave={onMouseLeaveAbout}>

        </div>
      </div>
    </div>
  )
}

export default Works
