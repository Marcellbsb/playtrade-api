import React from "react";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Sobre.module.css";

function Sobre() {
    return (
        <>
            <Header />
            <Banner image="mortal" />
            <Container>
                <div className={styles.content}>
                    <p className={styles.intro}>Fala, Jogador! Tudo certo?</p>
                    <p className={styles.intro}>
                    Bem-vindo ao PlayTrade, nossa missão é a sua diversão! Criamos uma plataforma exclusiva para a troca de jogos de mídia física e consoles. Nosso objetivo é transformar a maneira como você troca e descobre novos jogos, conectando jogadores de todas as regiões do Brasil em um ambiente seguro, intuitivo e sustentável.
                    No PlayTrade, acreditamos que a troca de jogos não deve ser limitada ao seu círculo de conhecidos locais. Nossa plataforma permite que você expanda seus horizontes e encontre jogadores com interesses semelhantes, prontos para compartilhar suas coleções e experiências de jogo. Seja você um jogador casual ou um entusiasta dedicado, o PlayTrade oferece uma solução prática para a troca de jogos e consoles, promovendo a reutilização e a sustentabilidade.
                    Nosso objetivo é facilitar o contato entre jogadores, tornando a busca e a troca de jogos uma experiência agradável e eficiente. Com uma interface amigável e recursos avançados de busca, você pode encontrar rapidamente os jogos que deseja e trocar aqueles que já explorou ao máximo. Além disso, o PlayTrade é um espaço para a troca de informações, dicas e truques, fortalecendo a comunidade gamer e incentivando a interação social.
                    Valorizamos a sustentabilidade ambiental e acreditamos que a reutilização de jogos e consoles é um passo importante para reduzir o desperdício e promover um consumo mais consciente. Ao incentivar a troca, estamos ajudando a prolongar a vida útil dos jogos e consoles, beneficiando tanto o meio ambiente quanto a comunidade gamer.
                    No PlayTrade, você faz parte de uma comunidade dedicada a enriquecer suas experiências no mundo dos games. Junte-se a nós e descubra como é fácil e divertido trocar seus jogos, fazer novos amigos e explorar novos títulos. Estamos aqui para tornar cada troca uma oportunidade de conexão e diversão.
                    </p>
                    <p className={styles.intro}>
                        Se você deseja trocar seus jogos, siga os passos abaixo para agendar a troca com outro jogador. Nossa plataforma realiza uma validação completa dos dados dos usuários, como confirmação de e-mail, celular, RG, CPF e endereço, garantindo uma troca segura para todos.
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