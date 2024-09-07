import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Search.module.css';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import Banner from '../../components/Banner';

function Search() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await fetch(`/api/search?query=${query}`);
            const data = await response.json();
            setResults(data);
        } catch (error) {
            console.error('Erro ao buscar os jogos:', error);
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
                            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                        />
                        <button onClick={handleSearch}>Pesquisar</button>
                    </div>
                </section>
                {results.length > 0 && (
                    <ul>
                        {results.map(game => (
                            <li key={game._id}>{game.name}</li>
                        ))}
                    </ul>
                )}

            </Container>
            <Footer />
        </>
    );
}

export default Search;
