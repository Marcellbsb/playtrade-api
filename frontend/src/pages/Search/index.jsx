import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import styles from './Search.module.css';

function Search() {
    return (
        <div>
            <Banner image="creed" />
            <p>Insira o texto para pesquisar</p>
            <Link to="/">
                <img src="/images/logo2.png" className={styles.logo} alt="logo" />
            </Link>
            <section className={styles.search} >
            </section>
            <h2>Pesquisar</h2>
            <input type='search' />

            <Footer />
        </div>
    );
}

export default Search;
