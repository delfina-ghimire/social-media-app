import './App.css';
import './Index.css';
import Auth from './pages/Auth/Auth';

function App() {
  return (
    <div className='App'>
      <div className='blur' style={{ top: '-10%', right: '0' }}></div>
      <div className='blur' style={{ top: '33%', left: '-8rem' }}></div>
      <Auth />
    </div>
  );
}

export default App;
