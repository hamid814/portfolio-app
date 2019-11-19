import React, { useState, useContext } from 'react';
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
import './styles/keyframes.css';
import './components/pages/pages.css';

const App = () => {
  const { activePage, setActivePage } = useContext(Context)

  const [scNum, setScNum] = useState(0)

  const onScroll = () => {
    // const scrollPercent = Math.floor(window.scrollY / (document.body.getBoundingClientRect().height - window.innerHeight) * 100)

    // if(scrollPercent > 0 && scrollPercent <= 25) {
    //   setActivePage('home')
    // } else if(scrollPercent > 25 && scrollPercent <= 50) {
    //   setActivePage('about')
    // } else if(scrollPercent > 50 && scrollPercent <= 75) {
    //   setActivePage('works')
    // } else if(scrollPercent > 75 && scrollPercent <= 100) {
    //   setActivePage('contact')
    // }

    // if(window.scrollY > scNum) {
    //   if(activePage === 'home') {
    //     setActivePage('about')
    //   }
    //   if(activePage === 'about') {
    //     setActivePage('works')
    //   }
    //   if(activePage === 'works') {
    //     setActivePage('contact')
    //   }
    //   setScNum(window.scrollY)
    // } else if(window.scrollY < scNum) {
    //   if(activePage === 'contact') {
    //     setActivePage('works')
    //   }
    //   if(activePage === 'works') {
    //     setActivePage('about')
    //   }
    //   if(activePage === 'about') {
    //     setActivePage('home')
    //   }
    //   setScNum(window.scrollY)
    // }
  }

  window.addEventListener('scroll', onScroll)
  
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