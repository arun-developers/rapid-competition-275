// import { Router } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar_Crousal';
import ShinyBanner from './Components/Shinybanner';
import Hotdeals from './Components/Hotdeals';
import ShinyBanner_II from './Components/Shinybanner_II';
import Categories from './Components/Categories';
import AboutText from './Components/AboutText';
import Navbar  from "./Components/Navbar"
import Footer from './Components/Footer';
import NavBar from './Components/Drop';
function App() {
  return (
    <div style={{width:'100%'}} >
      <Navbar/>
      <NavBar/>
      <Footer/>
      

      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
