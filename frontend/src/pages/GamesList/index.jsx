import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './GamesList.module.css'
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';


const api = axios.create({
  baseURL: "http://localhost:3000"
});

function GameList() {
  const [games, setGames] = useState([]);
  const [image_Url, setNewImage_Url] = useState('');
  const [href, setNewHref] = useState('');
  const [title, setNewTitle] = useState('');

  useEffect(() => {
    api.get('/games')
      .then((response) => {
        console.log(response.data);
        setGames(response.data);
      });
  }, []);

  const handleNewGameSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post('/games', {
        image_Url,
        href
      });
      console.log(response);

    } catch (error) {
      console.error(error);

    }
  };

  return (
    <div>
      <Banner image="multi" />

      <Link to="/"><img src="/images/logo2.png" className={styles.logo}></img></Link>

      <form onSubmit={handleNewGameSubmit}>
        <label htmlFor="image_Url"><p>Insira a URL da imagem do seu jogo<br /></p>
          <h6 className='example'>Ex: https://playtrade.com/images/mortalkombat</h6></label>
        <input
          type="text"
          id="image_Url"
          value={image_Url}
          onChange={(event) => setNewImage_Url(event.target.value)}
          required
        />
        <label htmlFor="title"><p>Insira o nome do jogo</p></label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setNewTitle(event.target.value)}
          required
        />
        <label htmlFor="href"><p>URL de descrição do jogo</p>
        <h6 className='example'>Ex: https://playtrade.com/jogos/streetfight/description</h6></label>
        <input
          type="text"
          id="href"
          value={href}
          onChange={(event) => setNewHref(event.target.value)}
          required
        />
        
        <button type="submit">Cadastrar Jogo</button>
      </form>
      <Footer />
      <ul>

      </ul>
    </div>
  );
}

export default GameList;