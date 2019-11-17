export default (state, action) => {
  switch (action.type) {
    case 'set-active-page':
      return {
        ...state,
        activePage: action.payload
      }
    default:
      return state;
  }
};