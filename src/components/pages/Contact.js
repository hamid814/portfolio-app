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
        <div className='background'>
          CONTACT
        </div>
        <div className='social'>
          email
          <br/>
          github ( repos goes in works page )
          <br/>
        </div>
        <div id='form'>
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
              <input type="submit" value="Send"/>
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
