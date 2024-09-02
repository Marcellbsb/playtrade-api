// src/pages/Home/index.jsx

import '../../App.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import Container from '../../components/Container';
import Category from '../../components/Category';
import Ranking from '../../components/Ranking'; // Importando o Ranking
import game from '../../json/jogosdb.json';

function Home() {
  // Exemplo de dados de usuários
  const users = [
    { id: 1, name: 'Daniela', location: 'Osasco / SP', exchanges: 35, photo: '/images/Dani.jpeg' },
    { id: 2, name: 'Leonardo Rocha', location: 'São Paulo / SP', exchanges: 30, photo: '/images/leo.jpg' },
    { id: 3, name: 'Luiz Freitas', location: 'Rio de Janeiro / RJ', exchanges: 25, photo: '/images/freitas.jpeg' },
    { id: 4, name: 'Marcelo', location: 'São Paulo / SP', exchanges: 20, photo: '/images/Marcelo.jpeg' },
    { id: 5, name: 'Matheus', location: 'Rio de Janeiro / RJ', exchanges: 15, photo: '/images/Matheus.jpeg' }
  ];

  return (
    <>
      <Header />
      <Banner image="fight" />
      <Container>
        <Category><h2>Home</h2></Category>
        <Ranking users={users} />
      </Container>
      <Footer />
    </>
  );
}

export default Home;
