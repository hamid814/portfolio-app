import React, { useContext } from 'react'

import Context from '../../context/Context';

import './backButton.css';

const BackButton = () => {
  const { aPageIsActive, setActivePage, setPagesStatus, setPagesTransiting } = useContext(Context);

  const onClick = (e) => {
    setActivePage('from-menu')
    setPagesStatus('zoom-out')
    setPagesTransiting(true, 'come')
  }

  return (
    <div id='menu-container' className={`${!aPageIsActive && 'd-n'}`} onClick={onClick}>
      <div id='menu'>
        
      </div>
      <div id='shadow'>
      
      </div>
      <div id='menu-desc'>
        go back
      </div>
      <div id='menu-cover-for-hover'>
        {/* this part is to give menu a declared area to prevent animation messing up */}
      </div>
    </div>
  )
}

export default BackButton
