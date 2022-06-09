import './App.css';
import { Login, NavBar, Profile } from './components';
import {
      Routes,
      Route,
} from "react-router-dom";

import RequiredAuth from './utils/RequiredAuth';
import { AuthProvider } from './utils/AuthProvider';

function App() {
      return (
            <div className="App">
                  <AuthProvider>
                        <NavBar/>

                        <Routes>
                              <Route path="/login" element={<Login />}/>

                              <Route path="/" element={
                                    <RequiredAuth>
                                          <Profile />
                                    </RequiredAuth>
                              }/>
                              
                        </Routes>
                  </AuthProvider>
            </div>
      );
}

export default App;
