import { createContext } from "react";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";
import themeReducer from '../reducers/theme.reducer';
import { themeHelper } from "../utils/themeHelpers";
// import { useToggle } from "../hooks/useToggle";

export const ThemeContext = createContext();

const clientPreference = themeHelper.checkSitePreference();

export const ThemeProvider = (props) => {
  const [theme, dispatch] = useLocalStorageReducer('theme', clientPreference.theme, themeReducer);
  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
        { props.children }
    </ThemeContext.Provider>
  );
};
