import React from 'react'

const BetaBadge = () => {
  const thisStyle = {
    position: 'absolute',
    top: 70,
    right: -410,
    display: 'inline-block',
    background: '#6c9',
    padding: 7,
    transform: 'rotateZ(45deg)',
    textAlign: 'center',
    width: 1000,
    zIndex: 999999,
  }
  
  if(process.env.NODE_ENV !== 'development') {
    return (
      <div style={thisStyle}>
        Site is under Development
      </div>
    )
  } else {
    return(
      <></>
    )
  }
}

export default BetaBadge
