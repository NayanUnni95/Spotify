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
export const playlist = (playlistData) => {
  if (playlistData && playlistData.total > 0) {
    return playlistData.items.map((obj) => {
      if (obj != null) {
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
      }
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
export const artistAlbums = (artistAlbumsData) => {
  if (artistAlbumsData && artistAlbumsData.total > 0)
    return {
      title: 'artists playlists',
      items: artistAlbumsData.items.map((obj) => {
        if (obj != null) {
          return {
            name: obj.name,
            type: obj.type,
            id: obj.id,
            artists: obj.artists.map((data) => {
              return {
                name: data.name,
                id: data.id,
              };
            }),
            image: obj.images,
          };
        }
      }),
    };
};
const genreTracks = (trackData) => {
  if (trackData && trackData.total > 0) {
    return {
      title: 'Relative Tracks',
      items: trackData.items.map((obj) => {
        if (obj != null) {
          return {
            name: removeCharactersAfterSymbol(obj.name),
            id: obj.id,
            type: obj.type,
            image: obj.album.images,
            artists: [],
          };
        }
      }),
    };
  }
};
const genreAlbum = (albumData) => {
  if (albumData && albumData.total > 0) {
    return {
      title: 'Relative Albums',
      items: albumData.items.map((obj) => {
        if (obj != null)
          return {
            name: removeCharactersAfterSymbol(obj.name),
            id: obj.id,
            type: obj.type,
            image: obj.images,
            artists: [],
          };
      }),
    };
  }
};
const genreArtist = (artistsData) => {
  if (artistsData && artistsData.total > 0) {
    return {
      title: 'Relative Artist',
      items: artistsData.items.map((obj) => {
        if (obj != null)
          return {
            name: removeCharactersAfterSymbol(obj.name),
            id: obj.id,
            type: obj.type,
            image: obj.images,
            artists: [],
          };
      }),
    };
  }
};
export const genrePlaylist = (playlistData) => {
  if (playlistData && playlistData.total > 0) {
    return {
      title: 'Relative Playlist',
      items: playlistData.items.map((obj) => {
        if (obj != null)
          return {
            name: removeCharactersAfterSymbol(obj.name),
            id: obj.id,
            type: obj.type,
            image: obj.images,
            artists: [],
          };
      }),
    };
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
export const GenreDataCleanUp = (dataSet) => {
  return [
    genreArtist(dataSet.artists),
    genrePlaylist(dataSet.playlists),
    genreTracks(dataSet.tracks),
    genreAlbum(dataSet.albums),
  ];
};
