import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { useAuth } from '../utils/auth';

function Login() {
      const auth = useAuth();
      const navigate = useNavigate();
      const [user, setUser] = useState('');

      const handleLogin = (e)=>{
            e.preventDefault();

            redirect();
      }

      const redirect =()=>{
            auth.login(user);

            navigate('/', {replace: true});
      }

      return (
            <>
                  <h1>Fill the form and click login button</h1>
                  <h3>You will be directed to profile page.</h3>
                  
                  <form>
                        <label> Username: </label>
                        <input type='text' value={user} onChange={(e)=> setUser(e.target.value)} required/>
                  
                        <button type="submit" onClick={handleLogin}>Login</button>
                  </form>
            </>
      )
}

export default Login