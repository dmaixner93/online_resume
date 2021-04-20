import { useReducer, useEffect } from 'react';

function useLocalStorageReducer(key, defaultVal, reducer) {
  const [state, dispatch] = useReducer(reducer, defaultVal);
  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [state, key]);
  return [state, dispatch];
}

export default useLocalStorageReducer;