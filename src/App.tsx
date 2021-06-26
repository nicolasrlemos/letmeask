import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';

import { ThemeProvider, DefaultTheme } from 'styled-components';
import { AuthContextProvider } from './contexts/AuthContext';

import 'react-toastify/dist/ReactToastify.min.css';
import { AdminRoom } from './pages/AdminRoom';
import usePersistedState from './hooks/usePersistedState';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import GlobalStyles from './styles/global';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Switch>
            <Route path="/" exact>
              <Home toggleTheme={toggleTheme} />
            </Route>
            <Route path="/rooms/new">
              <NewRoom toggleTheme={toggleTheme} />
            </Route>
            <Route path="/rooms/:id">
              <Room toggleTheme={toggleTheme} />
            </Route>
            <Route path="/admin/rooms/:id">
              <AdminRoom toggleTheme={toggleTheme} />
            </Route>
          </Switch>
        </ThemeProvider>
      </AuthContextProvider>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
