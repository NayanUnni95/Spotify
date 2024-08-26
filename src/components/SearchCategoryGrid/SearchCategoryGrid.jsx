import React from 'react';
import styles from './SearchCategoryGrid.module.css';

function SearchCategoryGrid({ category }) {
  return (
    <div className={styles.categoryContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.title}>
          <h2>Browser all</h2>
        </div>
        <div className={styles.innerCategoryContainer}>
          {category
            ? category.map((data, index) => {
                return (
                  <div
                    className={styles.categoryCard}
                    key={index}
                    id={data.id}
                    href={data.href}
                  >
                    <div>
                      <img
                        src={data.icons[0].url}
                        alt=""
                        className={styles.cardImg}
                      />
                    </div>
                    <div className={styles.cardTitleName}>
                      <span>{data.name}</span>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default SearchCategoryGrid;
