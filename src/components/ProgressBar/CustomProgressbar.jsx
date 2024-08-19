import React from 'react';
import styles from './CustomProgressbar.module.css';

function CustomProgressbar() {
  const seekTimeSec = 50;
  const seekTimePercentage = 50;
  const durationTimeSec = 200;
  const loadedPercentage = 80;
  const timeFormatter = (second) => {
    return new Date(second * 1000).toISOString().substring(14, 19);
  };

  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressLabel}>
        <span>{timeFormatter(seekTimeSec)}</span>
      </div>
      <div className={styles.innerSection}>
        <input
          type="range"
          className={styles.loadedProgressBar}
          min={0}
          value={loadedPercentage}
          max={100}
          style={{
            background: `linear-gradient(to right, #232323d6 ${loadedPercentage}%, #4d4d4d ${loadedPercentage}%)`,
          }}
          disabled
        />
        <input
          type="range"
          min={0}
          value={seekTimePercentage}
          max={100}
          className={styles.bar}
          style={{
            background: `linear-gradient(to right, #ffffff ${seekTimePercentage}%, #ffffff00 ${seekTimePercentage}%`,
          }}
        />
      </div>
      <div className={styles.progressLabel}>
        <span>{timeFormatter(durationTimeSec)}</span>
      </div>
    </div>
  );
}

export default CustomProgressbar;
