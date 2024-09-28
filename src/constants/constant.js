const Token_URL = 'https://accounts.spotify.com/api/token';
const Base_URL = 'https://api.spotify.com/v1';
const Liked_Songs = '/me/tracks?limit=50';
const Albums = '/me/albums';
const Playlist = '/me/playlists';
const Artists = '/me/following?type=artist';
const Several_Category = 'browse/categories';
const Several_Albums = '/albums/{id}';
const New_Release = '/browse/new-releases';
const Top_Items = '/me/top/{type(artists/tracks)}';
const Featured_Playlist = '/browse/featured-playlists';
const Several_Tracks = '/tracks/{id}';
const Artists_Album = '/artists/{id}/albums';
const Artists_TopTracks = '/artists/{id}/top-tracks';
const Several_Artists = '/artists/{id}';
const Several_BrowserCategory = '/browse/categories';
const Search_Item = '/search';
const Profile = '/me';

export {
  Token_URL,
  Base_URL,
  Liked_Songs,
  Albums,
  Playlist,
  Artists,
  Several_Category,
  Several_Albums,
  New_Release,
  Top_Items,
  Featured_Playlist,
  Several_Tracks,
  Artists_Album,
  Artists_TopTracks,
  Several_Artists,
  Several_BrowserCategory,
  Search_Item,
  Profile,
};
