import Navbar from './components/Navbar';
import './App.css';

function App() {
  return ( 
    <header className = "App-header" >
    <div className = "nav-area">
      <a href="#/" className = "logo">Codesolution</a>
      <Navbar/>
    </div>
    </header>
  );
};

export default App;