import React, { useState, useContext } from 'react';

import Context from '../../context/Context.js';

const Home = () => {
  const [text, setText] = useState('')

  const { setData } = useContext(Context)

  const onClick = () => {
    setData(text)
  }

  const onChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div>
      from Home
      <button onClick={onClick}>click</button>
      <input type='text' value={text} onChange={onChange}/>
    </div>
  )
}

export default Home