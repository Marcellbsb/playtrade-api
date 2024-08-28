// Sobre.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Header from "../../components/Header";
import styles from "./Sobre.module.css";

function Sobre() {
  const navigate = useNavigate();
  const [comentarios, setComentarios] = useState([]); // Estado para armazenar comentários
  const [usuario, setUsuario] = useState(""); // Estado para o campo de usuário
  const [email, setEmail] = useState(""); // Estado para o campo de e-mail
  const [comentario, setComentario] = useState(""); // Estado para o campo de comentário

  const handleIniciarTroca = () => {
    navigate("/jogos"); // Redireciona para a página de jogos
  };

  const handleConsoles = () => {
    navigate("/consoles"); // Redireciona para a página de consoles
  };

  const handleEnviarComentario = () => {
    if (usuario && email && comentario) { // Verifica se todos os campos estão preenchidos
      const novoComentario = {
        usuario,
        email,
        comentario,
        data: new Date().toLocaleString(), // Adiciona a data e hora do comentário
      };
      setComentarios([...comentarios, novoComentario]); // Adiciona o novo comentário ao estado
      setUsuario(""); // Limpa o campo de usuário
      setEmail(""); // Limpa o campo de e-mail
      setComentario(""); // Limpa o campo de comentário
    } else {
      alert("Por favor, preencha todos os campos antes de enviar.");
    }
  };

  const handleExcluirComentario = (index) => {
    const novosComentarios = comentarios.filter((_, i) => i !== index); // Filtra para remover o comentário pelo índice
    setComentarios(novosComentarios);
  };

  return (
    <>
      <Header />
      <Banner image="avengers" />
      <Container>
        <div className={styles.intro}>
          <p className={styles.introText}>Fala, Jogador! Tudo certo?</p>
          <p className={styles.introText}>
            Já conhece o PlayTrade? Sobre o PlayTrade
            Bem-vindo, a plataforma exclusiva para a troca de jogos de mídia física. Nossa missão é transformar a maneira como você troca e descobre novos jogos, conectando jogadores de todas as regiões do Brasil em um ambiente digital, intuitivo e sustentável.
            No PlayTrade, acreditamos que a troca de jogos não deve ser limitada ao seu círculo de conhecidos locais. Nossa plataforma permite que você expanda seus horizontes e encontre jogadores com interesses semelhantes, prontos para compartilhar suas coleções e experiências de jogo. Seja você um jogador casual ou um entusiasta dedicado, o PlayTrade oferece uma solução prática para a troca de jogos, promovendo a reutilização e a sustentabilidade.
            Nosso objetivo é facilitar o contato entre jogadores, tornando a busca e a troca de jogos uma experiência agradável e eficiente. Com uma interface amigável e recursos avançados de busca, você pode encontrar rapidamente os jogos que deseja e trocar aqueles que já explorou ao máximo. Além disso, o PlayTrade é um espaço para a troca de informações, dicas e truques, fortalecendo a comunidade gamer e incentivando a interação social.
            Valorizamos a sustentabilidade ambiental e acreditamos que a reutilização de jogos é um passo importante para reduzir o desperdício e promover um consumo mais consciente. Ao incentivar a troca, estamos ajudando a prolongar a vida útil dos jogos, beneficiando tanto o meio ambiente quanto a comunidade gamer.
            No PlayTrade, você faz parte de uma comunidade dedicada a enriquecer suas experiências no mundo dos games. Junte-se a nós e descubra como é fácil e divertido trocar seus jogos, fazer novos amigos e explorar novos títulos. Estamos aqui para tornar cada troca uma oportunidade de conexão e diversão.
          </p>
          <p className={styles.introText}>
            Aqui, você pode marcar pontos de encontro para realizar suas trocas de forma presencial. Mas, antes disso, realizamos verificações de segurança dos dados dos usuários para garantir que a troca seja segura para ambas as partes.
          </p>
        </div>

        <div className={styles.steps}>
          <h2>1. Como Funciona?</h2>
          <p>Para começar, cadastre-se na plataforma e realize a verificação dos seus dados pessoais. Após isso, você poderá navegar entre as opções de jogos disponíveis para troca e marcar um ponto de encontro com outro jogador.</p>
          <p>O sistema da PlayTrade garantirá que todos os envolvidos na troca estejam devidamente verificados, criando um ambiente seguro para todos.</p>
          <p className={styles.notice}>Lembre-se: Apenas jogadores que passaram pelo processo de verificação completo poderão marcar pontos de encontro e realizar trocas.</p>
          <button className={styles.button} onClick={handleIniciarTroca}>Iniciar Troca!</button>
        </div>

        <div className={styles.steps}>
          <h2>2. Qual é o cálculo sobre o valor da troca?</h2>
          <p>Os valores dos jogos a serem trocados são definidos pelos próprios usuários, com base no valor de mercado atual. É importante que o valor informado esteja em conformidade com o preço atual do mercado para garantir uma troca justa e equilibrada.</p>
          <p>Além disso, peça vídeos e fotos para garantir á integridade do jogo, para que ambas as partes possam estar satisfeitas com a negociação.</p>
        </div>

        <div className={styles.steps}>
          <h2>3. Como é realizada a troca?</h2>
          <p>Após a definição dos valores e o agendamento do ponto de encontro, você e o outro jogador se encontrarão para efetivar a troca. No entanto, lembre-se de que o PlayTrade não realiza transações financeiras; as trocas são baseadas em confiança e nas verificações dos usuários.</p>
          <p className={styles.notice}>Observação: Certifique-se de que todos os detalhes foram acordados antes da troca, e caso haja algum problema, entre em contato com o suporte do PlayTrade para assistência.</p>
        </div>

        <div className={styles.steps}>
          <h2>4. Como posso começar?</h2>
          <p>Agora que você já sabe como funciona, clique no botão abaixo para iniciar sua troca! Lembre-se de que a segurança é prioridade, então verifique todos os detalhes e aproveite para conhecer novos jogos e jogadores.</p>
          <button className={styles.button} onClick={handleConsoles}>Consoles</button>
        </div>

        <div className={styles.commentForm}>
          <h2>Deixe seu comentário</h2>
          <div className={styles.formGroup}>
            <input 
              type="text" 
              placeholder="Usuário" 
              value={usuario} 
              onChange={(e) => setUsuario(e.target.value)} 
            />
          </div>
          <div className={styles.formGroup}>
            <input 
              type="email" 
              placeholder="E-mail" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className={styles.formGroup}>
            <textarea 
              placeholder="Seu comentário..." 
              value={comentario} 
              onChange={(e) => setComentario(e.target.value)} 
            ></textarea>
          </div>
          <button className={styles.button} onClick={handleEnviarComentario}>Enviar</button>
        </div>

        <div className={styles.commentsSection}>
          <h2>Comentários</h2>
          {comentarios.length > 0 ? (
            comentarios.map((com, index) => (
              <div key={index} className={styles.comment}>
                <p><strong>{com.usuario}</strong> ({com.email}) em {com.data}</p>
                <p>{com.comentario}</p>
                <button className={styles.deleteButton} onClick={() => handleExcluirComentario(index)}>Excluir</button>
              </div>
            ))
          ) : (
            <p>Seja o primeiro a comentar!</p>
          )}
        </div>
      </Container>
    </>
  );
}

export default Sobre;
