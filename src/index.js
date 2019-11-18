import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Menu from './components/layout/Menu.js';
import BackScroll from './components/pages/BackScroll.js';
// import Home from './components/pages/Home.js';
// import About from './components/pages/About.js';
// import Contact from './components/pages/Contact.js';
import Pages from './components/pages/Pages.js';

import State from './context/State.js';
import Context from './context/Context.js';

import './styles/index.css';
import './styles/haden.css';
import './styles/zIndex.css';
import './components/pages/pages.css';

const App = () => {
  const {setActivePage} = useContext(Context)

  const onScroll = () => {
    console.clear();
    console.log(window.scrollY);
    console.log(window.innerHeight);
    console.log((window.scrollY + window.innerHeight));
    console.log(document.body.getBoundingClientRect().height);

    if((window.scrollY + window.innerHeight) === document.body.getBoundingClientRect().height) {
      setActivePage('works')
    } else if(true) {

    }
  }

  window.addEventListener('scroll', onScroll)
  
  return (
    // <>
    //   <Router>
    //     <>
    //       <Menu />
    //       {/* <div className="container"> */}
    //       <Switch>
    //         <Route exact path={process.env.PUBLIC_URL + '/'} component={Home}/>
    //         <Route exact path={process.env.PUBLIC_URL + '/about'} component={About} />
    //         <Route exact path={process.env.PUBLIC_URL + '/contact'} component={Contact} />
    //         <Route exact path={process.env.PUBLIC_URL + '/Works'} component={Works} />
    //       </Switch>
    //       {/* </div> */}
    //     </>
    //   </Router>
    // </>
    <div onScroll={onScroll}>
      <Menu />
      <Pages />
      <BackScroll />
    </div>
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