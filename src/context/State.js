import React, { useReducer } from 'react';
import Context from './Context';
import Reducer from './Reducer';

const State = props => {
  const initialState = {
    data: 1
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  // Get data
  const setData = (date) => {
    dispatch({
      type: 'set-data',
      payload: date
    });
  }

  return (
    <Context.Provider
      value={{
        data: state.data,
        setData
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;