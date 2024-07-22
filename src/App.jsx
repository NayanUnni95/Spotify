import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Login from './pages/Login/Login';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/search" exact element={<Search />} />
          </Route>
          <Route path="/login" exact element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
