import React from 'react'
import Navbar from '../components/Navbar'
import { MovieBackdrop } from '../components/MovieBackdrop';
import { TrendingMovies } from '../components/TrendingMovies';

function Landing() {
  return (
    <div>
      <Navbar/>
      <section>
        <MovieBackdrop/>
      </section>
      <section className='mt-12 2xl:container 2xl:mx-auto'>
        <div>
          <h1 className='ml-4 text-base tracking-widest font-semibold lg:text-lg xl:text-xl'>TRENDING</h1>
          <TrendingMovies/>
        </div>
      </section>
    </div>
  )
}

export default Landing