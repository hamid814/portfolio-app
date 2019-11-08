import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Context from '../../context/Context.js';

const Home = () => {
  const { data, setData } = useContext(Context)

  const onClick = () => {
    setData(2)
  }

  return (
    <div>
      from Home
      <button onClick={onClick}>click</button>
      <br/>
      link to <Link to='/about'>About</Link>
    </div>
  )
}

export default Home