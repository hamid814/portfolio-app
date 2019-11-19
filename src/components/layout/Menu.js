import React, { useContext } from 'react'
// import { Link } from 'react-router-dom';

import Context from '../../context/Context';

import './menu.css';

const Menu = () => {
  const { setActivePage, setPagesStatus } = useContext(Context);

  const onClick = () => {
    setActivePage('about');
    setPagesStatus();
  }

  return (
    <div id='menu-container'>
      <div id='menu-blur'>

      </div>
      <div id='menu'>
        {/* <Link to={process.env.PUBLIC_URL + '/'}>Home</Link> */}
        <a href='#home'>Home</a>
        <br/>
        <br/>
        {/* <Link to={process.env.PUBLIC_URL + '/about'}>About</Link> */}
        <a href='#about' onClick={onClick}>about</a>
        <br/>
        <br/>
        {/* <Link to={process.env.PUBLIC_URL + '/works'}>Works</Link> */}
        <a href='#works'>works</a>
        <br/>
        <br/>
        {/* <Link to={process.env.PUBLIC_URL + '/contact'}>Contact</Link> */}
        <a href='#contact'>contact</a>
      </div>
    </div>
  )
}

export default Menu
