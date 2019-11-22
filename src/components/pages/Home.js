import React, { useState, useEffect, useContext } from 'react';

import Context from '../../context/Context.js';

import './styles/home.css';

const Home = () => {
  const { myName, aPageIsActive, setActivePage, setPagesStatus, setPagesTransiting } = useContext(Context)

  const [name, setName] = useState('HOME')
  // eslint-disable-next-line
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
      name: '#OME',
      time: 1150
    },
    {
      name: '##ME',
      time: 1250
    },
    {
      name: '###E',
      time: 1350
    },
    {
      name: '####',
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
      }, bug.time*1.8);
    })
    // eslint-disable-next-line
  }, [])

  const onClick = () => {
    if(!aPageIsActive) {
      setActivePage('home')
      setPagesStatus('zoom-in')
      setPagesTransiting(true, 'go')
    }
  }

  return (
    <div className='page-container' id='home'>
      <div className={`back-layer ${aPageIsActive ? 'not' : 'is'}`}>

      </div>
      <div className={`layer ${aPageIsActive ? 'not' : 'is'}`} onClick={onClick}>
        <h1>
          {name}
        </h1>
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