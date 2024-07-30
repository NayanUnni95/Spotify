import React from 'react';
import styles from './VerticalCardSkeleton.module.css';

function VerticalCardSkeleton() {
  const collectionData = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className={styles.libraryVerticalScroll}>
      {collectionData.map((data, index) => {
        return (
          <div className={styles.verticalCard} key={index}>
            <div className={styles.verticalCardImg}>
              <div className={styles.innerImgDiv} />
            </div>
            <div className={styles.verticalCardDetails}>
              <div className={styles.verticalCardTitle}></div>
              <div className={styles.verticalCardDesc}></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default VerticalCardSkeleton;
