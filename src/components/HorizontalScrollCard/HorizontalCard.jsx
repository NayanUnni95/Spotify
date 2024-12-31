import React from 'react';
import styles from './HorizontalCard.module.css';
import { Link, useNavigate } from 'react-router-dom';

function HorizontalCard({ data }) {
  const navigate = useNavigate();
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
        {data &&
          data.items.map((obj, index) => {
            if (obj != null)
              return (
                <div
                  className={styles.cardSection}
                  key={index}
                  onClick={() => navigate(`/${obj.type}/${obj.id}`)}
                >
                  <div className={styles.cardImg}>
                    <img src={obj.image && obj.image[0].url} alt={obj.name} />
                  </div>
                  <div className={styles.cardInfo}>
                    <div className={styles.cardTitle}>
                      {/* <h3>{removeChar(obj.name)}</h3> */}
                      <h3>{obj.name}</h3>
                    </div>
                    <div className={styles.cardDes}>
                      <div className={styles.text}>
                        {obj.artists.map((obj2, index) => {
                          return (
                            <Link key={index} to={`/artist/${obj2.id}`}>
                              <span key={index}>{obj2.name},</span>
                            </Link>
                          );
                        })}
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
