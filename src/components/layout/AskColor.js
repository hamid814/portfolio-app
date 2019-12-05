import React, { useState, useEffect, useRef } from 'react'

import './AskColor.css';

const AskColor = () => {
  console.warn('ask for color or choose randomlly or select one myself')

  const [degree, setDegree] = useState(120)

  const circle = useRef(null)

  useEffect(() => {
    rotate()

    // eslint-disable-next-line
  }, [])

  const rotate = () => {
    if(degree === 360) {
      setDegree(1)
    } else if(degree < 360) {
      const z = degree + 1
      setDegree(z)
      console.log(degree)
    }

    circle.current.style.transform = `rotateZ(${degree}deg)`

    setTimeout(() => {
      rotate()
    }, 800);
  }

  // document.body.style.setProperty('--color-one', '#222')
  // document.body.style.setProperty('--color-two', '#555')
  // document.body.style.setProperty('--color-three', '#888')
  // document.body.style.setProperty('--color-four', '#bbb')

  return (
    <div id='select-color' ref={circle}>

    </div>
  )
}

export default AskColor
