import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { MovieCard } from '../components/MovieCard'
import { MovieBackdrop } from '../components/MovieBackdrop';

function Landing() {
  const [movies, setMovies] = useState([]);

  const fetchMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=2f1b97f3c5516282fbe25825bb55595c"
    )
      .then((res) => res.json())
      .then((json) => setMovies(json.results))
      .catch((err) => console.error("error:" + err));
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div>
      <Navbar/>
      <section>
        <MovieBackdrop movies={movies}/>
      </section>
      <section className='mt-12 2xl:container 2xl:mx-auto'>
        <div>
          <h1 className='mb-6 ml-4 text-sm tracking-widest font-semibold lg:text-base xl:text-lg'>TRENDING</h1>
          <MovieCard movies={movies}/>
        </div>
      </section>
      <section className='mt-12 2xl:container 2xl:mx-auto'>
        <div>
          <h1 className='mb-6 ml-4 text-sm tracking-widest font-semibold lg:text-base xl:text-lg'>TRENDING</h1>
          <MovieCard movies={movies}/>
        </div>
      </section>
    </div>
  )
}

export default Landing