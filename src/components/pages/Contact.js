import React, { useContext } from 'react';

import Context from '../../context/Context.js';

import './styles/contact.css';

const Contact = () => {
  const { setActivePage,
          pagesStatus,
          activePage,
          setPagesStatus,
          aPageIsActive,
          traversPages,
          setPagesTransiting,
          pagesTransiting } = useContext(Context)

  const onClick = () => {
    if(!aPageIsActive && !pagesTransiting.status) {
      setActivePage('contact')
      setPagesStatus('zoom-in')
      setPagesTransiting(true, 'go')
    }
  }

  const goToWorks = () => {
    traversPages('works')
  }

  const goToHome = () => {
    traversPages('home')
  }

  return (
    <div className={`page-container ${activePage === 'home' && aPageIsActive && 'active'}`} id='contact'>
      <div className={`side-layer ${aPageIsActive ? 'not' : 'is'}`}>

      </div>
      <div className={`back-layer ${aPageIsActive ? 'not' : 'is'}`}>
        
      </div>
      <div className={`layer ${aPageIsActive ? 'not' : 'is'} ${pagesStatus === 'zoom-in' ? 'zoom-in-vertical' : 'zoom-out-vertical'}`} onClick={onClick}>
        <h1>
          CONTACT
          <span className='desc'>
            <div className='text'>
              click
            </div>
          </span>
        </h1>
      </div>
      <div className='page'>
        <div className='social'>
          email
          <br/>
          github ( repos )
          <br/>
          insta
          <br/>
          tweet
        </div>
        <div id='form'>
          <form>
            <div className='form-header'>
              <h2>
                Send Me a Message
              </h2>
            </div>
            <div className='form-group'>

            </div>
          </form>
        </div>
        <div className='go-to-works-container' onClick={goToWorks}>
          See My works
        </div>
        <div className='go-to-home-container' onClick={goToHome}>
          Home
        </div>
      </div>
    </div>
  )
}

export default Contact
