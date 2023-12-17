import { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import AuthContext from '../../Store/AuthContext';

const MainNavigation = () => {

  const authCntx = useContext(AuthContext)

  const isLoggedIn = authCntx.isLoggedIn

  const logOutHandler = () =>{
    authCntx.logout()
  }

  // console.log('authCntx', authCntx.isLoggedIn)
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && <li>
            <Link to='/auth'>Login</Link>
          </li>}

          {isLoggedIn && <li>
            <Link to='/profile'>Profile</Link>
          </li>}

          {isLoggedIn && <li>
            <button onClick={logOutHandler}>Logout</button>
          </li>}

        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
