import { useContext, useRef } from 'react';
// import LightModeButton from './LightModeButton';
// import DarkModeButton from './DarkModeButton';
import { ThemeContext } from './contexts/theme.context';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import Brightness3Icon from '@material-ui/icons/Brightness3';

const ThemeToggle = props => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const html = useRef(document.documentElement);

  if(darkMode) {
    html.current.classList.add("dark");
  } else {
    html.current.classList.remove("dark");
  }

  return (
    <div className="h-auto w-auto relative">
      <div className="w-8 h-auto text-gray-300 cursor-pointer">
        { darkMode ? 
          <button className="focus:outline-none">
            <BrightnessHighIcon onClick={() => setDarkMode(false)} />
          </button>
          :
          <button className="focus:outline-none">
            <Brightness3Icon onClick={() => setDarkMode(true)} />
          </button>
        }
      </div>
    </div>
  )
}

export default ThemeToggle;