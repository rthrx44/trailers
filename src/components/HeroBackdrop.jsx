import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/autoplay"
import { RatingCircle } from './utils/RatingCircle';
import { LightButton } from './Buttons';

import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';

export const HeroBackdrop = () => {
  const [moviesBackdrop, setMoviesBackdrop] = useState([]);
  console.log(moviesBackdrop);

  const BASE_URL = "https://api.themoviedb.org/3"
  const AUTH_KEY = process.env.REACT_APP_AUTH_KEY
  const discoverMovie = useRef(() => {})

  const options = {
    params: {language: 'en-US'},
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`
    }
  };

  discoverMovie.current = async () => {
    const { data: {results} } = await axios.get(`${BASE_URL}/trending/all/day`, options)
    console.log(results);
    setMoviesBackdrop(results)
  }

  useEffect(() => {
    discoverMovie.current()
  }, []);

  return (
    <>
    <div className="sm:hidden">
      <Swiper 
        loop={true}
        modules={[Autoplay]}
        autoplay= {{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
      >
        {moviesBackdrop.map((movie, idx) => (
            <SwiperSlide key={idx}>
              <img
                className='w-full'
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.id}
              />
              <div className='absolute top-0 w-full h-full text-center flex items-end px-4 bg-gradient-to-t from-[#141414] from-10%'>
                <div className='flex flex-col justify-center pr-4 mb-16 xs:mb-40 gap-2'>
                  <h1 className='text-white text-3xl font-bold mb-2 xs:text-4xl'>{movie.title || movie.name}</h1>
                  <div className='flex justify-center items-center gap-2'>
                    <RatingCircle rating={Number(movie.vote_average).toFixed(1)}/>
                    {/* <a href={`/movie/${movie.id}`}> */}
                      <LightButton 
                        icon={<PlayArrowRoundedIcon/>} 
                        displayText="WATCH NOW"/>
                    {/* </a> */}
                    <p className='flex items-center gap-2 text-white tracking-widest uppercase text-xs'><FiberManualRecordRoundedIcon sx={{fontSize: 10}}/>{movie.media_type}</p>
                  </div>
                  <p className='h-20 text-white text-xs tracking-widest xs:text-sm text-ellipsis overflow-hidden'>{movie.overview}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
    <div className='hidden sm:flex 2xl:container 2xl:mx-auto'>
      <Swiper 
        loop={true}
        modules={[Autoplay]}
        autoplay= {{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
      >
        {moviesBackdrop.map((movie, idx) => (
            <SwiperSlide key={idx}>
              <img
                className='w-full 2xl:container 2xl:mx-auto'
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.id}
              />
              <div className='absolute top-0 w-full h-full grid grid-cols-2 bg-gradient-to-t from-[#141414] from-10%'>
                <div className='order-1 flex items-center justify-center px-14 2xl:px-40'>
                  <img 
                    className='w-full shadow-zinc-700 shadow-lg sm:w-52 md:w-60 lg:w-72 xl:w-80 2xl:w-[22rem]'
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.id} />
                </div>
                <div className='order-2 flex flex-col justify-center pr-6 lg:pr-10 xl:pr-20 select-none gap-2'>
                  <h1 className='text-white text-2xl font-extrabold pb-2 md:text-3xl lg:text-4xl xl:text-5xl truncate'>{movie.title || movie.name}</h1>
                  <div className='flex flex-col gap-4'>
                    <div className='flex gap-2 items-center'>
                      <RatingCircle rating={Number(movie.vote_average).toFixed(1)}/>
                      <a href={`/movie/${moviesBackdrop.id}`}>
                        <LightButton 
                          icon={<PlayArrowRoundedIcon/>} 
                          displayText="WATCH NOW"/>
                      </a>
                      <p className='flex items-center justify-center gap-2 text-white tracking-widest uppercase xs:text-xs xs:leading-[13px] md:leading-4 lg:text-sm xl:text-base'><FiberManualRecordRoundedIcon sx={{fontSize: 10}}/>{movie.media_type}</p>
                    </div>
                    <p className='text-white tracking-widest xs:text-xs xs:leading-[13px] md:leading-4 lg:text-sm xl:text-base'>{movie.overview}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
    </>
  )
}
