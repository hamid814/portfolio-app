import React, { useContext } from 'react';

import Context from '../../context/Context.js';

const Home = () => {
  const { data } = useContext(Context)

  return (
    <div>
      from Home { data }
    </div>
  )
}

export default Home