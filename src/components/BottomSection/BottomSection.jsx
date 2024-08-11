import React from 'react';
import styles from './BottomSection.module.css';
import CurrentPlayingSong from '../CurrentPlayingSong/CurrentPlayingSong';
import MusicController from '../MusicController/MusicController';

function BottomSection() {
  // Reference data
  const TrackData = {
    name: 'Malabari Banger',
    images: [
      {
        url: 'https://i.scdn.co/image/ab67616d000048510a5fda5bb1a466fc1ee47d56',
        height: 64,
        width: 64,
      },
    ],
    artists: ['M.H.R', 'JOKER390P', 'SA', 'Dabzee'],
    source: {
      quality: '320kbps',
      url: 'https://aac.saavncdn.com/504/05b2fb10b4d21f8422e78412ea344ac5_320.mp4',
    },
  };
  return (
    <div className={styles.bottomSection}>
      <CurrentPlayingSong TrackData={TrackData} />
      <MusicController TrackData={TrackData} />
    </div>
  );
}

export default BottomSection;
