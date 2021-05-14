import React, { useReducer } from 'react';
import selectReducer from './reducers/selectReducer';
import { selectInputData } from '../static/waylit/sampleData';
import UpDownChevrons from '../static/waylit/svg/UpDownChevrons';
import Checkmark from '../static/waylit/svg/Checkmark';

const DropDown = (props) => {
  const { state, dispatch } = props;
  return (
    <React.Fragment>
    { state.isOpen ? 
      (
        <ul
          className="absolute z-10 mt-2 w-full bg-white dark:bg-gray-800 shadow-lg max-h-56 rounded-md text-base ring-1 ring-gray-300 dark:ring-gray-700 overflow-auto focus:outline-none sm:text-sm"
          tabIndex="-1"
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-option-3">
          {selectInputData.map(user => (
              <li
                key={user.id}
                onClick={ () => dispatch({ type: 'SELECT', selected: user }) }
                className={`${user.id === state.selected.id ? 'font-semibold' : 'font-normal'} group cursor-pointer select-none relative p-3 pr-9 text-gray-900 dark:text-gray-100 bg-transparent hover:bg-indigo-600 dark:hover:bg-indigo-300`}>
                <div className="flex items-center">
                  <img src={user.img} alt={user.name} className="flex-shrink-0 h-6 w-6 rounded-full"/>
                  <span className="ml-3 block truncate group-hover:text-white dark:group-hover:text-gray-800">{user.name}</span>
                </div>
                { user.id === state.selected.id ?
                  (<span className="absolute inset-y-0 right-0 flex items-center pr-4 group-hover:text-white dark:group-hover:text-gray-800">
                    <Checkmark />
                  </span>) : null }
              </li>
          ))}
        </ul>
      ) : null }
    </React.Fragment>
  )
}

const SelectInput = (props) => {
  const initialVal = {
    isOpen: false,
    selected: selectInputData[0]
  };
  const [ state, dispatch ] = useReducer(selectReducer, initialVal);
  return (
    <div>
      <label id="listbox-label" name="assign to" className="hidden"></label>
      <div className="relative">
        <button
            type="button"
            className="relative w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-sm pl-3 pr-10 py-3 text-left cursor-default dark:text-gray-100 focus:input-focus sm:text-sm"
            onClick={() => state.isOpen ? dispatch({ type: "CLOSE" }) : dispatch({ type: "OPEN" })}
            aria-haspopup="listbox"
            aria-expanded="true"
            aria-labelledby="listbox-label"
          >
          <span className="flex items-center">
            <img src={state.selected.img} alt={state.selected.name} className="flex-shrink-0 h-6 w-6 rounded-full" />
            <span className="ml-3 block truncate">{state.selected.name}</span>
          </span>
          <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <UpDownChevrons />
          </span>
        </button>
        <DropDown
          state={state}
          dispatch={dispatch}
        />
      </div>
    </div>
  );
};

export default SelectInput;
