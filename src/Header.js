import React, { createRef } from 'react';
import Logo from './assets/Logo';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const tooltipRef = createRef();
  return (
    <header className="fixed left-0 h-20 w-full">
      <div className="relative grid grid-cols-6 items-center w-full h-full">
        <div className="col-span-1 pl-8 h-full flex justify-start items-center">
          <Logo />
        </div>
        <div className="col-span-1 pr-8 col-start-6 h-full flex justify-end items-center">
          <ThemeToggle ref={tooltipRef} />
        </div>
      </div>
    </header>
  )
}

export default Header;