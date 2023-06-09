import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { StylesProvider } from '@material-ui/core/styles';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from './components/scrollToTop';

const theme = createTheme({
  breakpoints: {
    values: {
      'xs': 0,
      'sm': 640,
      'md': 768,
      'lg': 1280,
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 16,
  },
  palette: {
    secondary: {
      main: "#0EA5E9",
    },
  },
});

window.muiTheme = {...theme};

ReactDOM.render(
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <Router>
          <ScrollToTop />
          <App />
        </Router>
      </StylesProvider>
    </ThemeProvider>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
