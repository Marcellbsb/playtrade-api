import React, { useState, useEffect } from 'react';
import '../../App.css';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import Container from '../../components/Container';
import Card from '../../components/Card';
import Category from '../../components/Category';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './Consoles.module.css';


function Consoles() {
  const [consoles, setConsoles] = useState([]);

  useEffect(() => {
    const fetchConsoles = async () => {
      try {
        const response = await axios.get('http://localhost:3000/consoles');
        setConsoles(response.data);
      } catch (error) {
        console.error('Erro ao buscar consoles:', error);
      }
    };

    fetchConsoles();
  }, []);

  return (
    <>
      <Banner image="cid" />
      <Link to="/">
          <img src="/images/logo2.png" className={styles.logo} alt="logo" />
        </Link>      
      <Container>
        <Category><h2>Consoles</h2></Category>
        <section className='cards'>
          {consoles.map((console) => (
            <Card key={console._id} image_Url={console.image_Url} href={console.href} title={console.title} />
          ))}
          {console.length === 0 && (
            <p>Nenhum console encontrado.</p>
          )}

        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Consoles;
