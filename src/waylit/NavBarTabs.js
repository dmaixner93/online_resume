import { useState } from 'react';
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

const NavBarTabs = () => {
  const [ active, setActive ] = useState([false, true, false, false,]);

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
    <div className="flex items-center lg:px-0">
      <div className="lg:block lg:ml-8">
        <div className="grid grid-flow-col grid-cols-auto gap-x-2">
          {tabs()}
        </div>
      </div>
    </div>
  )
}

export default NavBarTabs;