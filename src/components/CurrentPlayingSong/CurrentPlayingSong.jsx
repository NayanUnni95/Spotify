import React from 'react';
import styles from './CurrentPlayingSong.module.css';

function BottomSongDetails({ TrackData }) {
  return (
    <div className={styles.songDetailsContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.imgContainer}>
          <img src={TrackData.images[0].url} alt={TrackData.name} />
        </div>
        <div className={styles.detailsContainer}>
          <div className={styles.itemTitle}>
            <div className={styles.text}>
              <span>{TrackData.name}</span>
            </div>
          </div>
          <div className={styles.itemDes}>
            <div className={styles.text}>
              <span>
                {TrackData.artists[0].name} {TrackData.artists[1].name} {''}
                {TrackData.artists[2].name} {TrackData.artists[3].name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomSongDetails;
