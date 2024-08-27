import '../../App.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import Container from '../../components/Container';
import Card from '../../components/Card';
import Category from '../../components/Category';
import game from '../../json/jogosdb.json'

function Games() {

  return (
    <>
      <Header />
      <Banner image="mortal" />
      <Container>
        <Category><h2>Jogos</h2></Category>
        <section className='cards' >
          {
            game.map((game) => {
              return <Card url={game.url} key={game.id}/>

            })
          }

        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Games;
