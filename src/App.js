import './Index.css';
import './App.css';
import Home from './pages/Home/Home';
function App() {
  return (
    <div className='App'>
      <div className='blur' style={{ top: '-10%', right: '0' }}></div>
      <div className='blur' style={{ top: '33%', left: '-8rem' }}></div>
      <Home />
    </div>
  );
}

export default App;
