import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/search" exact element={<Search />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
