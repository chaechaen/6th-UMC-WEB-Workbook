import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MainPage from './pages/main-page/MainPage';
import PopularPage from './pages/PopularPage';
import NowPlayingPage from './pages/NowPlayingPage';
import TopRatedPage from './pages/TopRatedPage';
import UpComing from './pages/UpComing';
import Login from './pages/login/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/popular" element={<PopularPage />} />
        <Route path="/now-playing" element={<NowPlayingPage />} />
        <Route path="/top-rated" element={<TopRatedPage />} />
        <Route path="/upcoming" element={<UpComing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
