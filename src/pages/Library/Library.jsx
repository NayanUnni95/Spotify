import React from 'react';
import styles from './Library.module.css';
import NavBar from '../../components/NavBar/NavBar';

function Library() {
  return (
    <div className={styles.librarySection}>
      <NavBar />
    </div>
  );
}

export default Library;
