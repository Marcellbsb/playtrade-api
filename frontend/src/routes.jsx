import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import LoginPage from './pages/Login';
import Search from './pages/Search';
import Sobre from './pages/Sobre';
import GameForm from './pages/GameForm';
import About from './pages/About';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/search" element={<Search />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/gameform" element={<GameForm />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
