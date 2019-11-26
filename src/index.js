import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import BackButton from './components/layout/BackButton.js';
import BackScroll from './components/pages/BackScroll.js';
import Pages from './components/pages/Pages.js';
import Modal from './components/modal/Modal';

import State from './context/State.js';
import Context from './context/Context.js';

import './styles/index.css';
import './styles/haden.css';
import './styles/zIndex.css';
import './styles/keyframes.css';

const App = () => {
  const { aPageIsActive, setActivePage, setPagesStatus, setPagesTransiting } = useContext(Context)

  const onKeyUp = (e) => {
    if(e.keyCode === 27 && aPageIsActive) {
      setActivePage('from-menu')
      setPagesStatus('zoom-out')
      setPagesTransiting(true, 'come')
    }

    if(e.keyCode === 72 && !aPageIsActive) {
      setActivePage('home')
      setPagesStatus('zoom-in')
      setPagesTransiting(true, 'go')
    }

    if(e.keyCode === 65 && !aPageIsActive) {
      setActivePage('about')
      setPagesStatus('zoom-in')
      setPagesTransiting(true, 'go')
    }

    if(e.keyCode === 87 && !aPageIsActive) {
      setActivePage('works')
      setPagesStatus('zoom-in')
      setPagesTransiting(true, 'go')
    }

    if(e.keyCode === 67 && aPageIsActive) {
      setActivePage('contact')
      setPagesStatus('zoom-in')
      setPagesTransiting(true, 'go')
    }
  }

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
    <div tabIndex='1' onKeyUp={onKeyUp}>
      <Modal />
      <BackButton />
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

// NOTES
// get div drop anim form net( :( ) for modal droping out
// redefine scroll event
// "kollan" in english
// "kollan": define gravity in code, css or js
// select last brothers of an element for layers hover brightness
// cross-fade() --> for bckground ==> search it
// how to have color based on background
// round the mosPos in pages.js
// bring layer heading to middle | my best => layer.paddingTop = (page.heihgt - text-height) / 2
// ::before ::after
// prevent titles from hilighting
// arrows to travers betwenen pages