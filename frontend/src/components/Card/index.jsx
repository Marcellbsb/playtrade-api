import React from 'react';
import styles from './Card.module.css';

function Card({ image_Url, href, title }) {
  const handleClick = () => {
    window.location.href = href;
  };

  return (
    <section className={styles.card}>
      <a href="#" onClick={handleClick}>
        <img src={image_Url} alt="img" /><br/>
        <span>{title}</span>
        
      </a>
      
    </section>
  );
}

export default Card;