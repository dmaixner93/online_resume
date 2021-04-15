const reducer = (state, action) => {
  switch(action) {
    case "dark":
      return "dark";
    case "light":
      return "light";
    default:
      return "light";
  }
}

export default reducer;