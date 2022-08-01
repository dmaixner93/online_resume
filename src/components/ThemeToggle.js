import React, { useContext, useRef, forwardRef } from 'react';
import { ThemeContext } from "../contexts/theme.context";
import Tooltip from '@material-ui/core/Tooltip';
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import Brightness3Icon from "@material-ui/icons/Brightness3";

const ThemeToggle = forwardRef(function ThemeToggle(props, ref) {
  const { theme, dispatch } = useContext(ThemeContext);
  const html = useRef(document.documentElement);

  if(theme === "dark") {
    html.current.classList.add("dark");
  } else {
    html.current.classList.remove("dark");
  }

  return (
    <React.Fragment>
      <Tooltip
        placement="bottom-start"
        aria-label="Toggle light/dark theme"
        title="Toggle light/dark theme">
        <span className="w-8 h-auto text-gray-700 dark:text-gray-300 cursor-pointer">
          {theme === "dark" ? (
            <button
              id="themeToggle"
              className="opacity-80 hover:opacity-100 focus:outline-none"
              aria-label="themeToggle">
              <BrightnessHighIcon onClick={() => dispatch("light")} />
            </button>
          ) : (
            <button className="opacity-80 hover:opacity-100 focus:outline-none" aria-label="themeToggle">
              <Brightness3Icon onClick={() => dispatch("dark")} />
            </button>
          )}
        </span>
      </Tooltip>
    </React.Fragment>
  );
});

export default ThemeToggle;
