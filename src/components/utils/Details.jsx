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
    setMovieDetails(data)
  }

  useEffect(() => {
    fetchMovieDetails.current();
  }, []);

  return (
    <>
      {showLoading && <Loading/>}
      <div className='px-4 2xl:container mx-auto'>
        <div className="mt-4 mb-8 xl:mb-12">
          <iframe
            className="w-full aspect-video xs:px-6 sm:px-10 md:p-14 lg:px-16 xl:px-20"
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
        <div className='absolute top-0 w-full h-full sm:grid sm:grid-cols-2 bg-gradient-to-t from-[#141414] from-10% '>
          <div className='order-1 flex items-center justify-center px-14 2xl:px-40 mt-12'>
            <img 
              className='w-28 shadow-zinc-700 shadow-lg sm:w-52 md:w-60 lg:w-72 xl:w-80 2xl:w-[22rem]'
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.id} />
          </div>
          <div className='flex justify-center items-center gap-1 my-4'>
            <RatingCircle rating={Number(movieDetails.vote_average).toFixed(1)}/>
            <p>
              <b className='font-extrabold'>
              {movieDetails.genres &&
                movieDetails.genres.slice(0, 3).map((genre, idx) => (
                  <span key={idx} className='pt-[0.05rem] pb-1 px-2 mx-1 cursor-pointer outline outline-1 outline-red-700 rounded-2xl text-white tracking-widest text-xs xs:leading-[13px] md:leading-4 lg:text-sm xl:text-base'>
                    {genre.name}
                  </span>
                ))}
              </b>
            </p>
          </div>
          <div className='order-2 flex flex-col justify-center pr-6 lg:pr-10 xl:pr-20 select-none gap-2 px-4 '>
            <h1 className='text-white text-center text-2xl font-extrabold pb-2 md:text-3xl lg:text-4xl xl:text-5xl'>{movieDetails.title}</h1>
            <div>
              <h3 className='text-white tracking-widest font-extrabold text-xs xs:leading-[13px] md:leading-4 lg:text-sm xl:text-base'>Overview:</h3>
              <p className='overview text-white tracking-widest text-xs pl-2 h-16 overflow-y-auto xs:leading-[13px] md:leading-4 lg:text-sm xl:text-base'>{movieDetails.overview}</p>
            </div>
          </div>
          <div className='grid grid-cols-2 mt-4 px-4 gap-2'>
            <div className='order-1 text-white tracking-widest text-xs xs:leading-[13px] md:leading-4 lg:text-sm xl:text-base'>
              <p><b className='font-extrabold'>Status:</b> {movieDetails.status}</p>
              <p><b className='font-extrabold'>Released Date:</b> {dayjs(movieDetails.release_date).format("MMMM DD, YYYY")}</p>
              <p><b className='font-extrabold'>Duration:</b> {movieDetails.runtime} mins</p>
            </div>
            <div className='order-2 text-white tracking-widest text-xs xs:leading-[13px] md:leading-4 lg:text-sm xl:text-base'>
              <p><b className='font-extrabold'>Country:</b> {movieDetails.production_countries && movieDetails.production_countries[0].name}</p>
              <p><b className='font-extrabold'>Budget:</b> ${Number(movieDetails.budget).toLocaleString()}</p>
              <p><b className='font-extrabold'>Revenue:</b> ${Number(movieDetails.revenue).toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-inherit h-[25vh]'></div>
      <div className='container mx-auto text-white tracking-widest font-extrabold text-lg lg:text-xl xl:text-2xl'>
        <Cast/>
        <SimilarMovie/>
      </div>
    </>
  )
}

export const TvDetails = ({showLoading}) => {
  const [movieDetails, setMovieDetails] = useState({})
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
    console.log(data);
    setMovieDetails(data)
  }

  useEffect(() => {
    fetchTvDetails.current();
  }, []);

  return (
    <>
      {showLoading && <Loading/>}
      <div className='px-4 2xl:container mx-auto'>
        <div className="mt-4 mb-8 xl:mb-12">
          <iframe
            className="w-full aspect-video xs:px-6 sm:px-10 md:p-14 lg:px-16 xl:px-20"
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
        <div className='absolute top-0 w-full h-full sm:grid sm:grid-cols-2 bg-gradient-to-t from-[#141414] from-10% '>
          <div className='order-1 flex items-center justify-center px-14 2xl:px-40 mt-12'>
            <img 
              className='w-28 shadow-zinc-700 shadow-lg sm:w-52 md:w-60 lg:w-72 xl:w-80 2xl:w-[22rem]'
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.id} />
          </div>
          <div className='flex justify-center items-center gap-1 my-4'>
            <RatingCircle rating={Number(movieDetails.vote_average).toFixed(1)}/>
            <p>
              <b className='font-extrabold'>
              {movieDetails.genres &&
                movieDetails.genres.slice(0, 3).map((genre, idx) => (
                  <span key={idx} className='pt-[0.05rem] pb-1 px-2 mx-1 cursor-pointer outline outline-1 outline-red-700 rounded-2xl text-white tracking-widest text-xs xs:leading-[13px] md:leading-4 lg:text-sm xl:text-base'>
                    {genre.name}
                  </span>
                ))}
              </b>
            </p>
          </div>
          <div className='order-2 flex flex-col justify-center pr-6 lg:pr-10 xl:pr-20 select-none gap-2 px-4 '>
            <h1 className='text-white text-center text-2xl font-extrabold pb-2 md:text-3xl lg:text-4xl xl:text-5xl'>{movieDetails.title}</h1>
            <div>
              <h3 className='text-white tracking-widest font-extrabold text-xs xs:leading-[13px] md:leading-4 lg:text-sm xl:text-base'>Overview:</h3>
              <p className='overview text-white tracking-widest text-xs pl-2 h-16 overflow-y-auto xs:leading-[13px] md:leading-4 lg:text-sm xl:text-base'>{movieDetails.overview}</p>
            </div>
          </div>
          <div className='grid grid-cols-2 mt-4 px-4 gap-2'>
            <div className='order-1 text-white tracking-widest text-xs xs:leading-[13px] md:leading-4 lg:text-sm xl:text-base'>
              <p><b className='font-extrabold'>Status:</b> {movieDetails.status}</p>
              <p><b className='font-extrabold'>Released Date:</b> {dayjs(movieDetails.release_date).format("MMMM DD, YYYY")}</p>
              <p><b className='font-extrabold'>Duration:</b> {movieDetails.runtime} mins</p>
            </div>
            <div className='order-2 text-white tracking-widest text-xs xs:leading-[13px] md:leading-4 lg:text-sm xl:text-base'>
              <p><b className='font-extrabold'>Country:</b> {movieDetails.production_countries && movieDetails.production_countries[0].name}</p>
              <p><b className='font-extrabold'>Budget:</b> ${Number(movieDetails.budget).toLocaleString()}</p>
              <p><b className='font-extrabold'>Revenue:</b> ${Number(movieDetails.revenue).toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-inherit h-[25vh]'></div>
      <div className='container mx-auto text-white tracking-widest font-extrabold text-lg lg:text-xl xl:text-2xl'>
        <Cast/>
      </div>
    </>
  )
}
