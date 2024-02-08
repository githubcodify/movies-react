// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EpisodePage from './pages/EpisodePage';
import FavoritesPage from './pages/FavoritesPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/episode/:episodeId" component={EpisodePage} />
        <Route exact path="/favorite-characters" component={FavoritesPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
