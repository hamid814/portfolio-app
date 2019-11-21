import React, { useContext } from 'react';

import Context from '../../context/Context.js';

import './styles/contact.css';

const Contact = () => {
  const { setActivePage, setPagesStatus, aPageIsActive } = useContext(Context) 

  const onClick = () => {
    if(!aPageIsActive) {
      setActivePage('contact')
      setPagesStatus('zoom-in')
    }
  }

  const goToWorks = () => {
    setPagesStatus('zoom-out')
    setTimeout(() => {
      setPagesStatus('zoom-in')
      setActivePage('works')
    }, 1000);
  }

  return (
    <div className='page-container' id='contact'>
      <div className={`layer ${aPageIsActive ? 'not' : 'is'}`} onClick={onClick}>
        CONTACT
      </div>
      <div className='page'>
        Contact
        <br/>
        <div className='go-to-works' onClick={goToWorks}>
          <div className="shape">
          
          </div>
          <div className="desc">
            works
          </div>
          <div className="bar">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
