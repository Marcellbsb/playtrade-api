import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Signup.module.css'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner';
import Home from '../Home';
import Header from '../../components/Header';



const api = axios.create({
  baseURL: "http://localhost:3000"
});

function LoginPage() {
  const [user, setUser] = useState('');
  const [email, setNewEmail] = useState('');
  const [senha, setNewSenha] = useState('');

  useEffect(() => {
    api.get('/').then((response) => {
      console.log(response.data);
      setUser(response.data);
    });
  }, []);

  function login() {
    api
      .post('/login', {
        email,
        senha,
      })
      .then((response) => {
        console.log(response);
      });
  }


  return (
    <div>
      <Header/>
      <Banner image="devil" />
      <p>Faça login e aproveite o que há de melhor no mundo dos gamers.<br />
        Playtrade sinônimo de qualidade e sustentabilidade ! </p>
      <form className={styles.form} >    

        <div className="mail-cad">
          <label>Email</label>
        </div>
        <input
          className="input-mail"
          type="email"
          placeholder="seu@email.com"
          onChange={(event) => setNewEmail(event.target.value)}
        />
        <div className="pass-cad">
          <label>Senha</label>
        </div>
        <input
          className="password"
          type="password"
          placeholder="Digite sua senha"
          onChange={(event) => setNewSenha(event.target.value)} />
        <button onClick={Home} >Entrar</button>
      </form>
      <Footer />
    </div>

  );

}




export default LoginPage;