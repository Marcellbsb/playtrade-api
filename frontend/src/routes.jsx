import {Routes, BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register';
import LoginPage from './pages/Login';
import Search from './pages/Search';
import RegisterGames from './pages/GamesList';
import GameList from './pages/GamesList';
import About from './pages/About';
import Consoles from './pages/Consoles';



function AppRoutes () {
    return (
<BrowserRouter>
<Routes>
<Route path="/" element = {<Home/>} ></Route>
<Route path="/register" element = {<Register/>} ></Route>
<Route path="/search" element = {<Search/>} ></Route>
<Route path="/login" element = {<LoginPage/>} ></Route>
<Route path="/gamesregister" element = {<GameList/>} ></Route>
<Route path="/sobre" element = {<About/>} ></Route>
<Route path="/consoles" element = {<Consoles/>} ></Route>
</Routes>
</BrowserRouter>
    );
}

export default AppRoutes;