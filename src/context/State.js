import React, { useReducer } from 'react';
import Context from './Context';
import Reducer from './Reducer';

const State = props => {
  const initialState = {
    myName: 'H',
    activePage: 'home', // values: home, about, works, contact
    pagesStatus: 'zoom-out',
    pagesPos: 'center', // t-l | t-r | b-l | b-r | center
    aPageIsActive: false, // sets too true After 1s for anims
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  // Get data
  const setActivePage = (page) => {
    dispatch({
      type: 'set-active-page',
      payload: page
    });

    if(page === 'home') {
      dispatch({
        type: 'set-active-page',
        payload: page
      });
    } else if(page === 'about') {
      dispatch({
        type: 'set-active-page',
        payload: page
      });
    } else if(page === 'works') {
      dispatch({
        type: 'set-active-page',
        payload: page
      });
    } else if(page === 'contact') {
      dispatch({
        type: 'set-active-page',
        payload: page
      });
    }

    if(page !== 'from-menu') {
      setTimeout(() => {
        dispatch({
          type: 'set-a-page-is-active',
          payload: true
        });
      }, 1000);
    } 
  }

  const setPagesStatus = (status) => {
    const type = 'set-pages-status'
    const payload = status ? status : state.pagesStatus === 'zoom-in' ? 'zoom-out' : 'zoom-in'
    
    dispatch({
      type,
      payload
    });
  }

  return (
    <Context.Provider
      value={{
        myName: state.myName,
        activePage: state.activePage,
        pagesStatus: state.pagesStatus,
        aPageIsActive: state.aPageIsActive,
        pagesPos: state.pagesPos,
        setActivePage,
        setPagesStatus,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;