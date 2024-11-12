import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SearchCategoryGrid.module.css';

function SearchCategoryGrid({ category }) {
  return (
    <div className={styles.categoryContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.title}>
          <h2>Browser all</h2>
        </div>
        <div className={styles.innerCategoryContainer}>
          {category?.map((data, index) => {
            return (
              <div className={styles.categoryCard} key={index}>
                <Link to={`/genre/${data.id}`}>
                  <div>
                    <img src={data.icons[0].url} className={styles.cardImg} />
                  </div>
                  <div className={styles.cardTitleName}>
                    <span>{data.name}</span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchCategoryGrid;
