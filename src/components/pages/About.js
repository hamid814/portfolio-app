import React, { useEffect, useRef } from 'react';

// import Context from '../../context/Context.js';

const About = () => {
  const page = useRef(null)

  useEffect(() => {
    console.log(page.current.getBoundingClientRect().top)
    console.log(window.innerHeight)
    const top = page.current.getBoundingClientRect().top;
    const height = window.innerHeight;
    if(top / height > 0.5) {
      page.current.style.color = 'blue'
      // console.log(height / top)
    }
    // page.current.style = {
      // color: 'blue'
    // }
    // console.log(page.current.style.color)
    // eslint-disable-next-line
  }, [])

  // console.log(page.current)
  const thisStyle = {
    color: 'red'
  }

  return (
    <div ref={page} style={thisStyle} className='page-container' id='about'>
      <div className='page'>
        AB
      </div>
    </div>
  )
}

export default About