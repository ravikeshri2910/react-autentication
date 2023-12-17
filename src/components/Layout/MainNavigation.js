import { useContext, useEffect, useState } from 'react';
import { Link ,useHistory} from 'react-router-dom';

import classes from './MainNavigation.module.css';
import AuthContext from '../../Store/AuthContext';


const MainNavigation = () => {

  const [isLoggedIn , setIsLoggedIn] = useState(false)
  const authCntx = useContext(AuthContext)
  const History = useHistory()

  // const isLoggedIn = authCntx.isLoggedIn

  const token = localStorage.getItem('token')

  useEffect(()=>{
    if(token){
      setIsLoggedIn(true)
    }else{
      setIsLoggedIn(false)
      console.log('logOut')
    }

  },[token])


  const logOutHandler = () =>{
    authCntx.logout()
    localStorage.removeItem('token')
    History.push('/auth')
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
