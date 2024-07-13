import React from 'react';
import styles from './BottomSection.module.css';
import CurrentPlayingSong from '../CurrentPlayingSong/CurrentPlayingSong';
import MusicController from '../MusicController/MusicController';
import VolumePanel from '../VolumePannel/VolumePanel';

function BottomSection() {
  return (
    <div className={styles.bottomSection}>
      <CurrentPlayingSong />
      <MusicController />
      <VolumePanel />
    </div>
  );
}

export default BottomSection;
