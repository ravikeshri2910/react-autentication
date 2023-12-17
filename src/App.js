import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import { useContext } from 'react';
import AuthContext from './Store/AuthContext';

function App() {

  const autCntxt = useContext(AuthContext);

  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/auth'>
          <AuthPage />
        </Route>

        <Route path='/profile'>
          {autCntxt.isLoggedIn && <UserProfile />}
          {!autCntxt.isLoggedIn && <Redirect to='/auth' />}
        </Route>

        <Route path='*'>
          <Redirect to = '/' />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
