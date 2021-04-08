import { useState } from "react";

function useUpdateState(initialVal) {
  // call useState, "reserve piece of state"
  const [state, setState] = useState(initialVal);
  const update = (value) => {
    if (value) {
      setState(value);
    }
  };
  // return piece of state AND a function to toggle it
  return [state, update];
}

export default useUpdateState;