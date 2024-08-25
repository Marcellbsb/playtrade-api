import styles from './Card.module.css'

function Card ({url}) {
    return (
<section className={styles.card} >
    <a href={`https://github.com/Marcellbsb/imagesplaytrade/blob/main/batleborndesc.png?raw=true`} >
<img src={`https://github.com/Dedasar/PIGameOver/blob/main/Imagens%20Jogos/${url}.png?raw=true`} alt='img'></img>


</a>
</section>
    );
}

export default Card;
