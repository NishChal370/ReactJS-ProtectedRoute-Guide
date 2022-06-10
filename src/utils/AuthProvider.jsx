import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from './AuthContext';


function AuthProvider({children}) {
      const navigate =  useNavigate();
      const [user, setUser] = useState(localStorage.key('isLogged'));
      

      const login = (user)=>{
            setUser(user);
            localStorage.setItem('isLogged', user);

            navigate('/');
      }

      const logout = (user)=>{
            setUser(user);
            
            localStorage.clear();
      }

      return (
            <AuthContext.Provider value={{ user, login, logout, }}>
                  {children}
            </AuthContext.Provider>
      )
}

export default AuthProvider