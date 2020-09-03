import React, { useReducer } from 'react';
import Context from './Context';
import Reducer from './Reducer';

const State = (props) => {
  const initialState = {
    myName: 'H', // cans: api, // change all links to github after changing name
    // techs:
    myTechs: [
      'react',
      'redux',
      'context-api',
      'typescript',
      'javascript',
      'html',
      'css(Modern), sass, framewoks',
      'UI',
      'api',
      'psd to HTML',
      'REST api',
      'ExpressJS',
      'nodeJS',
      'NPM',
      'Api Integration',
      'web components',
      'deno',
      'HTTP',
      'mongodb',
      'deployments: heroku, netlify',
      'styled-components and CSS-in-JS',
      'redis-cashing',
      'template-engines',
      'Passportjs',
      'google auth',
      'server-side-rendering with pug, ejs, Handlebars',
      'bare security with sessions and cookies',
      'solid design principles: single responsibities',
      'documenting with docusaurus',
      'npm & yarn',
      (['design prenciples']: [
        'single responsibiti principle',
        'open/closed principle',
        'liskov substitution principle',
        'interface segregation principle',
        'dependency inversion principle'
      ]),
      (['design patterns']: [
        'null object pattern',
        'builder pattern',
        'singleton pattern',
        'facade patrern',
        'command pattern'
      ]),
    ],
    myWantedTechs: [
      'web components',
      'GatsbyJS',
      'NEXTjs',
      'HUGO (gohugo.io)',
      'react-native',
      'electron',
      'url shorteners',
      'polymerJS',
      'deployment: degetaloacen',
      'jsDoc',
      'PYTHON',
      'express sessions',
      'tailwindcss',
    ],
    javascript: [
      'ES5/ES6/ES7',
      'Promises, Async/Await, Axios',
      'Context API, Hooks',
      'GraphQL, REST APIs',
      'd3 with React',
      'Testing: Jest, Enzyme, Mocha',
      'OAuth, Passport JS, JWTs',
    ], //copy from stoutlabs
    APIs: [
      'Stripe',
      'Sendgrid',
      'Mailchimp',
      'Youtube',
      'Twitch',
      'Discord',
      'Reddit',
      'DarkSky',
      'and many more',
    ], //copy from stoutlabs
    HTMLCSS: [
      'HTML5 & CSS3',
      'Responsive Design',
      'SASS & LESS',
      'CSS-in-JS',
      'Mustache, Handlebars, Pug',
      'Bulma, Bootstrap, Materialize, tailwindcss',
    ], //copy from stoutlabs
    BuildWorkflow: [
      'Github & Bitbucket',
      'Webpack',
      'yarn/npm',
      'Linux and Windows CLI',
      'Chrome Dev Tools',
      'Netlify (static hosting)',
      'DigitalOcean, Heroku (dynamic hosting)',
      'Docker, Docker Compose',
      'VSCode',
    ], //copy from stoutlabs
    activePage: 'about', // values: home, about, works, contact, none
    pagesStatus: 'zoom-in', // values: zoom-in | zoom-out
    pagesPos: 'top-right', // t-l | t-r | b-l | b-r
    aPageIsActive: true, // sets too true After 1s for anims
    pageDest: 'none', // dest-home | dest-about | dest-work | dest-contact
    pagesTransiting: { status: false, direction: 'come' }, // true when pages is zoomin in or out
    pagesTraversing: { status: false }, // true when going from one page to another
    // MODAL STUFF
    modalStatus: 'first-off',
    modalData: null,
    // is being build
    isDeveloping: true,
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  // Get data
  const setActivePage = (page) => {
    dispatch({
      type: 'set-active-page',
      payload: page,
    });

    if (page === 'home') {
      dispatch({
        type: 'set-pages-pos',
        payload: 'top-left',
      });
    } else if (page === 'about') {
      dispatch({
        type: 'set-pages-pos',
        payload: 'top-right',
      });
    } else if (page === 'works') {
      dispatch({
        type: 'set-pages-pos',
        payload: 'bottom-right',
      });
    } else if (page === 'contact') {
      dispatch({
        type: 'set-pages-pos',
        payload: 'bottom-left',
      });
    }

    if (page !== 'from-menu') {
      setTimeout(() => {
        dispatch({
          type: 'set-a-page-is-active',
          payload: true,
        });
      }, 1000);
    }
  };

  const setPagesStatus = (status) => {
    const type = 'set-pages-status';
    const payload = status
      ? status
      : state.pagesStatus === 'zoom-in'
      ? 'zoom-out'
      : 'zoom-in';

    dispatch({
      type,
      payload,
    });
  };

  const setApageIsActive = (status) => {
    dispatch({
      type: 'set-a-page-is-active',
      payload: status,
    });
  };

  const setModal = (status, data) => {
    dispatch({
      type: 'set-modal',
      payload: {
        status,
        data,
      },
    });
  };

  const traversPages = (page) => {
    const type = 'set-pages-traversing';

    if (!state.pagesTraversing.status) {
      dispatch({
        type,
        payload: {
          status: true,
        },
      });
    }

    setTimeout(() => {
      setActivePage(page);
    }, 500);

    setTimeout(() => {
      dispatch({
        type,
        payload: {
          status: false,
        },
      });
    }, 1750);
  };

  const setPagesTransiting = (status, direction) => {
    const type = 'set-pages-transiting';

    dispatch({
      type,
      payload: {
        status,
        direction,
      },
    });

    setTimeout(() => {
      dispatch({
        type,
        payload: {
          status: false,
          direction,
        },
      });
    }, 1300);
  };

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
        isDeveloping: state.isDeveloping,
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
