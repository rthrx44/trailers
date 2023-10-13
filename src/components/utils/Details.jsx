import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import Loading from '../Loading';
import { RatingCircle } from './RatingCircle';

export const Details = ({showLoading}) => {
  const [movieDetails, setMovieDetails] = useState({})
  const getId = localStorage.getItem("clickItem")

  const BASE_URL = "https://api.themoviedb.org/3"
  const AUTH_KEY = process.env.REACT_APP_AUTH_KEY
  const fetchMovie = useRef(() => {})

  const options = {
    params: {language: 'en-US'},
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`
    }
  };

  fetchMovie.current = async() => {
    const { data } = await axios.get(`${BASE_URL}/movie/${getId}`, options)
    setMovieDetails(data)
  }

  useEffect(() => {
    fetchMovie.current();
  }, []);

  return (
    <>
      {showLoading && <Loading/>}
      <div className='px-4 2xl:container mx-auto'>
        <div className="">
          <iframe
            className="w-full p-4 aspect-video md:p-10 2xl:aspect-square"
            src={'https://autoembed.to/movie/tmdb/' + getId}
            allowFullScreen={true}
            title='Video Container'
          ></iframe>
        </div>
      </div>
      <div className='relative mx-auto'>
        <img 
          className='sm:hidden w-full mx-auto grayscale opacity-25'
          src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`} 
          alt={movieDetails.id} />
        <img 
          className='hidden sm:flex grayscale opacity-25'
          src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`} 
          alt={movieDetails.id} />
        <div className='absolute top-0 w-full h-full sm:grid sm:grid-cols-2 bg-gradient-to-t from-[#141414] from-10% outline'>
          <div className='order-1 flex items-center justify-center px-14 2xl:px-40 mt-8'>
            <img 
              className='w-28 shadow-zinc-700 shadow-lg sm:w-52 md:w-60 lg:w-72 xl:w-80 2xl:w-[22rem]'
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.id} />
          </div>
          <div className='flex justify-center items-center gap-4 my-4'>
            <RatingCircle rating={Number(movieDetails.vote_average).toFixed(1)}/>
            <p className='text-white tracking-widest text-xs xs:leading-[13px] md:leading-4 lg:text-sm xl:text-base'>{movieDetails.runtime} mins</p>
          </div>
          <div className='order-2 flex flex-col justify-center pr-6 lg:pr-10 xl:pr-20 select-none gap-2 px-4'>
            <h1 className='text-white text-center text-2xl font-extrabold pb-2 md:text-3xl lg:text-4xl xl:text-5xl'>{movieDetails.title}</h1>
            <p className='text-white tracking-widest text-xs xs:leading-[13px] md:leading-4 lg:text-sm xl:text-base outline'>{movieDetails.overview}</p>
          </div>
        </div>
      </div>
    </>
  )
}
