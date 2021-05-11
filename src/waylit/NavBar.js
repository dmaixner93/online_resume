import React, { useState } from 'react';
import NavBarTab from "./NavBarTab";
import { v4 as uuidv4 } from "uuid";
import {
  Planning,
  Positions,
  ClipBoard,
  Dashboard,
} from "../static/waylit/svg/NavBarIcons";

const icons = {
  cases: <ClipBoard />,
  positions: <Positions />,
  plannning: <Planning />,
  dashboard: <Dashboard />,
};

const NavBar = () => {
  const [ active, setActive ] = useState([false, false, false, false,]);

  const toggleActive = idx => {
    const tabs = active.map((tab, i) => idx === i ? active[i] = true : active[i] = false);
    setActive(tabs);
  }

  const tabs = () => {
    const tabElements = [];
    let i = 0;
    for (let label in icons) {
      tabElements.push(
        <NavBarTab
          key={uuidv4()}
          index = {i}
          active={active[i]}
          icon={icons[label]}
          label={label}
          toggle={toggleActive}
        />
      );
      i++;
    }
    return tabElements;
  };

  return (
    <nav className="bg-indigo-600 shadow-md rounded-md max-w-7xl w-full mx-auto px-2 sm:px-4 lg:px-0">
      <div className="relative mx-6 xl:mx-auto flex items-center justify-between h-16">
        <div className="flex items-center px-2 lg:px-0">
          <div className="lg:block lg:ml-8">
            <div className="grid grid-flow-col grid-cols-auto gap-x-2">
              {tabs()}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
