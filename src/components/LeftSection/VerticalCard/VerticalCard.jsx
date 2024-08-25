import React from 'react';
import styles from './VerticalCard.module.css';

function VerticalCard({ collectionData }) {
  return (
    <div className={styles.libraryVerticalScroll}>
      {collectionData.map((data, index) => {
        if (data) {
          return (
            <div
              className={styles.verticalCard}
              key={index}
              id={data.id}
              href={data.href}
            >
              <div className={styles.verticalCardImg}>
                {data.type == 'artist' ? (
                  <img
                    src={data.image[0].url}
                    alt={data.title}
                    className={styles.circleImg}
                  />
                ) : (
                  <img
                    src={data.image[0].url}
                    alt={data.title}
                    className={styles.squareImg}
                  />
                )}
              </div>
              <div className={styles.verticalCardDetails}>
                <div className={styles.verticalCardTitle}>
                  <span>{data.title}</span>
                </div>
                <div className={styles.verticalCardDesc}>
                  <div>
                    <span>{data.type}</span>
                  </div>
                  <div>
                    <span>{'•' + data.songs}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default VerticalCard;
