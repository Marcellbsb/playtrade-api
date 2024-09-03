import { Link } from "react-router-dom";
import styles from "./Header.module.css"

function Header() {
    return (
        <header className={styles.header} >
            <nav>
                <Link className={styles.link} to="/gamesregister">Jogos</Link>
                <Link className={styles.link} to="/consoles">Consoles</Link>
                <Link className={styles.link} to="/search">Pesquisar</Link>
                <Link to="/"><img src="/images/logo2.png" className={styles.logo}></img></Link>
                <Link className={styles.link} to="/register">Cadastro</Link>
                <Link className={styles.link} to="/login">Login</Link>
                <Link className={styles.link} to="/sobre">Sobre</Link>
            </nav>

        </header>
    );

}

export default Header;