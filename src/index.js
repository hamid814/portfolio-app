import React, { useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';

import BackButton from './components/layout/BackButton.js';
import BackScroll from './components/pages/BackScroll.js';
import Pages from './components/pages/Pages.js';
import Modal from './components/modal/Modal';
import AskColor from './components/layout/AskColor';
import BetaBadge from './components/layout/BetaBadge';

import State from './context/State.js';
import Context from './context/Context.js';

import './styles/index.scss';
import './styles/haden.scss';
import './styles/zIndex.scss';
import './styles/keyframes.scss';
// import './styles/media900px.scss';

const App = () => {
  const { aPageIsActive, setActivePage, setPagesStatus, setPagesTransiting, pagesTransiting, pagesTraversing } = useContext(Context)

  useEffect(() => {
    // set status to zoom-out if its production build
    
    if(process.env.NODE_ENV === 'production') {
      setActivePage('from-menu')
      setPagesStatus('zoom-out')
      setPagesTransiting(true, 'come')
    }

    // eslint-disable-next-line
  }, [])

  const onKeyUp = (e) => {
    if(e.keyCode === 27 && aPageIsActive && !pagesTraversing.status) {
      setActivePage('from-menu')
      setPagesStatus('zoom-out')
      setPagesTransiting(true, 'come')
    }

    if(e.keyCode === 72 && !aPageIsActive && !pagesTransiting.status) {
      setActivePage('home')
      setPagesStatus('zoom-in')
      setPagesTransiting(true, 'go')
    }

    if(e.keyCode === 65 && !aPageIsActive && !pagesTransiting.status) {
      setActivePage('about')
      setPagesStatus('zoom-in')
      setPagesTransiting(true, 'go')
    }

    if(e.keyCode === 87 && !aPageIsActive && !pagesTransiting.status) {
      setActivePage('works')
      setPagesStatus('zoom-in')
      setPagesTransiting(true, 'go')
    }

    if(e.keyCode === 67 && !aPageIsActive && !pagesTransiting.status) {
      setActivePage('contact')
      setPagesStatus('zoom-in')
      setPagesTransiting(true, 'go')
    }
  }

  return (
    <div tabIndex='1' onKeyUp={onKeyUp}>
      <Modal />
      <AskColor />
      <BackButton />
      <Pages />
      <BackScroll />
      <BetaBadge />
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