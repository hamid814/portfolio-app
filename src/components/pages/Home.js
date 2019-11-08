import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Context from '../../context/Context.js';

const Home = () => {
  const { data } = useContext(Context)

  return (
    <div>
      from Home { data }
      <br/>
      link to <Link to='/about'>About</Link>
    </div>
  )
}

export default Home