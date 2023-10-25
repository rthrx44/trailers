import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import dayjs from 'dayjs';
import Loading from '../components/Loading';
import { RatingCircle } from '../components/utils/RatingCircle';
import { TvCast } from '../components/Cast';
import { SimilarTv } from '../components/Similar';
import { Seasons } from '../components/utils/Seasons';

export const TvDetails = ({showLoading}) => {
  const [tvDetails, setTvDetails] = useState({})
  const getId = localStorage.getItem("clickItem")

  const BASE_URL = "https://api.themoviedb.org/3"
  const AUTH_KEY = process.env.REACT_APP_AUTH_KEY
  const fetchTvDetails = useRef(() => {})

  const options = {
    params: {language: 'en-US'},
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`
    }
  };

  fetchTvDetails.current = async() => {
    const { data } = await axios.get(`${BASE_URL}/tv/${getId}`, options)
    setTvDetails(data)
  }

  useEffect(() => {
    fetchTvDetails.current();
  }, []);

  return (
    <>
      {showLoading && <Loading/>}
      <section className='container mx-auto'>
        <Seasons/>
      </section>
      <section className='relative container mx-auto'>
        <img 
          className='md:hidden w-full mx-auto grayscale opacity-25'
          src={`https://image.tmdb.org/t/p/w500${tvDetails.poster_path}`} 
          alt={tvDetails.id} />
        <img 
          className='hidden md:flex grayscale opacity-25'
          src={`https://image.tmdb.org/t/p/original${tvDetails.backdrop_path}`} 
          alt={tvDetails.id} />
        <div className='absolute top-0 w-full h-full md:grid md:grid-cols-3 bg-gradient-to-t from-[#141414] from-25% md:from-35%'>
          <div className='order-1 flex items-center justify-center mt-12 md:mt-0'>
            <img 
              className='w-28 shadow-zinc-700 shadow-lg 2xs:w-36 xs:w-44 sm:w-52 md:w-44 lg:w-52 xl:w-60 2xl:w-72'
              src={`https://image.tmdb.org/t/p/w500${tvDetails.poster_path}`}
              alt={tvDetails.id} />
          </div>
          <div className='order-2 col-span-2 md:grid md:my-12 lg:my-20 xl:my-32'>
            <div className='flex flex-col justify-center lg:pr-10 xl:pr-20 select-none gap-4 px-4 '>
              <h1 className='mt-4 text-white text-center text-2xl font-extrabold 2xs:text-3xl xs:text-4xl sm:text-[2.5rem] md:text-2xl lg:text-3xl xl:text-4xl'>{tvDetails.name}</h1>
              <div className='order-2 flex justify-center items-center gap-1 pb-2 '>
                <RatingCircle rating={Number(tvDetails.vote_average).toFixed(1)}/>
                <p>
                  <b className='font-extrabold'>
                  {tvDetails.genres &&
                    tvDetails.genres.slice(0, 2).map((genre, idx) => (
                      <span key={idx} className='py-1 px-2 mx-1 cursor-pointer outline outline-1 outline-red-700 rounded-2xl text-white tracking-widest text-xs xs:text-sm md:text-xs lg:text-sm'>
                        {genre.name}
                      </span>
                    ))}
                  </b>
                </p>
              </div>
            </div>
            <div className='mt-2 flex px-4'>
              <h3 className='text-white tracking-widest font-extrabold text-xs xs:text-sm md:text-xs lg:text-sm xl:text-lg'>Overview:</h3>
              <p className='overview text-white tracking-widest text-xs pl-2 h-16 overflow-y-auto xs:text-sm xs:h-24 md:text-xs lg:text-sm lg:h-30 xl:text-base'>{tvDetails.overview}</p>
            </div>
            <div className='grid grid-cols-2 mt-4 px-4 gap-2'>
              <div className='order-1 text-white tracking-widest text-xs xs:text-sm md:text-xs lg:text-sm xl:text-lg'>
                <p><b className='font-extrabold'>Status:</b> {tvDetails.status}</p>
                <p><b className='font-extrabold'>Released Date:</b> {dayjs(tvDetails.release_date).format("MMMM DD, YYYY")}</p>
                <p><b className='font-extrabold'>Episode Duration:</b> {tvDetails.episode_run_time} mins</p>
              </div>
              <div className='order-2 text-white tracking-widest text-xs xs:text-sm md:text-xs lg:text-sm xl:text-lg'>
                <p><b className='font-extrabold'>Country:</b> {tvDetails.production_countries && tvDetails.production_countries[0].name}</p>
                <p><b className='font-extrabold'>Overall Seasons:</b> {tvDetails.number_of_seasons} Seasons</p>
                <p><b className='font-extrabold'>Overall Episodes:</b> {tvDetails.number_of_episodes} Episodes</p>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-inherit h-[25vh] 2xs:h-[10vh] xs:h-[5vh] sm:hidden'></div>
      </section>
      <section className='container mx-auto mt-12 text-white tracking-widest font-extrabold text-lg lg:text-xl xl:text-2xl'>
        <TvCast/>
        <SimilarTv/>
      </section>
    </>
  )
}
