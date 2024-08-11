import React, { useContext } from 'react';
import styles from './CurrentPlayingSong.module.css';
import { MyContext } from '../../layout/AppLayout';

function BottomSongDetails({ TrackData }) {
  const { showPlayer, setShowPlayer } = useContext(MyContext);
  return (
    <div
      className={styles.songDetailsContainer}
      onClick={() => {
        setShowPlayer(!showPlayer);
      }}
    >
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
              <span>{TrackData.artists.join(', ')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomSongDetails;
