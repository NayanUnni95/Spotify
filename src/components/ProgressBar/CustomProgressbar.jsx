import React, { useState, useEffect, useContext } from 'react';
import { AudioContext } from '../../context/AudioContext';
import styles from './CustomProgressbar.module.css';

function CustomProgressbar() {
  const [loadedPer, setLoadedPer] = useState(0);
  const [playedPer, setPlayedPer] = useState(0);
  const { progress, duration } = useContext(AudioContext);

  const timeFormatter = (second) => {
    if (!second || isNaN(second)) {
      return '00:00';
    }
    return new Date(second * 1000).toISOString().substring(14, 19);
  };
  const FloatToPer = (second) => {
    return Math.round(second * 100);
  };

  useEffect(() => {
    setLoadedPer(FloatToPer(progress.loaded));
    setPlayedPer(FloatToPer(progress.played));
  }, [progress]);
  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressLabel}>
        <span>{timeFormatter(progress.playedSeconds)}</span>
      </div>
      <div className={styles.innerSection}>
        <input
          type="range"
          className={styles.loadedProgressBar}
          min={0}
          value={loadedPer}
          defaultValue={0}
          max={100}
          style={{
            background: `linear-gradient(to right, #232323d6 ${loadedPer}%, #4d4d4d ${loadedPer}%)`,
          }}
          readOnly
          disabled
        />
        <input
          type="range"
          min={0}
          value={playedPer}
          defaultValue={0}
          max={100}
          className={styles.bar}
          style={{
            background: `linear-gradient(to right, #ffffff ${playedPer}%, #ffffff00 ${playedPer}%`,
          }}
          readOnly
        />
      </div>
      <div className={styles.progressLabel}>
        <span>{timeFormatter(duration)}</span>
      </div>
    </div>
  );
}

export default CustomProgressbar;
