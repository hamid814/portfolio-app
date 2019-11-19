import React, { useContext } from 'react';

import Context from '../../context/Context.js';

const Works = () => {
  const { setActivePage, setPagesStatus } = useContext(Context)

  const onClick = () => {
    setActivePage('works')
    setPagesStatus('zoom-in')
  }

  return (
    <div className='page-container' id='works'>
      <div className='layer' onClick={onClick}>
        WORKS
      </div>
      <div className='page'>
        Works
      </div>
    </div>
  )
}

export default Works
