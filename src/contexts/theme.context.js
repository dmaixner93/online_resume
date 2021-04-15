import { createContext } from "react";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";
import themeReducer from '../reducers/theme.reducer';
// import { useToggle } from "../hooks/useToggle";

export const ThemeContext = createContext();

const defaultVal = window.localStorage.getItem("theme") || "light";

export const ThemeProvider = (props) => {
  const [theme, dispatch] = useLocalStorageReducer("theme", defaultVal, themeReducer);
  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
        {props.children}
    </ThemeContext.Provider>
  );
};
