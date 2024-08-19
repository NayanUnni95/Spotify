import React from 'react';
import styles from './BottomSection.module.css';
import CurrentPlayingSong from '../CurrentPlayingSong/CurrentPlayingSong';
import MusicController from '../MusicController/MusicController';

function BottomSection() {
  return (
    <div className={styles.bottomSection}>
      <CurrentPlayingSong />
      <MusicController />
    </div>
  );
}

export default BottomSection;
