import React from 'react';
import styles from './HorizontalCard.module.css';

function HorizontalCard({ data }) {
  // Function to remove characters after a symbol in a word
  const removeChar = (word) => {
    const wordArray = word.split(/[^a-zA-Z]/);
    return wordArray[0];
  };

  return (
    <div className={styles.horizontalContainer}>
      <div className={styles.categoryTitle}>
        <h3>{data.title}</h3>
      </div>
      <div className={styles.innerContainer}>
        {data.items.map((data, index) => {
          return (
            <div className={styles.cardSection} key={index}>
              <div className={styles.cardImg}>
                <img src={data.image} alt={data.name} />
              </div>
              <div className={styles.cardInfo}>
                <div className={styles.cardTitle}>
                  <h3>{removeChar(data.name)}</h3>
                </div>
                <div className={styles.cardDes}>
                  <div className={styles.text}>
                    <span>{data.artists}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HorizontalCard;
