import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TopPlaylist.module.css';

function TopPlaylist() {
  const navigate = useNavigate();
  const playlistData = [
    {
      name: 'liked songs',
      image: 'https://misc.scdn.co/liked-songs/liked-songs-64.png',
      id: 'tracks',
      routePath: 'collection',
    },
    {
      name: 'upbeat mix',
      image:
        'https://seed-mix-image.spotifycdn.com/v6/img/upbeat/6eUKZXaKkcviH0Ku9w2n3V/en-GB/default',
      id: '37i9dQZF1EVJHK7Q1TBABQ',
      routePath: 'playlist',
    },
    {
      name: 'pop mix',
      image:
        'https://seed-mix-image.spotifycdn.com/v6/img/pop/5WUlDfRSoLAfcVSX1WnrxN/en-GB/default',
      id: '37i9dQZF1EQncLwOalG3K7',
      routePath: 'playlist',
    },
    {
      name: 'feel good malayalam',
      image: 'https://i.scdn.co/image/ab67706f0000000288281d5b216cdc10e4e89521',
      id: '37i9dQZF1DX0YqJHUZrLcd',
      routePath: 'playlist',
    },
    {
      name: 'dabzee all songs',
      image:
        'https://image-cdn-fa.spotifycdn.com/image/ab67706c0000d72c70bc9a85551e923e6f050854',
      id: '6VXz0rPUyoA3wY3EpjVaIP',
      routePath: 'playlist',
    },
    {
      name: 'trending now malayalam',
      image: 'https://i.scdn.co/image/ab67706f00000002c9e1392b702f27b504fd8419',
      id: '37i9dQZF1DWTYKFynxp6Fs',
      routePath: 'playlist',
    },
    {
      name: 'varshangalkku shesham',
      image:
        'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8454eb1476bb8d8824249bdfe2',
      id: '2nylXQ63GwC7OfHUVliQBh',
      routePath: 'playlist',
    },
    {
      name: '2000s mix',
      image:
        'https://seed-mix-image.spotifycdn.com/v6/img/two_thousands/5xLhn0Pjced0oiBuLUISr3/en-GB/default',
      id: '37i9dQZF1EQn4jwNIohw50',
      routePath: 'playlist',
    },
  ];
  return (
    <div className={styles.topPlaylistSection}>
      <div className={styles.innerSection}>
        {playlistData.map((data, index) => {
          return (
            <div
              className={styles.playlistCell}
              key={index}
              onClick={() => navigate(`/${data.routePath}/${data.id}`)}
            >
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
