import React from 'react';
import { useAuth } from '../utils/auth';

function Dashboard() {
      const auth = useAuth();

      const logoutHandler =()=>{
            auth.logout();
      }

      return (
            <div>
                  <h1>Dashboard</h1>
                  <button onClick={logoutHandler}>LOGOUT</button>
            </div>
      )
}

export default Dashboard