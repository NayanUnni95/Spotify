import React from 'react';
import styles from './CurrentPlayingSong.module.css';

function BottomSongDetails() {
  // Reference data
  const TrackData = {
    item: {
      name: 'Malabari Banger',
      album: {
        images: [
          {
            url: 'https://i.scdn.co/image/ab67616d000048510a5fda5bb1a466fc1ee47d56',
            height: 64,
            width: 64,
          },
        ],
      },
      artists: [
        {
          name: 'M.H.R',
        },
        {
          name: 'JOKER390P',
        },
        {
          name: 'SA',
        },
        {
          name: 'Dabzee',
        },
      ],
    },
  };
  return (
    <div className={styles.songDetailsContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.imgContainer}>
          <img
            src="https://i.scdn.co/image/ab67616d000048510a5fda5bb1a466fc1ee47d56"
            alt=""
          />
        </div>
        <div className={styles.detailsContainer}>
          <div className={styles.itemTitle}>
            <div className={styles.text}>
              <span>{TrackData.item.name}</span>
            </div>
          </div>
          <div className={styles.itemDes}>
            <div className={styles.text}>
              <span>
                {TrackData.item.artists[0].name}{' '}
                {TrackData.item.artists[1].name} {''}
                {TrackData.item.artists[2].name}{' '}
                {TrackData.item.artists[3].name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomSongDetails;
