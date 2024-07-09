import React from 'react';
import styles from './TopPlaylist.module.css';

function TopPlaylist() {
  const playlistData = [
    {
      name: 'liked songs',
      image: 'https://misc.scdn.co/liked-songs/liked-songs-64.png',
    },
    {
      name: 'upbeat mix',
      image:
        'https://seed-mix-image.spotifycdn.com/v6/img/upbeat/6eUKZXaKkcviH0Ku9w2n3V/en-GB/default',
    },
    {
      name: 'pop mix',
      image:
        'https://seed-mix-image.spotifycdn.com/v6/img/pop/5WUlDfRSoLAfcVSX1WnrxN/en-GB/default',
    },
    {
      name: 'feel good malayalam',
      image: 'https://i.scdn.co/image/ab67706f0000000288281d5b216cdc10e4e89521',
    },
    {
      name: 'dabzee',
      image: 'https://i.scdn.co/image/ab6761610000e5ebb79e06490aaaf85a3cc84d6a',
    },
    {
      name: 'trending now malayalam',
      image: 'https://i.scdn.co/image/ab67706f00000002c9e1392b702f27b504fd8419',
    },
    {
      name: 'varshangalkku shesham',
      image:
        'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8454eb1476bb8d8824249bdfe2',
    },
    {
      name: '2000s',
      image:
        'https://seed-mix-image.spotifycdn.com/v6/img/two_thousands/5xLhn0Pjced0oiBuLUISr3/en-GB/default',
    },
  ];
  return (
    <div className={styles.topPlaylistSection}>
      <div className={styles.innerSection}>
        {playlistData.map((data, index) => {
          return (
            <div className={styles.playlistCell} key={index}>
              <div className={styles.playlistImg}>
                <img src={data.image} alt={data.name} />
              </div>
              <div className={styles.playlistTitle}>
                <h4>
                  <div className={styles.text}>{data.name}</div>
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopPlaylist;
