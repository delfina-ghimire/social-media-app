import './App.css';
import './Index.css';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <div className='App'>
      <div className='blur' style={{ top: '-10%', right: '0' }}></div>
      <div className='blur' style={{ top: '33%', left: '-8rem' }}></div>
      {/* <Home /> */}
      <Profile />
    </div>
  );
}

export default App;
