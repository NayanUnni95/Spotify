import React from 'react';
import { Icon } from '../../../Icons';
import styles from './Library.module.css';
import VerticalCard from '../VerticalCard/VerticalCard';

function Library() {
  return (
    <div className={styles.librarySection}>
      <div className={styles.libraryLabel}>
        <div>
          <Icon name="library" size={25} />
        </div>
        <div className={styles.librarySpanDiv}>
          <span>library</span>
        </div>
      </div>
      <VerticalCard />
    </div>
  );
}

export default Library;
