import React from 'react';
import styles from './SearchBar.module.css';
import { Icon } from '../../assets/icons/Icons';

function SearchBar() {
  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.iconSection}>
          <Icon name="search" size={25} />
        </div>
        <div className={styles.inputSection}>
          <input
            type="search"
            placeholder="What do you want to play?"
            className={styles.searchInput}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
