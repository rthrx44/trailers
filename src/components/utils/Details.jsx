import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import dayjs from 'dayjs';
import Loading from '../Loading';
import { RatingCircle } from './RatingCircle';
import Cast from '../Cast';
import { SimilarMovie } from '../Similar';

export const MovieDetails = ({showLoading}) => {
  const [movieDetails, setMovieDetails] = useState({})
  const getId = localStorage.getItem("clickItem")

  const BASE_URL = "https://api.themoviedb.org/3"
  const AUTH_KEY = process.env.REACT_APP_AUTH_KEY
  const fetchMovieDetails = useRef(() => {})

  const options = {
    params: {language: 'en-US'},
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`
    }
  };

  fetchMovieDetails.current = async() => {
    const { data } = await axios.get(`${BASE_URL}/movie/${getId}`, options)
    console.log(data);
    setMovieDetails(data)
  }

  useEffect(() => {
    fetchMovieDetails.current();
  }, []);

  return (
    <>
      {showLoading && <Loading/>}
      <div className='px-4 container mx-auto'>
        <div className="mt-4 mb-8 xl:mb-12">
          <iframe
            className="w-full aspect-video sm:px-10 md:p-12 lg:px-16 xl:px-20"
            src={'https://autoembed.to/movie/tmdb/' + getId}
            allowFullScreen={true}
            title='Video Container'
          ></iframe>
        </div>
      </div>
      <div className='relative container mx-auto'>
        <img 
          className='md:hidden w-full mx-auto grayscale opacity-25'
          src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`} 
          alt={movieDetails.id} />
        <img 
          className='hidden md:flex grayscale opacity-25'
          src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`} 
          alt={movieDetails.id} />
        <div className='absolute top-0 w-full h-full md:grid md:grid-cols-3 bg-gradient-to-t from-[#141414] from-25% md:from-35%'>
          <div className='order-1 flex items-center justify-center mt-12 md:mt-0'>
            <img 
              className='w-28 shadow-zinc-700 shadow-lg 2xs:w-36 xs:w-44 sm:w-52 md:w-44 lg:w-52 xl:w-60 2xl:w-72'
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.id} />
          </div>
          <div className='order-2 col-span-2 md:grid md:my-14 lg:my-20 xl:my-32'>
            <div className='flex flex-col justify-center lg:pr-10 xl:pr-20 select-none gap-4 px-4 '>
              <h1 className='mt-4 text-white text-center text-2xl font-extrabold 2xs:text-3xl xs:text-4xl sm:text-[2.5rem] md:text-2xl lg:text-3xl xl:text-4xl'>{movieDetails.title}</h1>
              <div className='order-2 flex justify-center items-center gap-1 pb-2 '>
                <RatingCircle rating={Number(movieDetails.vote_average).toFixed(1)}/>
                <p>
                  <b className='font-extrabold'>
                  {movieDetails.genres &&
                    movieDetails.genres.slice(0, 3).map((genre, idx) => (
                      <span key={idx} className='pt-[0.05rem] pb-1 px-2 mx-1 cursor-pointer outline outline-1 outline-red-700 rounded-2xl text-white tracking-widest text-xs xs:text-sm md:text-xs lg:text-sm'>
                        {genre.name}
                      </span>
                    ))}
                  </b>
                </p>
              </div>
            </div>
            <div className='mt-2 flex px-4'>
              <h3 className='text-white tracking-widest font-extrabold text-xs xs:text-sm md:text-xs lg:text-sm xl:text-lg'>Overview:</h3>
              <p className='overview text-white tracking-widest text-xs pl-2 h-16 overflow-y-auto xs:text-sm xs:h-24 md:text-xs lg:text-sm lg:h-30 xl:text-base'>{movieDetails.overview}</p>
            </div>
            <div className='grid grid-cols-2 mt-4 px-4 gap-2'>
              <div className='order-1 text-white tracking-widest text-xs xs:text-sm md:text-xs lg:text-sm xl:text-lg'>
                <p><b className='font-extrabold'>Status:</b> {movieDetails.status}</p>
                <p><b className='font-extrabold'>Released Date:</b> {dayjs(movieDetails.release_date).format("MMMM DD, YYYY")}</p>
                <p><b className='font-extrabold'>Duration:</b> {movieDetails.runtime} mins</p>
              </div>
              <div className='order-2 text-white tracking-widest text-xs xs:text-sm md:text-xs lg:text-sm xl:text-lg'>
                <p><b className='font-extrabold'>Country:</b> {movieDetails.production_countries && movieDetails.production_countries[0].name}</p>
                <p><b className='font-extrabold'>Budget:</b> ${Number(movieDetails.budget).toLocaleString()}</p>
                <p><b className='font-extrabold'>Revenue:</b> ${Number(movieDetails.revenue).toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-inherit h-[25vh] 2xs:h-[10vh] xs:h-[5vh] sm:hidden'></div>
      </div>
      <div className='container mx-auto text-white tracking-widest font-extrabold text-lg lg:text-xl xl:text-2xl'>
        <Cast/>
        <SimilarMovie/>
      </div>
    </>
  )
}
