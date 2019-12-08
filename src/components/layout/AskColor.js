import React, { useState, useEffect, useRef } from 'react'

import './AskColor.css';

const AskColor = () => {
  const initialColors = {
    pack1: {
      packNameString: 'pack1',
      colorOne: {
        color: 'rgb(38, 38, 38)',
        opacit: 'rgba(38, 38, 38, 0.9)',
        title: '#56617c'
      },
      colorTwo: {
        color: 'rgba(140, 133, 41)',
        opacit: 'rgba(140, 133, 41, 0.9)',
        title: '#8C8529'
      },
      colorThree: {
        color: 'rgba(86, 97, 124)',
        opacit: 'rgba(86, 97, 124, 0.9)',
        title: '#6E361A'
      },
      colorFour: {
        color: 'rgba(110, 54, 26)',
        opacit: 'rgba(110, 54, 26, 0.9)',
        title: '#262626'
      },
      borderColor: 'transparent',
    },
    pack2: {
      packNameString: 'pack2',
      colorOne: {
        color: 'rgb(210, 180, 140)',
        opacit: 'rgba(210, 180, 140, 0.9)',
        title: 'rgb(255, 99, 71)'
      },
      colorTwo: {
        color: 'rgb(0, 128, 128)',
        opacit: 'rgba(0, 128, 128, 0.9)',
        title: 'rgb(0, 128, 128)'
      },
      colorThree: {
        color: 'rgb(255, 99, 71)',
        opacit: 'rgba(255, 99, 71, 0.9)',
        title: 'rgb(216, 191, 216)'
      },
      colorFour: {
        color: 'rgb(216, 191, 216)',
        opacit: 'rgba(216, 191, 216, 0.9)',
        title: 'rgb(210, 180, 140)'
      },
      borderColor: 'transparent',
    },
    pack3: {
      packNameString: 'pack3',
      colorOne: {
        color: 'rgb(30, 30, 30)',
        opacit: 'rgba(30, 30, 30, 0.9)',
        title: '#56617c'
      },
      colorTwo: {
        color: 'rgb(150, 150, 150)',
        opacit: 'rgba(150, 150, 150, 0.9)',
        title: '#8C8529'
      },
      colorThree: {
        color: 'rgb(210, 210, 210)',
        opacit: 'rgba(210, 210, 210, 0.9)',
        title: '#6E361A'
      },
      colorFour: {
        color: 'rgb(90, 90, 90)',
        opacit: 'rgba(90, 90, 90, 0.9)',
        title: '#262626'
      },
      borderColor: 'transparent',
    },
    pack4: {
      packNameString: 'pack4',
      colorOne: {
        color: 'rgba(255,255,255,1)',
        opacit: 'rgba(0,0,0,0)',
        title: '#56617c'
      },
      colorTwo: {
        color: 'rgba(255,255,255,1)',
        opacit: 'rgba(0,0,0,0)',
        title: '#8C8529'
      },
      colorThree: {
        color: 'rgba(255,255,255,1)',
        opacit: 'rgba(0,0,0,0)',
        title: '#6E361A'
      },
      colorFour: {
        color: 'rgba(255,255,255,1)',
        opacit: 'rgba(0,0,0,0)',
        title: '#262626'
      },
      borderColor: '#999',
    }
  }

  const [open, setOpen] = useState(false)

  const [hover, setHover] = useState(false)

  const [degree, setDegree] = useState(0)

  // eslint-disable-next-line
  const [colors, setColors] = useState(initialColors)

  const [activePackNumber, setActivePackNumber] = useState('pack1')

  const circle = useRef(null)

  useEffect(() => {
    setColorPack(colors['pack1'])
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if(open) {
      circle.current.style.transform = 'rotateZ(0deg)'
    } else if(!open) {
      circle.current.style.transform = `rotateZ(${degree}deg)`
      setTimeout(() => {
        if(degree === 360) {
          setDegree(1)
        } else if(degree === 0) {
          setDegree(359)
        } else if(degree < 360) {
          if(hover) {
            setDegree(degree - 1)
          } else if(!hover) {
            setDegree(degree + 1)
          }
        }
      }, 20);
    }
    // eslint-disable-next-line
  }, [degree, open])

  const onClick = () => {
    !open && setOpen(true)
  }

  const onMouseEnter = () => {
    setHover(true)
  }

  const onMouseLeave = () => {
    setHover(false)
  }

  const closeFromXBtn = () => {
    setOpen(false)
  }

  const close = (e) => {
    if(e.target.classList.contains('func-colse-select-color')) {
      setOpen(false)
    }
  }

  const setColorPack = (pack) => {
    document.body.style.setProperty('--color-one', pack.colorOne.color)
    document.body.style.setProperty('--color-one-o', pack.colorOne.opacit)
    document.body.style.setProperty('--color-one-title', pack.colorOne.title)
    document.body.style.setProperty('--color-two', pack.colorTwo.color)
    document.body.style.setProperty('--color-two-o', pack.colorTwo.opacit)
    document.body.style.setProperty('--color-two-title', pack.colorTwo.title)
    document.body.style.setProperty('--color-three', pack.colorThree.color)
    document.body.style.setProperty('--color-three-o', pack.colorThree.opacit)
    document.body.style.setProperty('--color-three-title', pack.colorThree.title)
    document.body.style.setProperty('--color-four', pack.colorFour.color)
    document.body.style.setProperty('--color-four-o', pack.colorFour.opacit)
    document.body.style.setProperty('--color-four-title', pack.colorFour.title)
    document.body.style.setProperty('--layers-border-color', pack.borderColor)

    setActivePackNumber(pack.packNameString)
  }

  return (
    <div
      onClick={close}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      id='select-color-container'
      className={`func-colse-select-color ${open ? 'active' : 'deactive'}`}>
      <div className='close-select-color' onClick={closeFromXBtn}>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </div>
      <div className='desc'>
        color set
      </div>
      <div
        id='select-color'
        className={`${open ? 'open' : 'close'}`}
        ref={circle}
        onClick={onClick}>
        <div className='color-one'>
          <SelectPackButton select={setColorPack} defaultPack={colors['pack4']} activePack={colors[activePackNumber]} />
        </div>
        <div className='color-two'>
          <SelectPackButton select={setColorPack} defaultPack={colors['pack2']} activePack={colors[activePackNumber]} />
        </div>
        <div className='color-three'>
          <SelectPackButton select={setColorPack} defaultPack={colors['pack3']} activePack={colors[activePackNumber]} />
        </div>
      </div>
    </div>
  )
}

const SelectPackButton = ({ select, defaultPack, activePack }) => {
  const [pack, setPack] = useState(defaultPack)

  const selectThisPack = () => {
    setPack(activePack)
    select(pack)
  }

  const color1 = {
    background: pack.colorOne.color,
    border: `1px solid ${pack.borderColor}`
  }

  const color2 = {
    background: pack.colorTwo.color,
    border: `1px solid ${pack.borderColor}`
  }

  const color3 = {
    background: pack.colorThree.color,
    border: `1px solid ${pack.borderColor}`
  }

  const borderStyle = {
    border: `1px solid ${pack.borderColor}`
  }

  return (
    <div className='pack-one' onClick={selectThisPack} style={borderStyle}>
      <div className='slice-one' style={color1}>
      
      </div>
      <div className='slice-two' style={color2}>
      
      </div>
      <div className='slice-three' style={color3}>
      
      </div>
    </div>
  )
}

export default AskColor
