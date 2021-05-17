import Main from './Main';
import Waylit from './waylit/Waylit';
import Header from './Header';
import Logo from './assets/Logo';
import SectionHeader from './utils/SectionHeader';
import { ThemeProvider } from './contexts/theme.context';
import {
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <ThemeProvider>
        <Switch>
          <Route exact path="/">
            <Main
              header={<Header homePage={true} />}
            />
          </Route>
          <Route exact path="/waylit">
            <Waylit
              header={
                <Header
                  pageTitle={
                    <SectionHeader
                      title={'Waylit'}
                      disableDivider={true}
                    />}
                />}
            />
          </Route>
        </Switch>
    </ThemeProvider>
  );
}

export default App;
