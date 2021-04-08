import { createContext } from 'react';
import useToggle from '../hooks/useToggle';

export const ThemeContext = createContext();

export const ThemeProvider = props => {
  const [ darkMode, setDarkMode ] = useToggle(true);
  
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {props.children}
    </ThemeContext.Provider>
  )
}