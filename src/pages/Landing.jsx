import React from 'react'
import Navbar from '../components/Navbar'
import { HeroBackdrop } from '../components/HeroBackdrop';
import { TrendingMovies } from '../components/TrendingMovies';

function Landing() {
  return (
    <div>
      <Navbar/>
      <section>
        <HeroBackdrop/>
      </section>
      <section className='mt-12'>
        <div className='2xl:container 2xl:mx-auto'>
          <h1 className='text-base tracking-widest font-semibold mx-4 lg:text-lg xl:text-xl'>TRENDING</h1>
          <TrendingMovies/>
        </div>
      </section>
    </div>
  )
}

export default Landing