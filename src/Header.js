import React, { createRef } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ThemeToggle from './ThemeToggle';

const Header = ({ left, backArrow }) => {
  const tooltipRef = createRef();
  /** TODO: IF back arrow is true => show back arrow
   * ELSE => show logo
   * - Move Page titles to col-2 of grid
   */
  return (
    <header className="fixed z-10 left-0 h-20 w-full">
      <div className="relative grid grid-cols-6 items-center w-full h-full">
        <div className="col-span-1 pl-8 h-full flex justify-start items-center">
          { backArrow ?
            <div className="w-6 h-6">
              <ArrowBackIcon />
            </div> : null
          }
          {left}
        </div>
        <div className="col-span-1 pr-8 col-start-6 h-full flex justify-end items-center">
          <ThemeToggle ref={tooltipRef} />
        </div>
      </div>
    </header>
  )
}

export default Header;