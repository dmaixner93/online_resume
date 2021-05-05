import { useState } from 'react';
import Avatar from '../static/waylit/Avatar';
import UpDownChevrons from '../static/waylit/svg/UpDownChevrons';
import Checkmark from '../static/waylit/svg/Checkmark';

const SelectInput = (props) => {
  const [ isOpen, setIsOpen ] = useState(false);
  return (
    <div>
      <label id="listbox-label" name="assign to" className="hidden"></label>
      <div className="mt-1 relative">
        <button
            type="button"
            className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-3 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onClick={() => setIsOpen(!isOpen)}
            aria-haspopup="listbox"
            aria-expanded="true"
            aria-labelledby="listbox-label"
          >
          <span className="flex items-center">
            <Avatar />
            <span className="ml-3 block truncate">Tom Cook</span>
          </span>
          <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            {/* <!-- Heroicon name: solid/selector --> */}
            <UpDownChevrons />
          </span>
        </button>
        
        { isOpen ? 
        (<ul
          className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
          tabIndex="-1"
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-option-3">
            {/* <!--
              Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

              Highlighted: "text-white bg-indigo-600", Not Highlighted: "text-gray-900"
            --> */}
          <li
            className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
            id="listbox-option-0">
            <div className="flex items-center">
              <Avatar />
              {/* <!-- Selected: "font-semibold", Not Selected: "font-normal" --> */}
              <span className="font-normal ml-3 block truncate">Wade Cooper</span>
            </div>
              {/* <!--
                Checkmark, only display for selected option.

                Highlighted: "text-white", Not Highlighted: "text-indigo-600"
              --> */}
            <span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
              {/* <!-- Heroicon name: solid/check --> */}
              <Checkmark />
            </span>
          </li>

          {/* <!-- More items... --> */}
        </ul>) : null}
      </div>
    </div>
  );
};

export default SelectInput;
