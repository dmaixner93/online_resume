import { createContext } from "react";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";
import themeReducer from '../reducers/theme.reducer';
import { themeHelper } from "../utils/themeHelpers";
// import { useToggle } from "../hooks/useToggle";

export const ThemeContext = createContext();

const clientPreference = themeHelper();

export const ThemeProvider = (props) => {
  const [theme, dispatch] = useLocalStorageReducer('theme', clientPreference, themeReducer);
  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
        { props.children }
    </ThemeContext.Provider>
  );
};
