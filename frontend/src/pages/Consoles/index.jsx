import {Link} from 'react-router-dom';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import styles from './Consoles.module.css';

function Consoles() {
   return (
    <div>
      <Banner image="viking" />
      <p>Conheças os consoles disponíveis</p>
      <Link to="/">
          <img src="/images/logo2.png" className={styles.logo} alt="logo" />
      </Link>
      <p>IMPLEMENTAÇÃO AQUI    **************************</p>
      <Footer />
    </div>
  );
}

export default Consoles;