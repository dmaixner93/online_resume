const selectReducer = (state, action) => {
  switch(action.type) {
    case 'OPEN':
      return { ...state, isOpen: true };
    case 'CLOSE':
      return { ...state, isOpen: false };
    case 'SELECT':
      return { isOpen: false, selected: action.selected }
    default:
      return { isOpen: false };
  }
}

export default selectReducer;