import Main from './Main';
import Waylit from './waylit/Waylit';
import Header from './Header';
import { ThemeProvider } from './contexts/theme.context';
import {
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <ThemeProvider>
      <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/waylit">
            <Waylit />
          </Route>
        </Switch>
    </ThemeProvider>
  );
}

export default App;
