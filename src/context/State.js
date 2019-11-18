import React, { useReducer } from 'react';
import Context from './Context';
import Reducer from './Reducer';

const State = props => {
  const initialState = {
    myName: 'H',
    activePage: 'home', // values: home, about, works, contact
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  // Get data
  const setActivePage = (page) => {
    dispatch({
      type: 'set-active-page',
      payload: page
    });
  }

  return (
    <Context.Provider
      value={{
        myName: state.myName,
        activePage: state.activePage,
        setActivePage
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;