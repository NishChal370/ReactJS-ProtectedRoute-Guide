import { useState } from "react";
import { AuthContext } from "./AuthContext";

export function AuthProvider({children}) {
      const [user, setUser] = useState(null);

      const login = user =>{
            setUser(user);
      }

      const logout = user =>{
            setUser(user);
      }

      return (
            <AuthContext.Provider value={{user, login, logout}}>
                  {children}
            </AuthContext.Provider>
      )
}
