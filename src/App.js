import './styles/index.css';
import './styles/App.css';
import Landing from './pages/Landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import { useEffect, useState } from 'react';
import { MovieDetails } from './pages/MovieDetails';
import { TvDetails } from './pages/TvDetails';
import { SeasonDetails } from './pages/SeasonDetails';
import { EpisodesDetails } from './pages/EpisodesDetails';
import { Movies } from './pages/Movies';
import { TvShows } from './pages/TvShows';

function App() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 2500);
  });
  return (
    <>        
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Landing showLoading={showLoading}/>}/>
            <Route path='/discover/movie' element={<Movies showLoading={showLoading}/>}/>
            <Route path='/discover/tv' element={<TvShows showLoading={showLoading}/>}/>
            <Route path='/movie/:id' element={<MovieDetails/>}/>
            <Route path='/tv/:id' element={<TvDetails showLoading={showLoading}/>}/>
            <Route path='/tv/:id/season/:seasonNum' element={<SeasonDetails showLoading={showLoading}/>}/>
            <Route path='/tv/:id/season/:seasonNum/episode/:episodeNum' element={<EpisodesDetails/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
