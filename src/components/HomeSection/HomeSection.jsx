import React from 'react';
import styles from './HomeSection.module.css';
import NavBar from '../NavBar/NavBar';
import TopPlaylist from '../TopPlaylist/TopPlaylist';

function HomeSection() {
  return (
    <div className={styles.homeSection}>
      <NavBar />
      <TopPlaylist />
    </div>
  );
}

export default HomeSection;
