const updateMediaContent = () =>
  // { title, artist, album, artist }
  {
    const data = {
      title: 'Malabari Banger',
      artist: 'Dabzee Mhr Joker SA',
      album: 'Trending Now Malayalam...',
      artwork: [
        {
          src: 'https://i.scdn.co/image/ab67616d000048510a5fda5bb1a466fc1ee47d56',
          sizes: '64x64',
          type: 'image/jpeg',
        },
        {
          src: 'https://i.scdn.co/image/ab67616d00001e020a5fda5bb1a466fc1ee47d56',
          sizes: '300x300',
          type: 'image/jpeg',
        },
        {
          src: 'https://i.scdn.co/image/ab67616d0000b2730a5fda5bb1a466fc1ee47d56',
          sizes: '640x640',
          type: 'image/jpeg',
        },
      ],
    };
    if ('mediaSession' in navigator) {
      // navigator.mediaSession.metadata = new MediaMetadata({
      //   title,
      //   artist,
      //   album,
      //   artist,
      // });
      navigator.mediaSession.metadata = new MediaMetadata(data);
    }
  };
export default updateMediaContent;
