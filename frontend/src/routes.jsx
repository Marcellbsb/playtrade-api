import {Routes, BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register';
import LoginPage from './pages/Login';
import Search from './pages/Search';
import GameForm from './pages/GameForm';
import About from './pages/About';
function AppRoutes () {
    return (
<BrowserRouter>
<Routes>
<Route path="/" element = {<Home/>} ></Route>
<Route path="/register" element = {<Register/>} ></Route>
<Route path="/search" element = {<Search/>} ></Route>
<Route path="/login" element = {<LoginPage/>} ></Route>
<Route path="/gameform" element = {<GameForm/>}></Route>
<Route path="/about" element = {<About/>}></Route>
</Routes>
</BrowserRouter>
    );
}

export default AppRoutes;