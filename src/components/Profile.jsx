import React from 'react'
import { useNavigate } from 'react-router';
import { useAuth } from '../utils/auth'

function Profile() {
      const auth = useAuth();
      const navigate = useNavigate();

      const handleLogout =()=>{
            auth.logout();
            
            navigate('/login');
      }
      
      return (
            <div>
                  <h1>ProfilePage</h1>
                  <h1>Welcome {auth.user}</h1>
                  <button onClick={handleLogout}>Logout</button>
            </div>
      )
}

export default Profile