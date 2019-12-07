import React, { useState, useEffect, useRef } from 'react'

import './AskColor.css';

const AskColor = () => {
  const initialColors = {
    pack1: {
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
      }
    },
    pack2: {
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
      }
    },
    pack3: {
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
    },
    pack4: {
      colorOne: {
        color: 'rgba(0,0,0,0)',
        opacit: 'rgba(0,0,0,0)',
        title: '#56617c'
      },
      colorTwo: {
        color: 'rgba(0,0,0,0)',
        opacit: 'rgba(0,0,0,0)',
        title: '#8C8529'
      },
      colorThree: {
        color: 'rgba(0,0,0,0)',
        opacit: 'rgba(0,0,0,0)',
        title: '#6E361A'
      },
      colorFour: {
        color: 'rgba(0,0,0,0)',
        opacit: 'rgba(0,0,0,0)',
        title: '#262626'
      },
      borderColor: '#999',
    }
  }

  const [open, setOpen] = useState(false)

  const [degree, setDegree] = useState(0)

  const [colors, setColors] = useState(initialColors)

  const [activePack, setActivePack] = useState(1)

  const circle = useRef(null)

  useEffect(() => {
    if(open) {
      circle.current.style.transform = 'rotateZ(0deg)'
    } else if(!open) {
      circle.current.style.transform = `rotateZ(${degree}deg)`
      setTimeout(() => {
        if(degree === 360) {
          setDegree(0)
        } else if(degree < 360) {
          setDegree(degree + 1)
        }
      }, 20);
    }
    // eslint-disable-next-line
  }, [degree, open])

  const onClick = () => {
    setOpen(!open)

    document.body.style.setProperty('--color-one', '#222')
    document.body.style.setProperty('--color-two', '#555')
    document.body.style.setProperty('--color-three', '#888')
    document.body.style.setProperty('--color-four', '#bbb')
  }


  return (
    <div id='select-color-container'>
      <div
        id='select-color'
        className={`${open ? 'open' : 'close'}`}
        ref={circle}
        onClick={onClick}>
        <div className='color-one'>
          <div className='pack-one'>
            
          </div>      
        </div>
        <div className='color-two'>
          <div className='pack-two'>
          
          </div>
        </div>
        <div className='color-three'>
          <div className='pack-three'>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default AskColor
