import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import LoginPage from './pages/Login';
import Search from './pages/Search';
import RegisterGames from './pages/GamesList';
import GameList from './pages/GamesList';
import About from './pages/About';
import Consoles from './pages/Consoles';
import AccessPage from './pages/Access/AccessPage'; // Importando a nova página

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/gamesregister" element={<GameList />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/consoles" element={<Consoles />} />
        <Route path="/access" element={<AccessPage />} /> {/* Nova rota para a AccessPage */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
