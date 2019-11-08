import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Menu from './components/layout/Menu.js';
import Home from './components/pages/Home.js';
import About from './components/pages/About.js';

import State from './context/State.js';

import './index.css';
import './haden.css';

const App = () => {
  return (
    <>
      <Router>
        <>
          <Menu />
          {/* <div className="container"> */}
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About} />
          </Switch>
          {/* </div> */}
        </>
      </Router>
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