import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Search.module.css';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import Banner from '../../components/Banner';
import Category from '../../components/Category';
import Card from '../../components/Card';

const api = axios.create({
    baseURL: "http://localhost:3000"
});
  
  function Search() {
    const [query, setQuery] = useState('');
    const [resGames, setGames] = useState([]);
    const [resConsoles, setConsoles] = useState([]);

    const handleSearchGame = async () => {
        try {
            const response = await api.get('/gameslist/'+query);
            console.log(response.data);
            const data = response.data;
            setGames(data);
            handleSearchConsole();
        } catch (error) {
            console.error('Erro ao buscar os jogos:', error);
        }
    };

    const handleSearchConsole = async () => {
        try {
            const response = await api.get('/consoleslist/'+query);
            console.log(response.data);
            const data = response.data;
            setConsoles(data);
        } catch (error) {
            console.error('Erro ao buscar os consoles:', error);
        }
    };

    return (
        <>
            <Banner image="creed" alt="Banner image for Creed" />
            <Link to="/">
                <img src="/images/logo2.png" className={styles.logo} alt="logo" />
            </Link>
            <Container>
                <section className={styles.search}>
                    <h2>Digite para pesquisar</h2>
                    <div className={styles.searchBar}>
                        <input
                            type="search"
                            placeholder="Insira o nome do jogo ou console"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSearchGame() && handleSearchConsole()}
                        />
                        <button onClick={handleSearchGame}>Pesquisar</button>
                    </div>
                </section>

                <Category><h2>Jogos</h2></Category>
                <section className='cards'>
                    {resGames.map((game) => (
                        <Card key={game._id} image_Url={game.image_Url} href={game.href} title={game.title} />
                    ))}
                    {resGames.length === 0 && (
                        <p>Nenhum jogo encontrado para argumento de pesquisa.</p>
                    )}
                </section>

                <Category><h2>Consoles</h2></Category>
                <section className='cards'>
                    {resConsoles.map((console) => (
                        <Card key={console._id} image_Url={console.image_Url} href={console.href} title={console.title} />
                    ))}
                    {resConsoles.length === 0 && (
                        <p>Nenhum console encontrado para argumento de pesquisa.</p>
                    )}
                </section>

            </Container>
            <Footer />
        </>
    );
}

export default Search;
