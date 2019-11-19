import React from 'react';
import ReactDOM from 'react-dom';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Menu from './components/layout/Menu.js';
import BackScroll from './components/pages/BackScroll.js';
// import Home from './components/pages/Home.js';
// import About from './components/pages/About.js';
// import Contact from './components/pages/Contact.js';
import Pages from './components/pages/Pages.js';

import State from './context/State.js';

import './styles/index.css';
import './styles/haden.css';
import './styles/zIndex.css';
import './styles/keyframes.css';
import './components/pages/pages.css';

const App = () => {
  return (
    // <>
    //   <Router>
    //     <>
    //       <Menu />
    //       {/* <div className='container'> */}
    //       <Switch>
    //         <Route exact path={process.env.PUBLIC_URL + '/'} component={Home}/>
    //         <Route exact path={process.env.PUBLIC_URL + '/about'} component={About} />
            // <Route exact path={process.env.PUBLIC_URL + '/contact'} component={Contact} />
    //         <Route exact path={process.env.PUBLIC_URL + '/Works'} component={Works} />
    //       </Switch>
    //       {/* </div> */}
    //     </>
    //   </Router>
    // </>
    <>
      <Menu />
      <Pages />
      <BackScroll />
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