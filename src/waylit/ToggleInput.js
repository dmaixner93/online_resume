import React from 'react';
import { useToggle } from './hooks/useToggle';

const ToggleInput = (props) => {
  const [ state, toggle ] = useToggle(true);
  return (
      <React.Fragment>
        <div className="relative mx-auto flex justify-center items-center">
          <input id="id_is_first_h1b" name="is_first_h1b" type="checkbox" hidden />
          <div onClick={() => toggle(state)}
            tabIndex="0" aria-checked="true"
            className={`relative inline-block flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:input-focus ${state ? 'bg-indigo-600 dark:bg-indigo-300' : 'bg-gray-200 dark:bg-gray-700'}`}>
            <div aria-hidden="true"
              className={`inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200 ${state ? 'translate-x-5' : 'translate-x-0'}`}></div>
          </div>
        </div>
      </React.Fragment>
  )
}

export default ToggleInput;