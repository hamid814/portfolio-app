export default (state, action) => {
  switch (action.type) {
    case 'set-active-page':
      return {
        ...state,
        activePage: action.payload
      }
    case 'set-pages-status':
      if(action.payload === 'zoom-out') {
        return {
          ...state,
          pagesStatus: action.payload,
          aPageIsActive: false
        }
      } else if(action.payload === 'zoom-in') {
        return {
          ...state,
          pagesStatus: action.payload,
        }
      }
      break
    case 'set-a-page-is-active':
      return {
        ...state,
        aPageIsActive: action.payload
      }
    default:
      return state;
  }
};