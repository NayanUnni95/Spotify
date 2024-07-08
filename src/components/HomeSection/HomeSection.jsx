import React from 'react';
import styles from './HomeSection.module.css';
import NavBar from '../NavBar/NavBar';

function HomeSection() {
  return (
    <div className={styles.homeSection}>
      <NavBar />
    </div>
  );
}

export default HomeSection;
