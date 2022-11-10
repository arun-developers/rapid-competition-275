import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar_Crousal';
import ShinyBanner from './Components/Shinybanner';
import Hotdeals from './Components/Hotdeals';
import ShinyBanner_II from './Components/Shinybanner_II';
import Categories from './Components/Categories';
import AboutText from './Components/AboutText';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
