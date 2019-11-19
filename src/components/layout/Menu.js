import React, { useContext } from 'react'

import Context from '../../context/Context';

import './menu.css';

const Menu = () => {
  const { pagesStatus, setActivePage, setPagesStatus } = useContext(Context);

  const onClick = (e) => {
    setActivePage('');
    setPagesStatus('zoom-out')
  }

  return (
    <div id='menu-container' className={`${pagesStatus === 'zoom-out' && 'd-n'}`}>
      <div id='menu' onClick={onClick}>
        
      </div>
    </div>
  )
}

export default Menu
