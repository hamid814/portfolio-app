import React, { useContext } from 'react';

import Context from '../../context/Context.js';

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
        <span onClick={goToWorks}>works</span>
      </div>
    </div>
  )
}

export default Contact
