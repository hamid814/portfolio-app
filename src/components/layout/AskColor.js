import React, { useState, useEffect, useRef } from 'react'

import './AskColor.css';

const AskColor = () => {
  console.warn('ask for color or choose randomlly or select one myself')

  const [open, setOpen] = useState(true)

  const circle = useRef(null)

  let testD = 0;

  useEffect(() => {
    const rotate = () => {
      if(testD === 360 && true) {
        testD = 1
      } else if(testD < 360) {
        testD++
      }
      if(!open) {
        circle.current.style.transform = `rotateZ(${testD}deg)`
      }

      setTimeout(() => {
        rotate()
      }, 20);
    }

    rotate()
    // eslint-disable-next-line
  }, [])


  const onClick = () => {
    // setOpen(!open)

    document.body.style.setProperty('--color-one', '#222c')
    document.body.style.setProperty('--color-two', '#555c')
    document.body.style.setProperty('--color-three', '#888c')
    document.body.style.setProperty('--color-four', '#bbbc')
  }


  return (
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
  )
}

export default AskColor
