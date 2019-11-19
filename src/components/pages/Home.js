import React, { useContext } from 'react';

import Context from '../../context/Context.js';

const Home = () => {
  const { myName, setActivePage, setPagesStatus } = useContext(Context)

  const onClick = () => {
    setActivePage('home')
    setPagesStatus('zoom-in')
  }

  return (
    <div className='page-container' id='home'>
      <div className='layer' onClick={onClick}>
        HOME
      </div>
      <div className='page'>
        Hi!
        <div>
          I'm { myName }
        </div>
      </div>
    </div>
  )
}

export default Home