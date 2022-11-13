// import { Router } from 'react-router-dom';
import './App.css';
import Drop from './Components/Dropcde/Drop';
import Footer from './Components/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';
import { ProductPage } from './Components/ProductDisplayPage/ProductDisplayPage/ProductPage';
import {SingleProduct} from './Components/SingleProduct/SingleProduct/SingleProduct'
import AllRoutes from './Router/Router';

function App() {
  return (
    <div style={{width:'100%'}} >
      <Navbar/>
      <Drop />
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
