import { useState } from 'react';

const useSelectInput = (value) => {
  const [ state, setState ] = useState(value);

}

/**
 * value = <Object> { id: #, img: <...>, name: <...>, }
 */