import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Sobre() {
    return (
        <>
            <Header />
            <Banner image="mortal" />
            <Container>
                <p>Sobre o PlayTrade
                    Bem-vindo ao PlayTrade, a plataforma exclusiva para a troca de jogos de mídia física e consoles. Nossa missão é transformar a maneira como você troca e descobre novos jogos, conectando jogadores de todas as regiões do Brasil em um ambiente seguro, intuitivo e sustentável.
                    No PlayTrade, acreditamos que a troca de jogos não deve ser limitada ao seu círculo de conhecidos locais. Nossa plataforma permite que você expanda seus horizontes e encontre jogadores com interesses semelhantes, prontos para compartilhar suas coleções e experiências de jogo. Seja você um jogador casual ou um entusiasta dedicado, o PlayTrade oferece uma solução prática para a troca de jogos e consoles, promovendo a reutilização e a sustentabilidade.
                    Nosso objetivo é facilitar o contato entre jogadores, tornando a busca e a troca de jogos uma experiência agradável e eficiente. Com uma interface amigável e recursos avançados de busca, você pode encontrar rapidamente os jogos que deseja e trocar aqueles que já explorou ao máximo. Além disso, o PlayTrade é um espaço para a troca de informações, dicas e truques, fortalecendo a comunidade gamer e incentivando a interação social.
                    Valorizamos a sustentabilidade ambiental e acreditamos que a reutilização de jogos e consoles é um passo importante para reduzir o desperdício e promover um consumo mais consciente. Ao incentivar a troca, estamos ajudando a prolongar a vida útil dos jogos e consoles, beneficiando tanto o meio ambiente quanto a comunidade gamer.
                    No PlayTrade, você faz parte de uma comunidade dedicada a enriquecer suas experiências no mundo dos games. Junte-se a nós e descubra como é fácil e divertido trocar seus jogos, fazer novos amigos e explorar novos títulos. Estamos aqui para tornar cada troca uma oportunidade de conexão e diversão. 
                </p>
            </Container>
            <Footer />
        </>
    );
}

export default Sobre;
