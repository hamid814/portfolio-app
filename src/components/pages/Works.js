import React, { useContext } from 'react';

import Context from '../../context/Context.js';

import './styles/works.css';

const Works = ({ mosPos }) => {
  const { setActivePage, setPagesStatus, aPageIsActive } = useContext(Context)

  const onClick = () => {
    if(!aPageIsActive) {
      setActivePage('works')
      setPagesStatus('zoom-in')
    }
  }

  const mouseMoveStyle = {
    borderColor: `rgba(0, 0, 0, ${mosPos.y})`,
    borderRadius: mosPos.x
  }

  return (
    <div className='page-container' id='works'>
      <div className={`back-layer ${aPageIsActive ? 'not' : 'is'}`} style={mouseMoveStyle}>
        
      </div>
      <div className={`layer ${aPageIsActive ? 'not' : 'is'}`} onClick={onClick} style={mouseMoveStyle}>
        <h1>  
          WORKS
        </h1>
      </div>
      <div className='page'>
        Works
      </div>
    </div>
  )
}

export default Works
