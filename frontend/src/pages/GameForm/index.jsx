import React, { useState } from 'react';
import Banner from '../../components/Banner';
import Header from '../../components/Header';
import Container from '../../components/Container';
import Footer from '../../components/Footer';

const GameForm = () => {
  const [game, setGame] = useState({
    nome: '',
    descricao: '',
    ano_lancamento: '',
    plataforma: '',
    classificacaoIndicativa: '',
    genero: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGame({ ...game, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do jogo:', game);
    // SALVAR DADOS********
  };

  const handleCancel = () => {
    setGame({
      nome: '',
      descricao: '',
      ano_lancamento: '',
      plataforma: '',
      classificacaoIndicativa: '',
      genero: ''
    });
  };

  const renderYearOptions = () => {
    const years = [];
    for (let i = 1964; i <= 2024; i++) {
      years.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return years;
  };

  return (
    <>
      <Header />
      <Banner image="mortal" />
      <Container>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Insira o nome do Jogo"
              value={game.nome}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="descricao">Descrição:</label>
            <textarea
              id="descricao"
              name="descricao"
              placeholder="Insira uma breve descrição"
              value={game.descricao}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="ano_lancamento">Ano de Lançamento:</label>
            <select
              id="ano_lancamento"
              name="ano_lancamento"
              value={game.ano_lancamento}
              onChange={handleChange}
            >
              <option value="">Selecione o ano</option>
              {renderYearOptions()}
            </select>
          </div>
          <div>
            <label htmlFor="plataforma">Plataforma:</label>
            <input
              type="text"
              id="plataforma"
              placeholder="Ex: PlayStation 5"
              name="plataforma"
              value={game.plataforma}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="classificacaoIndicativa">Classificação Indicativa:</label>
            <select
              id="classificacaoIndicativa"
              name="classificacaoIndicativa"
              value={game.classificacaoIndicativa}
              onChange={handleChange}
            >
              <option value="">Selecione a classificação</option>
              <option value="Livre">Livre</option>
              <option value="10 anos">10 anos</option>
              <option value="12 anos">12 anos</option>
              <option value="14 anos">14 anos</option>
              <option value="16 anos">16 anos</option>
              <option value="18 anos">18 anos</option>
            </select>
          </div>
          <div>
            <label htmlFor="genero">Gênero:</label>
            <select
              id="genero"
              name="genero"
              value={game.genero}
              onChange={handleChange}
            >
              <option value="">Selecione o gênero</option>
              <option value="Ação">Ação</option>
              <option value="Aventura">Aventura</option>
              <option value="RPG">RPG</option>
              <option value="Estratégia">Estratégia</option>
              <option value="Simulação">Simulação</option>
              <option value="Esportes">Esportes</option>
              <option value="Corrida">Corrida</option>
              <option value="Tiro">Tiro (FPS)</option>
              <option value="Luta">Luta</option>
              <option value="Plataforma">Plataforma</option>
              <option value="Puzzle">Puzzle</option>
              <option value="Terror">Terror</option>
              <option value="Mundo Aberto">Mundo Aberto</option>                        
            </select>
          </div>
          <button type="submit">Cadastrar Jogo</button>
          <button type="button" onClick={handleCancel} style={{ marginLeft: '10px' }}>
            Cancelar
          </button>
        </form>
      </Container>
      <Footer />
    </>
  );
};

export default GameForm;
