import React from "react";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Sobre.module.css"; // Importando o CSS específico

function Sobre() {
    return (
        <>
            <Header />
            <Banner image="mortal" />
            <Container>
                <div className={styles.content}>
                    <p className={styles.intro}>Fala, Jogador! Tudo certo?</p>
                    <p className={styles.intro}>
                        Já conhece nosso Projeto Reload? Ele consiste na troca de jogos e consoles usados, variando desde os jogos mais recentes até os clássicos. Acreditamos que nada no mundo dos games seja descartável e que sempre há alguém interessado em reviver uma aventura, desde que os jogos estejam em bom estado.
                    </p>
                    <p className={styles.intro}>
                        Se você deseja trocar seus jogos, siga os passos abaixo para realizar a cotação e agendar a troca com outro jogador. Nossa plataforma realiza uma validação completa dos dados dos usuários, como confirmação de e-mail, celular, RG, CPF e endereço, garantindo uma troca segura para todos.
                    </p>
                </div>

                <div className={styles.steps}>
                    <h2>1. Cotação 100% Online - Automática</h2>
                    <p>
                        Para realizar a cotação, que é feita inteiramente online, tenha em mãos o produto que será trocado para fornecer os melhores detalhes durante o processo.
                    </p>
                    <p>
                        Basta clicar no link abaixo, seguir as etapas e pronto! Você receberá um e-mail de confirmação da cotação e nossa resposta chegará quase que instantaneamente!
                    </p>
                    <p className={styles.notice}>
                        AVISO: Para garantir a qualidade das trocas, todos os produtos devem ser originais e em boas condições.
                    </p>
                    <button className={styles.button}>Iniciar Cotação!</button>
                </div>

                <div className={styles.values}>
                    <h2>2. Definição dos Valores de Troca</h2>
                    <p>
                        No PlayTrade, quem define o valor dos jogos e consoles a serem trocados é você, o usuário. No entanto, para garantir uma troca justa e equilibrada, é essencial que os valores informados estejam de acordo com o preço de mercado atual.
                    </p>
                    <p>
                        Isso significa que, ao definir o valor de um jogo ou console, você deve considerar o estado de conservação, a raridade e a demanda pelo item. Nossa plataforma oferece dicas e guias para ajudar você a determinar o valor correto, promovendo trocas justas para todos os envolvidos.
                    </p>
                    <p className={styles.notice}>
                        Lembre-se: Valores muito discrepantes do mercado podem dificultar a realização de trocas!
                    </p>
                </div>
            </Container>
            <Footer />
        </>
    );
}

export default Sobre;
