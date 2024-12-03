import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Library from './pages/Library/Library';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Collection from './pages/Collection/Collection';
import Playlist from './pages/Playlist/Playlist';
import Genre from './pages/Genre/Genre';
import Artist from './pages/Artist/Artist';
import Album from './pages/Album/Album';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/library" element={<Library />} />
            <Route path="/collection/tracks" element={<Collection />} />
            <Route path="/playlist/:playlistId" element={<Playlist />} />
            <Route path="/artist/:artistId" element={<Artist />} />
            <Route path="/album/:albumId" element={<Album />} />
            <Route path="/track/:trackId" element={'Track Page'} />
            <Route path="/user/:userId" element={'User Page'} />
            <Route path="/genre/:genreId" element={<Genre />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
