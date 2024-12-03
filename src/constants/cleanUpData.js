function removeCharactersAfterSymbol(word) {
  const wordArray = word.split('(');
  return wordArray[0];
}
const LikedSongs = (userData) => {
  if (userData && userData.total > 0) {
    return {
      title: 'liked songs',
      type: 'playlist',
      image: [
        {
          height: 640,
          url: 'https://misc.scdn.co/liked-songs/liked-songs-64.png',
          width: 640,
        },
        {
          height: 300,
          url: 'https://misc.scdn.co/liked-songs/liked-songs-64.png',
          width: 300,
        },
        {
          height: 64,
          url: 'https://misc.scdn.co/liked-songs/liked-songs-64.png',
          width: 64,
        },
      ],
      songs: userData.total,
      id: 'tracks',
      href: userData.href,
      items: userData.items,
      routePath: 'collection',
    };
  }
};
const album = (albumData) => {
  if (albumData && albumData.total > 0) {
    return albumData.items.map((obj) => {
      if (obj != null)
        return {
          title: removeCharactersAfterSymbol(obj.album.name),
          type: obj.album.type,
          image: obj.album.images,
          songs: obj.album.tracks.total,
          id: obj.album.id,
          href: obj.album.href,
          items: null,
          routePath: obj.album.type,
        };
    });
  }
};
const playlist = (playlistData) => {
  if (playlistData && playlistData.total > 0) {
    return playlistData.items.map((obj) => {
      if (obj != null)
        return {
          title: removeCharactersAfterSymbol(obj.name),
          type: obj.type,
          image: obj.images,
          songs: obj.tracks.total,
          id: obj.id,
          href: obj.href,
          items: null,
          routePath: obj.type,
        };
    });
  }
};
const artists = (artistsData) => {
  if (artistsData && artistsData.artists.total > 0) {
    return artistsData.artists.items.map((obj) => {
      if (obj != null)
        return {
          title: removeCharactersAfterSymbol(obj.name),
          type: obj.type,
          image: obj.images,
          songs: null,
          id: obj.id,
          href: obj.href,
          items: null,
          routePath: obj.type,
        };
    });
  }
};
export const DataCleanUp = (dataSet) => {
  return [
    LikedSongs(dataSet[0]),
    album(dataSet[1]),
    playlist(dataSet[2]),
    artists(dataSet[3]),
  ].flat(1);
};
