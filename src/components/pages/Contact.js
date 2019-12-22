import React, { useContext } from 'react';

import Context from '../../context/Context.js';

import './styles/contact.scss';

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

  const onSubmit = e => {
    e.preventDefault()
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
      <div className='background-layer'></div>
      <div className={`page ${activePage === 'contact' ? 'on' : 'off'}`}>
        <div className='background'>
          <div className='line-one'>
            CON
          </div>
          <div className='line-two'>
            TACT
          </div>
        </div>
        <div className='social'>
          <div className='item-container'>
            <div className='item'>
              <div className='text'>
                email
              </div>
            </div>
            <div className='item-border'></div>
          </div>
          <div className='item-container'>
            <div className='item'>
              <div className='text'>
                github
              </div>
            </div>
            <div className='item-border'></div>
          </div>
        </div>
        <div id='form' onSubmit={onSubmit}>
          <form>
            <div className='form-header'>
              <h2>
                Send Me a Message
              </h2>
            </div>
            <div className='form-group'>
              <label>Name:</label>
              <input type='text' name='name' placeholder='Name'/>
              <div className='input-side-layer'></div>
              <div className='input-side-rect'></div>
            </div>
            <div className='form-group'>
              <label>Email:</label>
              <input type='text' name='email' placeholder='Email'/>
              <div className='input-side-layer'></div>
              <div className='input-side-rect'></div>
            </div>
            <div className='form-group'>
              <label>Message:</label>
              <input type='text' name='message' placeholder='Message'/>
              <div className='input-side-layer'></div>
              <div className='input-side-rect'></div>
            </div>
            <div className='form-group'>
              <input type='submit' value='Send'/>
              <div className='submit-side-layer'></div>
            </div>
          </form>
        </div>
        <div className='go-to-works-container' onClick={goToWorks}>
          <div className='text'>
            See My <span>works</span>
          </div>
        </div>
        <div className='go-to-home-container' onClick={goToHome}>
          <div className='go-to-home'>
            <div className='arrow'>
              <div className='line line-one'></div>
              <div className='line line-two'></div>
              <div className='line line-three'></div>
            </div>
            <div className='text'>
              Home
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
