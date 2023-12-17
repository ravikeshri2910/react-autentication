import { useContext, useRef } from 'react';
import classes from './ProfileForm.module.css';
import AuthContext from '../../Store/AuthContext';

const ProfileForm = () => {

  const enteredNewPasswordRef = useRef()
  const autCntxt = useContext(AuthContext)

  const submitHandler = async (event) => {

    try {
      event.preventDefault()

      const enteredPassword = enteredNewPasswordRef.current.value

      const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBG525dQLh8AKxMmQHyiyUSkRG5YJkahPw',{
        method : 'POST',
        body : JSON.stringify({
          idToken: autCntxt.token,
          password: enteredPassword,
          returnSecureToken: true
        }),
        headers : {
          'Content-Type': 'application/json'
        }
      })

      const data = await res.json()

      autCntxt.login(data.idToken)

      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={enteredNewPasswordRef} />
      </div>
      <div className={classes.action}>
        <button type='submit'>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
