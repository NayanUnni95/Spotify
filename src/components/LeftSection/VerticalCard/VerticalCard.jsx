import React from 'react';
import styles from './VerticalCard.module.css';

function VerticalCard({ collectionData }) {
  return (
    <div className={styles.libraryVerticalScroll}>
      {collectionData.map((data, index) => {
        return (
          <div
            className={styles.verticalCard}
            key={index}
            id={data ? data.id : ''}
            href={data ? data.href : ''}
          >
            <div className={styles.verticalCardImg}>
              {data ? (
                data.type == 'artist' ? (
                  <img
                    src={data ? data.image[0].url : ''}
                    alt={data ? data.title : ''}
                    className={styles.circleImg}
                  />
                ) : (
                  <img
                    src={data ? data.image[0].url : ''}
                    alt={data ? data.title : ''}
                    className={styles.squareImg}
                  />
                )
              ) : (
                ''
              )}
            </div>
            <div className={styles.verticalCardDetails}>
              <div className={styles.verticalCardTitle}>
                <span>{data ? data.title : ''}</span>
              </div>
              <div className={styles.verticalCardDesc}>
                <div>
                  <span>{data ? data.type : ''}</span>
                </div>
                <div>
                  <span>
                    {data ? (data.songs ? '•' + data.songs : '') : ''}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default VerticalCard;
