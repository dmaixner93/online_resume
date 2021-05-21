function isTouchScreen() {
  if(window.ontouchstart !== null) {
    return true;
  } else {
    return false;
  }
}

export { isTouchScreen };