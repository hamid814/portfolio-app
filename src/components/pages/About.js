import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Context from '../../context/Context.js';

const About = () => {
  const { data } = useContext(Context)

  return (
    <div>
      from About { data }
      <br/>
      link to <Link to={process.env.PUBLIC_URL + '/'}>Home</Link>
    </div>
  )
}

export default About