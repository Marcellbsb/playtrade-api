import styles from './Search.module.css'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import Banner from '../../components/Banner';

function Search() {
    return (
        <>
           <Header/>
           <Banner image="creed" />
           <Container>           
            <section className={styles.search} >            
            </section>
            <h2>Pesquisar</h2>                
            <input type='search'/>
            </Container>
            <Footer/>
            
        </>
        
    );
}

export default Search;