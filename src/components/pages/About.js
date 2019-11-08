import React, { useContext } from 'react';

import Context from '../../context/Context.js';

const About = () => {
  const { data } = useContext(Context)

  return (
    <div>
      from About { data }
    </div>
  )
}

export default About