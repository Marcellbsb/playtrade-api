import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Header from '../../components/Header'; // Reutilizando o Header
import styles from './AccessPage.module.css';

const rankingData = [
  { id: 1, name: 'Denise', location: 'São Roque / SP', imageUrl: '/images/Denise.png', position: 1 },
  { id: 2, name: 'Leonardo', location: 'São Paulo / SP', imageUrl: '/images/leo.png', position: 2 },
  { id: 3, name: 'Luiz', location: 'Brasilia / DF', imageUrl: '/images/freitas.png', position: 3 },
  { id: 4, name: 'Marcelo', location: 'Brasília / DF', imageUrl: '/images/Marcelo.png', position: 4 },
  { id: 5, name: 'Matheus', location: 'São Paulo / SP', imageUrl: '/images/Matheus.png', position: 5 },
];

function AccessPage() {
  return (
    <div>
      <Header />
      <Banner image="geral" />

      <div className={styles.container}>
        <h2>Bem-vindo à Área de Acesso</h2>
        <div className={styles.buttons}>
        <Link to="/gamesregister" className={styles.button}>
        Cadastre seu jogo
        </Link> {/* Alterado para redirecionar para a página Jogos */}
          <Link to="/" className={styles.button}>
            Jogos
          </Link> {/* Redirecionando para Home */}
        </div>

        {/* Ranking de Trocadores */}
        <section className={styles.rankingSection}>
          <h3>Ranking de Trocadores</h3>
          <div className={styles.ranking}>
            {rankingData.map((user) => (
              <div key={user.id} className={styles.rankingItem}>
                <div className={styles.profile}>
                  <img src={user.imageUrl} alt={user.name} className={styles.profileImage} />
                  <span className={styles.position}>{user.position}</span>
                </div>
                <div className={styles.userInfo}>
                  <h4>{user.name}</h4>
                  <p>{user.location}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default AccessPage;
