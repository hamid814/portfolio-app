import React, { useEffect, useRef } from 'react';

// import Context from '../../context/Context.js';

const About = () => {
  const page = useRef(null)

  useEffect(() => {
    console.log(page.current.getBoundingClientRect().top)
    console.log(window.innerHeight)
    const top = page.current.getBoundingClientRect().top;
    const height = window.innerHeight;
    if(top / height < 0.5 && top > 0) {
      // page.current.style.color = 'blue'
      // console.log(height / top)
      page.current.classList.add('come')
    }
    // eslint-disable-next-line
  }, [])

  const onScroll = () => {
    const top = page.current.getBoundingClientRect().top;
    const height = window.innerHeight;
    if(top / height < 0.5 && top > 0) {
      // page.current.style.color = 'blue'
      // console.log(height / top)
      page.current.classList.add('come')
      page.current.classList.remove('down')
    } else if(top / height > 0.5) {
      page.current.classList.remove('come')
      page.current.classList.add('down')
    }
  }

  const onClick = () => {

  }

  window.addEventListener('scroll', onScroll)

  return (
    <div ref={page} className='page-container' onClick={onClick} onScroll={onScroll} id='about'>
      <div className='page'>
        AB
      </div>
    </div>
  )
}

export default About