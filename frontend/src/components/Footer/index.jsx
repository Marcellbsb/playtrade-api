import styles from './Footer.module.css';

function Footer () {
    return (
<footer className={styles.footer} >

<p>PlayTrade © {new Date().getFullYear()} - Todos os direitos reservados</p>   
          
        
</footer>

 )}

export default Footer;