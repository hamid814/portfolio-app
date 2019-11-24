import React, { useReducer } from 'react';
import Context from './Context';
import Reducer from './Reducer';

const State = props => {
  const initialState = {
    myName: 'H',
    activePage: 'home', // values: home, about, works, contact
    pagesStatus: 'zoom-out', // values: zoom-in | zoom-out
    pagesPos: 'bottom-left', // t-l | t-r | b-l | b-r
    aPageIsActive: false, // sets too true After 1s for anims
    pageDest: 'none', // dest-home | dest-about | dest-work | dest-contact
    pagesTransiting: { status: false, direction: 'come' },// true when pages is zoomin in or out
    pagesTraversing: { status: false, destination: 'none' }, // true when going from one page to another
    // MODAL STUFF
    modalStatus: 'off',
    modalData: null
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
        type: 'set-pages-pos',
        payload: 'top-left'
      });
    } else if(page === 'about') {
      dispatch({
        type: 'set-pages-pos',
        payload: 'top-right'
      });
    } else if(page === 'works') {
      dispatch({
        type: 'set-pages-pos',
        payload: 'bottom-right'
      });
    } else if(page === 'contact') {
      dispatch({
        type: 'set-pages-pos',
        payload: 'bottom-left'
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

  const setApageIsActive = (status) => {
    dispatch({
      type: 'set-a-page-is-active',
      payload: status
    })
  }

  const setModal = (status, data) => {
    dispatch({
      type: 'set-modal',
      payload: {
        status,
        data
      } 
    })
  }

  const traversPages = (page) => {
    const type = 'set-pages-traversing'

    const placeOfPage = {
      home: {
        place: 'top-left'
      },
      about: {
        place: 'top-right'
      },
      works: {
        place: 'bottom-right'
      },
      contact: {
        place: 'bottom-left'
      }
    }

    const destination = 'dest-' + placeOfPage[page].place

    if(!state.pagesTraversing.status) {
      dispatch({
        type,
        payload: {
          status: true,
          destination
        }
      })
    }

    setTimeout(() => {
      // setActivePage(page)
    }, 500);

    setTimeout(() => {
      dispatch({
        type,
        payload: {
          status: false,
          destination: 'none'
        }
      })
    }, 1300);
  }

  const setPagesTransiting = (status, direction) => {
    const type = 'set-pages-transiting'
    
    dispatch({
      type,
      payload: {
        status,
        direction
      }
    })

    setTimeout(() => {
      dispatch({
        type,
        payload: {
        status: false,
        direction
      }
      })
    }, 1300);
  }

  return (
    <Context.Provider
      value={{
        myName: state.myName,
        activePage: state.activePage,
        pagesStatus: state.pagesStatus,
        aPageIsActive: state.aPageIsActive,
        pagesPos: state.pagesPos,
        modalStatus: state.modalStatus,
        modalData: state.modalData,
        pagesTransiting: state.pagesTransiting,
        pagesTraversing: state.pagesTraversing,
        setActivePage,
        setPagesStatus,
        setApageIsActive,
        traversPages,
        setPagesTransiting,
        setModal,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;