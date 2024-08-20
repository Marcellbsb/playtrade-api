import {Routes, BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register';
import LoginPage from './pages/Login';
import Search from './pages/Search';
function AppRoutes () {
    return (
<BrowserRouter>
<Routes>
<Route path="/" element = {<Home/>} ></Route>
<Route path="/register" element = {<Register/>} ></Route>
<Route path="/search" element = {<Search/>} ></Route>
<Route path="/login" element = {<LoginPage/>} ></Route>
</Routes>
</BrowserRouter>
    );
}

export default AppRoutes;