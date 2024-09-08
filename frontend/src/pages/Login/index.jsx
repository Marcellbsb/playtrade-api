import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Signup.module.css';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';

const api = axios.create({
  baseURL: "http://localhost:3000",
});

function LoginPage() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const login = async () => {
    try {
      const response = await api.post('/login', {
        email,
        senha,
      });
      const token = response.data.token;

      // Armazenar o token no localStorage (considere usar uma opção mais segura)
      localStorage.setItem('token', token);

      // Redirecionar para a página de acesso após o login bem-sucedido
      navigate('/access');
    } catch (error) {
      console.error(error);
      // Tratar erros de login (exibir mensagem de erro)
    }
  };

  return (
    <div>
      <Banner image="devil" />

      <p>Faça login e aproveite o que há de melhor no mundo dos gamers.</p>
      
      <form className={styles.form}>
      <Link to="/">
          <img src="/images/logo2.png" className={styles.logo} alt="logo" />
        </Link>  

        <div className="mail-cad">
          <label htmlFor="email">Email</label>
        </div>
        <input
          className="input-mail"
          type="email"
          placeholder="seu@email.com"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <div className="pass-cad">
          <label htmlFor="senha">Senha</label>
        </div>
        <input
          className="password"
          type="password"
          placeholder="Digite sua senha"
          id="senha"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
          required
        />
        <button type="button" onClick={login}>
          Entrar
        </button>
      </form>
      <Footer />
    </div>
  );
}

export default LoginPage;
