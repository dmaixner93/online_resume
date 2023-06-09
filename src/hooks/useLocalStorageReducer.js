import { useReducer, useEffect } from 'react';

function useLocalStorageReducer(key, value, reducer) {
  const [state, dispatch] = useReducer(reducer, value);
  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [state, key]);
  return [state, dispatch];
}

export default useLocalStorageReducer;