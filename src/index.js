import React, { useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';

import Context from './context/Context';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Menu from './components/layout/Menu.js';
import BackScroll from './components/pages/BackScroll.js';
import Pages from './components/pages/Pages.js';
import Modal from './components/modal/Modal';

import State from './context/State.js';

import './styles/index.css';
import './styles/haden.css';
import './styles/zIndex.css';
import './styles/keyframes.css';

const App = () => {
  const { setApageIsActive } = useContext(Context)

  useEffect(() => {
    setTimeout(() => {
        setApageIsActive(false);
    }, 500);
    // eslint-disable-next-line
  }, [])

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
      <Modal />
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

// NOTES
// get div drop anim form net( :( ) for modal droping out