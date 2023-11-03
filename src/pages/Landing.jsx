import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { HeroBackdrop } from '../components/HeroBackdrop';
import { TrendingMovie, TrendingTv } from '../components/Trending';
import { PopularMovie, PopularTv } from '../components/Popular';
import { TopRatedMovie, TopRatedTv } from '../components/TopRated';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

function Landing({showLoading}) {
  const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          setBackToTop(true)
        } else {
          setBackToTop(false)
        }
      })
    }, [])

    const scrollUp = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }

  return (
    <>
      {showLoading && <Loading/>}
      <section>
        <HeroBackdrop/>
      </section>
      {backToTop && <div className='bg-red-700 rounded-full flex justify-center items-center text-[#fff] fixed right-12 bottom-12 h-8 w-8 z-40 cursor-pointer transition-all hover:outline-1 hover:outline hover:outline-red-700 hover:outline-offset-[0.5rem] hover:transition-all xs:h-10 xs:w-10 md:h-12 md:w-12 lg:right-24 lg:bottom-20 2xl:right-[7%]' onClick={scrollUp} title='Scroll to top'><ArrowUpwardRoundedIcon/></div>}
      <section className='mt-8 flex flex-col gap-8 2xl:container 2xl:mx-auto'>
        <h1 className='text-lg tracking-widest font-semibold mx-4 border-l-[0.3rem] border-red-700 pl-2 lg:text-xl xl:text-2xl'>TOP 10 TRENDING MOVIE</h1>
        <TrendingMovie/>
        <h1 className='text-lg tracking-widest font-semibold mx-4 border-l-[0.3rem] border-red-700 pl-2 lg:text-xl xl:text-2xl'>TOP 10 TRENDING TV SHOWS</h1>
        <TrendingTv/>
      </section>
      <section className='mt-8 flex flex-col gap-8 2xl:container 2xl:mx-auto'>
        <h1 className='text-lg tracking-widest font-semibold mx-4 border-l-[0.3rem] border-red-700 pl-2 lg:text-xl xl:text-2xl'>POPULAR MOVIE</h1>
        <PopularMovie/>
        <h1 className='text-lg tracking-widest font-semibold mx-4 border-l-[0.3rem] border-red-700 pl-2 lg:text-xl xl:text-2xl'>POPULAR TV SHOWS</h1>
        <PopularTv/>
      </section>
      <section className='mt-8 flex flex-col gap-8 2xl:container 2xl:mx-auto'>
        <h1 className='text-lg tracking-widest font-semibold mx-4 border-l-[0.3rem] border-red-700 pl-2 lg:text-xl xl:text-2xl'>TOP-RATED MOVIE</h1>
        <TopRatedMovie/>
        <h1 className='text-lg tracking-widest font-semibold mx-4 border-l-[0.3rem] border-red-700 pl-2 lg:text-xl xl:text-2xl'>TOP-RATED TV SHOWS</h1>
        <TopRatedTv/>
      </section>
    </>
  )
}

export default Landing