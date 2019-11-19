import React, { useContext } from 'react'

import Context from '../../context/Context';

import './menu.css';

const Menu = () => {
  const { pagesStatus, setActivePage, setPagesStatus } = useContext(Context);

  const onClick = (e) => {
    // setActivePage('');
    setPagesStatus('zoom-out')
  }

  return (
    <div id='menu-container' className={`${pagesStatus === 'zoom-out' && 'd-n'}`} onClick={onClick}>
      <div id='menu'>
        
      </div>
    </div>
  )
}

export default Menu
