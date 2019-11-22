import React, { useContext } from 'react';

import Context from '../../context/Context.js';

import './styles/contact.css';

const Contact = () => {
  const { setActivePage, setPagesStatus, aPageIsActive, goToPage, setPagesTransiting } = useContext(Context) 

  const onClick = () => {
    if(!aPageIsActive) {
      setActivePage('contact')
      setPagesStatus('zoom-in')
      setPagesTransiting(true, 'go')
    }
  }

  const goToWorks = () => {
    // setPagesStatus('zoom-out')
    // setTimeout(() => {
      // setPagesStatus('zoom-in')
      // setActivePage('works')
    // }, 1000);
    goToPage('works')
  }

  return (
    <div className='page-container' id='contact'>
      <div className={`side-layer ${aPageIsActive ? 'not' : 'is'}`}>

      </div>
      <div className={`back-layer ${aPageIsActive ? 'not' : 'is'}`}>
        
      </div>
      <div className={`layer ${aPageIsActive ? 'not' : 'is'}`} onClick={onClick}>
        <h1>
          CONTACT
        </h1>
      </div>
      <div className='page'>
        Contact
        <br/>
        <div className='go-to-works-container' onClick={goToWorks}>
          <div className='go-to-works'>
            <div className='desc'>
                works
            </div>
            <div className='bar'>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
