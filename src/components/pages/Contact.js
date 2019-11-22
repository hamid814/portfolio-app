import React, { useContext } from 'react';

import Context from '../../context/Context.js';

import './styles/contact.css';

const Contact = ({ mosX }) => {
  const { setActivePage, setPagesStatus, aPageIsActive, goToPage } = useContext(Context) 

  const onClick = () => {
    if(!aPageIsActive) {
      setActivePage('contact')
      setPagesStatus('zoom-in')
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

  const mouseMoveStyle = {
    borderRadius: mosX
  }

  return (
    <div className='page-container' id='contact'>
      <div className={`back-layer ${aPageIsActive ? 'not' : 'is'}`} style={mouseMoveStyle}>
        
      </div>
      <div className={`layer ${aPageIsActive ? 'not' : 'is'}`} onClick={onClick} style={mouseMoveStyle}>
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
                {/* works */}
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
