import { Routes, Route  } from 'react-router-dom';
import './App.css';
import { useAuth } from './utils/auth';
import RequiredAuth from './utils/RequiredAuth';
import { Dashboard, Login } from './pages';

function App() {
      const auth = useAuth();

      return (
            <div className="App">
                  <Routes>
                        {!auth.user && <Route path='/login' element={<Login/>}/> } 

                        <Route path='/' 
                              element={
                                    <RequiredAuth>
                                          <Dashboard/>
                                    </RequiredAuth>
                              }
                        />                               
                  </Routes>
            </div>
      );
}

export default App;
