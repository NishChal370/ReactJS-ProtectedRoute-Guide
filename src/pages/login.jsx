import React, { useState } from 'react'
import { useAuth } from '../utils/auth';

function Login() {
      const auth = useAuth();
      const [user, setUser] = useState('');

      const inputChangeHandler =(e)=>{
            e.preventDefault();
            const { value } = e.target;

            setUser(value);
      }

      const loginHandler =()=>{
            auth.login(user);
      }

      return (
            <div>
                  <h1>LOGIN Page</h1>

                  <form>
                        <input type="text" value={user} onChange={inputChangeHandler} required/>

                        <button type='submit' onClick={loginHandler}>LOGIN</button>
                  </form>
                  
            </div>
      )
}

export default Login