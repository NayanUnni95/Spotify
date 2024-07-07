import React from 'react';
import styles from './VerticalCard.module.css';

function VerticalCard() {
  const collectionData = [
    {
      title: 'liked songs',
      image: 'https://misc.scdn.co/liked-songs/liked-songs-64.png',
      type: 'playlist',
      songs: 27,
    },
    {
      title: 'dabzee',
      image: 'https://i.scdn.co/image/ab6761610000101f4b409eacca98860868b00121',
      type: 'artist',
      songs: false,
    },
    {
      title: 'taylor swift',
      image: 'https://i.scdn.co/image/ab6761610000101fe672b5f553298dcdccb0e676',
      type: 'artist',
      songs: false,
    },
    {
      title: 'fejo',
      image: 'https://i.scdn.co/image/ab6761610000101f812c65b63151b599ddc38298',
      type: 'artist',
      songs: false,
    },
    {
      title: 'chain smoker',
      image: 'https://i.scdn.co/image/ab6761610000101f9c0f09a8247c54ecba74819d',
      type: 'artist',
      songs: false,
    },
    {
      title: 'a r',
      image: 'https://i.scdn.co/image/ab6761610000101fb19af0ea736c6228d6eb539c',
      type: 'artist',
      songs: false,
    },
    {
      title: 'justin bieber',
      image: 'https://i.scdn.co/image/ab6761610000101f8ae7f2aaa9817a704a87ea36',
      type: 'artist',
      songs: false,
    },
    {
      title: 'anirudh ravichandran',
      image: 'https://i.scdn.co/image/ab6761610000101ffc7c542c04b5f7dc8f1b1c16',
      type: 'artist',
      songs: false,
    },
    {
      title: 'ed sheeran',
      image: 'https://i.scdn.co/image/ab6761610000101f3bcef85e105dfc42399ef0ba',
      type: 'artist',
      songs: false,
    },
    {
      title: 'n j',
      image: 'https://i.scdn.co/image/ab6761610000101f2f50e8b5c9271ec2e1890ee7',
      type: 'artist',
      songs: false,
    },
    {
      title: 'sushin shyam',
      image: 'https://i.scdn.co/image/ab6761610000101f6c13e8b89efbc084311c963c',
      type: 'artist',
      songs: false,
    },
    {
      title: 'alan walker',
      image: 'https://i.scdn.co/image/ab6761610000101fbf753c009fd9c2d53351dd3c',
      type: 'artist',
      songs: false,
    },
    {
      title: 'summer in bathlehem',
      image: 'https://i.scdn.co/image/ab67616d0000e1a3142858df42ab06c5efd4e418',
      type: 'album',
      songs: false,
    },
    {
      title: 'Thattathin marayathu',
      image: 'https://i.scdn.co/image/ab67616d0000e1a3da9cb8cced2244261f55e84d',
      type: 'album',
      songs: false,
    },
    {
      title: 'all out 10s malayalam',
      image: 'https://i.scdn.co/image/ab67706f00000002f21cff33277dae67bdad776b',
      type: 'album',
      songs: false,
    },
    {
      title: "2000's",
      image:
        'https://seed-mix-image.spotifycdn.com/v6/img/two_thousands/5TB837uKG65w8Jnz5D0bS5/en-GB/default',
      type: 'album',
      songs: false,
    },
    {
      title: 'meg hit mix',
      image: 'https://i.scdn.co/image/ab67706f000000029a66e89ef0922d9d4c94c782',
      type: 'album',
      songs: false,
    },
    {
      title: 'nissaaram',
      image: 'https://i.scdn.co/image/ab6765630000955f5a1dab28ddbc608137d8265a',
      type: 'podcast',
      songs: false,
    },
    {
      title: 'brototype',
      image: 'https://i.scdn.co/image/ab6765630000955f6af184b48e1315d48e8a52f4',
      type: 'podcast',
      songs: false,
    },
    {
      title: 'erci',
      image: 'https://i.scdn.co/image/ab6765630000bdcf0cc1d9f591b33a33841c7228',
      type: 'podcast',
      songs: false,
    },
  ];
  return (
    <div className={styles.libraryVerticalScroll}>
      {collectionData.map((data, index) => {
        return (
          <div className={styles.verticalCard} key={index}>
            <div className={styles.verticalCardImg}>
              {data.type == 'artist' ? (
                <img src={data.image} alt="" className={styles.circleImg} />
              ) : (
                <img src={data.image} alt="" className={styles.squareImg} />
              )}
            </div>
            <div className={styles.verticalCardDetails}>
              <div className={styles.verticalCardTitle}>
                <span>{data.title}</span>
              </div>
              <div className={styles.verticalCardDesc}>
                <div>
                  <span>{data.type}</span>
                </div>
                <span>•</span>
                <div>
                  <span>{data.songs}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default VerticalCard;
