import React, { useReducer } from 'react';
import Context from './Context';
import Reducer from './Reducer';

const State = props => {
  const initialState = {
    myName: 'waiting to do amaizing job',
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
        setActivePage
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;