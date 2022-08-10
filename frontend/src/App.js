import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import './Index.css';
import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home';

function App() {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <div className='App'>
      <div className='blur' style={{ top: '-10%', right: '0' }}></div>
      <div className='blur' style={{ top: '33%', left: '-8rem' }}></div>
      <Routes>
        <Route
          path='/'
          element={user ? <Navigate to='Home' /> : <Navigate to='auth' />}
        />

        <Route
          path='/home'
          element={user ? <Home /> : <Navigate to='../auth' />}
        />

        <Route
          path='/auth'
          element={user ? <Navigate to='../Home' /> : <Auth />}
        />
      </Routes>
    </div>
  );
}

export default App;
