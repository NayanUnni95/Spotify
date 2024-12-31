const AUTH_URL = 'https://accounts.spotify.com/authorize';
const Token_URL = 'https://accounts.spotify.com/api/token';
const Base_URL = 'https://api.spotify.com/v1';
const Liked_Songs = '/me/tracks?limit=50';
const Albums = '/me/albums';
const Playlist = '/me/playlists';
const PlaylistWithId = '/playlists';
const Artists = '/me/following?type=artist&limit=50';
const Several_Category = 'browse/categories';
const Several_Albums = '/albums';
const New_Release = '/browse/new-releases';
const Top_Items = '/me/top/{type(artists/tracks)}';
const Featured_Playlist = '/browse/featured-playlists';
const Several_Tracks = '/tracks/{id}';
const Single_Artists = '/artists';
const Search_Item = '/search';
const Profile = '/me';
const Recently_Played = '/me/player/recently-played';
const Recommendation =
  '/recommendations?seed_artists={artist_id}&seed_genres={genre}&seed_tracks={track_id}';
const Today_Hits = '/search?q=playlist:"Today\'s Biggest Hits"&type=playlist';
const Charts = '/search?q=charts&type=playlist';
const County_Best = `/browse/categories?country=`;
const User_Profile = '/users';
const Category_Playlist =
  '/playlists'; /* '/browse/categories/{category_id}/playlists'
  (Several_Category + Category_Playlist) */
const scope =
  'user-read-private user-read-email playlist-modify-private playlist-modify-public playlist-read-private user-top-read user-library-read user-follow-read user-read-recently-played';
const User_Follow_Read = '/me/following';

export {
  AUTH_URL,
  Token_URL,
  Base_URL,
  Liked_Songs,
  Albums,
  Playlist,
  PlaylistWithId,
  Artists,
  Several_Category,
  Several_Albums,
  New_Release,
  Top_Items,
  Featured_Playlist,
  Several_Tracks,
  Single_Artists,
  Search_Item,
  Profile,
  Recently_Played,
  Recommendation,
  Today_Hits,
  Charts,
  County_Best,
  User_Profile,
  Category_Playlist,
  scope,
  User_Follow_Read,
};
