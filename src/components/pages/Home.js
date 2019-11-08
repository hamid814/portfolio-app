import React, { useContext } from 'react';

import Context from '../../context/Context.js';

const Home = () => {
  const { myName } = useContext(Context)

  return (
    <div className='page-container'>
      <div className='page' id='home'>
        Hi!
        <div>
          I'm { myName }
        </div>
      </div>
    </div>
  )
}

export default Home