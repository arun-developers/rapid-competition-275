import Home from '../Components/Home/Home';
import {Route,Routes} from 'react-router-dom'
// import Login from '../Components/LoginRegister/LoginRegister/Login';
import Login from '../Components/LoginRegister/LoginRegister/Login';
import { ProductPage } from '../Components/ProductDisplayPage/ProductDisplayPage/ProductPage';
import { SingleProduct } from '../Components/SingleProduct/SingleProduct/SingleProduct';
import Register from "../Components/LoginRegister/Register"
import ForgetPage from '../Components/LoginRegister/ForgetPage';

function AllRoutes(){

    return(
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/forgetpassword' element={<ForgetPage/>}></Route>
            <Route path='/myaccount' element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path='/ProductPage/:query' element={<ProductPage/>}></Route>
            <Route path="/SingleProduct/:id" element={<SingleProduct/>}></Route>
        </Routes>
    )
}

export default AllRoutes;
