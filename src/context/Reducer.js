export default (state, action) => {
  switch (action.type) {
    case 'set-active-page':
      return {
        ...state,
        activePage: action.payload
      }
    case 'set-pages-status':
      return {
        ...state,
        pagesStatus: action.payload
      }
    default:
      return state;
  }
};