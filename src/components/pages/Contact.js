import React, { useContext } from 'react';

import Context from '../../context/Context.js';

const Contact = () => {
  const { setActivePage, setPagesStatus } = useContext(Context) 

  const onClick = () => {
    setActivePage('contact')
    setPagesStatus('zoom-in')
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
      <div className='layer' onClick={onClick}>
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
