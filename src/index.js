import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/pages/Home.js';
import About from './components/pages/About.js';

import State from './context/State.js';

import './index.css';
import './haden.css';

const App = () => {
  return (
    <>
      my App
      <Home />
      <About />
    </>
  )
}

const StateContainer = () => {
  return (
    <State>
      <App />
    </State>
  )
}

ReactDOM.render(<StateContainer />, document.getElementById('root'));