import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import styles from './MusicController.module.css';
import 'react-h5-audio-player/lib/styles.css';
import './AudioPlayer.css';

function MusicController({ TrackData }) {
  return (
    <div className={styles.musicContainer}>
      <div className={styles.innerContainer}>
        <AudioPlayer src={TrackData.source.url} />
      </div>
    </div>
  );
}

export default MusicController;
