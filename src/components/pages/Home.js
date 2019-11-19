import React, { useContext } from 'react';

import Context from '../../context/Context.js';

const Home = () => {
  const { myName } = useContext(Context)

  return (
    <div className='page-container' id='home'>
      <div className='layer'>
      
      </div>
      <div className='page'>
        Hi!
        <div>
          I'm { myName }
        </div>
      </div>
    </div>
  )
}

export default Home