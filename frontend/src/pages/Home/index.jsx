import '../../App.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import Container from '../../components/Container';
import Card from '../../components/Card';
import Category from '../../components/Category';
import game from '../../json/jogosdb.json'

function Home() {

  return (
    <>
      <Header />
      <Banner image="fight" />
      <Container>
        <Category><h2>Home</h2></Category>       
      </Container>
      <Footer />
    </>
  );
}

export default Home;
