import {Link} from 'react-router-dom';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import styles from './About.module.css';

function About() {
   return (
    <div>
      <Banner image="kripto" />
      <p>Um pouco sobre nosso projeto</p>
      <Link to="/">
          <img src="/images/logo2.png" className={styles.logo} alt="logo" />
      </Link>
      <p>INSERIR O TEXTO AQUIIIII     **************************</p>
      <Footer />
    </div>
  );
}

export default About;