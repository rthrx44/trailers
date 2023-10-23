import React from 'react'
import { HeroBackdrop } from '../components/HeroBackdrop';
import { TrendingMovie, TrendingTv } from '../components/Trending';
import { PopularMovie, PopularTv } from '../components/Popular';
import { TopRatedMovie, TopRatedTv } from '../components/TopRated';

function Landing() {

  return (
    <>
    <div>
      <section>
        <HeroBackdrop/>
      </section>
      <section className='mt-8 flex flex-col gap-8'>
        <div className='2xl:container 2xl:mx-auto'>
          <h1 className='text-lg tracking-widest font-semibold mx-4 border-l-[0.3rem] border-red-700 pl-2 lg:text-xl xl:text-2xl'>TOP 10 TRENDING MOVIE</h1>
          <TrendingMovie/>
        </div>
        <div className='2xl:container 2xl:mx-auto'>
          <h1 className='text-lg tracking-widest font-semibold mx-4 border-l-[0.3rem] border-red-700 pl-2 lg:text-xl xl:text-2xl'>TOP 10 TRENDING TV SHOWS</h1>
          <TrendingTv/>
        </div>
      </section>
      <section className='mt-8 flex flex-col gap-8'>
      <div className='2xl:container 2xl:mx-auto'>
          <h1 className='text-lg tracking-widest font-semibold mx-4 border-l-[0.3rem] border-red-700 pl-2 lg:text-xl xl:text-2xl'>POPULAR MOVIE</h1>
          <PopularMovie/>
        </div>
        <div className='2xl:container 2xl:mx-auto'>
          <h1 className='text-lg tracking-widest font-semibold mx-4 border-l-[0.3rem] border-red-700 pl-2 lg:text-xl xl:text-2xl'>POPULAR TV SHOWS</h1>
          <PopularTv/>
        </div>
      </section>
      <section className='mt-8 flex flex-col gap-8'>
      <div className='2xl:container 2xl:mx-auto'>
          <h1 className='text-lg tracking-widest font-semibold mx-4 border-l-[0.3rem] border-red-700 pl-2 lg:text-xl xl:text-2xl'>TOP-RATED MOVIE</h1>
          <TopRatedMovie/>
        </div>
        <div className='2xl:container 2xl:mx-auto'>
          <h1 className='text-lg tracking-widest font-semibold mx-4 border-l-[0.3rem] border-red-700 pl-2 lg:text-xl xl:text-2xl'>TOP-RATED TV SHOWS</h1>
          <TopRatedTv/>
        </div>
      </section>
    </div>
    </>
  )
}

export default Landing