import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../utils/auth'

function NavBar() {
      const auth = useAuth();

      return (
            <nav>
                  <NavLink to={'/'}>Profile</NavLink>
                 
                  <br/>
                  {!auth.user && (
                        <NavLink to={'/login'}>
                              Login
                        </NavLink>
                  )}
            </nav>
      )
}

export default NavBar