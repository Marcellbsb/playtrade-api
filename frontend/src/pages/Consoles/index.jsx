import  '../../App.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import Container from '../../components/Container';
import Card from '../../components/Card';
import Category from '../../components/Category';
import console from '../../json/consolesdb.json'


function Console() {
  
  return (
    <>
    <Header/>
    <Banner image="horizon" />
    <Container>
    <Category><h2>Consoles</h2></Category>
    <section className='cards' >
    {
            console.map((console) => {
              return <Card url={console.url} key={console.id} />

            })
          }
    </section>
    </Container>
    <Footer/>
    </>
  );
}

export default Console;
