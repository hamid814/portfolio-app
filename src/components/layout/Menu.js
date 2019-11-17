import React from 'react'
import { Link } from 'react-router-dom';

import './menu.css';

const Menu = () => {
  return (
    <div id='menu-container'>
      <div id="menu-hole">
        
      </div>
      <div id='menu-blur'>

      </div>
      <div id='menu'>
        <Link to={process.env.PUBLIC_URL + '/'}>Home</Link>
        <br/>
        <br/>
        <Link to={process.env.PUBLIC_URL + '/about'}>About</Link>
        <br/>
        <br/>
        <Link to={process.env.PUBLIC_URL + '/works'}>Works</Link>
        <br/>
        <br/>
        <Link to={process.env.PUBLIC_URL + '/contact'}>Contact</Link>
      </div>
    </div>
  )
}

export default Menu
