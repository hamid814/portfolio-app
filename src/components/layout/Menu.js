import React, { useContext } from 'react'

import Context from '../../context/Context';

import './menu.css';

const Menu = () => {
  const { aPageIsActive, setActivePage, setPagesStatus } = useContext(Context);

  const onClick = (e) => {
    setActivePage('from-menu');
    setPagesStatus('zoom-out')
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

export default Menu
