import React from 'react';
import Main from './Main';
import { CSSTransition } from 'react-transition-group'
import Waylit from './waylit/Waylit';
import Header from './Header';
import { ThemeProvider } from './contexts/theme.context';
import {
  Switch,
  Route,
} from 'react-router-dom';

const routes = [
  { path: '/', Component: Main, Header: Header, isHomePage: true, pageTitle: false},
  { path: '/waylit', Component: Waylit, Header: Header, isHomePage: false, pageTitle: 'Waylit'},
]

function App() {
  // const [ inProp, setInProp ] = useState(true);
  return (
    <ThemeProvider>
        <div className="relative">
          <Switch>
            <React.Fragment>
              {
                routes.map(({path, Component, Header, isHomePage, pageTitle}) => (
                  <Route key={path} exact path={path}>
                    {({ match }) => (
                      <CSSTransition
                        in={match != null}
                        timeout={300}
                        classNames="page"
                        unmountOnExit
                      >
                        <div className="page shadow-2xl">
                          <Component header={<Header homePage={isHomePage} pageTitle={pageTitle} />} />
                        </div>
                      </CSSTransition>
                    )}
                  </Route>
                ))
              }
            </React.Fragment>
          </Switch>
        </div>
    </ThemeProvider>
  );
}

export default App;
