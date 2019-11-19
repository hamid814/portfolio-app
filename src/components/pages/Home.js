import React, { useState, useEffect, useContext } from 'react';

import Context from '../../context/Context.js';

const Home = () => {
  const { myName, aPageIsActive, setActivePage, setPagesStatus } = useContext(Context)

  const [doBug, setDoBug] = useState(false)
  const [name, setName] = useState('HOME')
  const [bugName, setBugName] = useState([
    {
      name: 'HOME',
      time: 100
    },
    {
      name: 'H&ME',
      time: 250
    },
    {
      name: 'H&*E',
      time: 300
    },
    {
      name: 'H0*E',
      time: 500
    },
    {
      name: 'HO^#',
      time: 650
    },
    {
      name: 'H@ME',
      time: 800
    },
    {
      name: '$@ME',
      time: 900
    },
    {
      name: '$OME',
      time: 1050
    },
    {
      name: 'H',
      time: 1150
    },
    {
      name: 'O',
      time: 1250
    },
    {
      name: 'M',
      time: 1350
    },
    {
      name: 'E',
      time: 1450
    },
    {
      name: 'H123',
      time: 1600
    },
    {
      name: 'HOM4',
      time: 1800
    },
    {
      name: 'H!M4',
      time: 2000
    },
    {
      name: 'H!ME',
      time: 2150
    },
    {
      name: 'HOME',
      time: 2400
    },
  ])

  useEffect(() => {
    bugName.forEach(bug => {
      setTimeout(() => {
        setName(bug.name)
      }, bug.time*1.6);
    })
    // eslint-disable-next-line
  }, [])

  const onClick = () => {
    setActivePage('home')
    setPagesStatus('zoom-in')
  }

  const onMouseEnter = () => {
    
  }

  const onMouseOut = () => {
    
  }

  return (
    <div className='page-container' id='home' onMouseEnter={onMouseEnter} onMouseOut={onMouseOut}>
      <div className={`layer ${aPageIsActive ? 'not' : 'is'}`} onClick={onClick}>
        {name}
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