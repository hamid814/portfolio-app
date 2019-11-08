import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/layout/Navbar.js';
import Home from './components/pages/Home.js';
import About from './components/pages/About.js';

import State from './context/State.js';

import './index.css';
import './haden.css';

const App = () => {
  return (
    <>
      my App
      <Navbar />
      <Home />
      <About />
    </>
  )
}

const RoutContainer = () => {
  return (
    <>
      <App />
    </>
  )
}

const StateContainer = () => {
  return (
    <State>
      <RoutContainer />
    </State>
  )
}

ReactDOM.render(<StateContainer />, document.getElementById('root'));