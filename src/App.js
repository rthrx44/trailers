import './styles/index.css';
import './styles/App.css';
import Landing from './pages/Landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import { useEffect, useState } from 'react';
import Loading from './components/Loading';
import { MovieDetails } from './pages/MovieDetails';
import { TvDetails } from './pages/TvDetails';
import { SeasonDetails } from './pages/SeasonDetails';
import { EpisodesDetails } from './pages/EpisodesDetails';

function App() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 3000);
  });
  return (
    <>        
      {showLoading && <Loading/>}
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/movie/:id' element={<MovieDetails/>}/>
            <Route path='/tv/:id' element={<TvDetails/>}/>
            <Route path='/tv/:id/season/:seasonNum' element={<SeasonDetails/>}/>
            <Route path='/tv/:id/season/:seasonNum/episode/:episodeNum' element={<EpisodesDetails/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
