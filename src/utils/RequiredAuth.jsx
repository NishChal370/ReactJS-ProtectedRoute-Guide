import React from 'react'
import { useAuth } from './auth';
import { Navigate } from 'react-router-dom';

function RequiredAuth({children}) {
      const auth = useAuth();

      if (!auth.user) return <Navigate to='/login'/>

      return children;
      
}

export default RequiredAuth