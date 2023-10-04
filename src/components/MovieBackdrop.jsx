import React, { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/autoplay"
import { RatingCircle } from './RatingCircle';
import { LightButton } from './Buttons';

import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';


export const MovieBackdrop = () => {
  const [moviesBackdrop, setMoviesBackdrop] = useState([]);

  const fetchMovieBackdrop = () => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=2f1b97f3c5516282fbe25825bb55595c&include_image_language=en")
      .then((res) => res.json())
      .then((json) => setMoviesBackdrop(json.results))
      .catch((err) => console.error("error:" + err));
  };

  useEffect(() => {
    fetchMovieBackdrop();
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
                className='bg-cover w-auto'
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.id}
              />
              <div className='absolute top-0 w-full h-full text-center flex items-end px-4 bg-gradient-to-t from-[#141414] from-10%'>
                <div className='flex flex-col justify-center pr-4 mb-16 xs:mb-40 gap-2'>
                  <h1 className='text-white text-3xl font-bold mb-2 xs:text-4xl'>{movie.title}</h1>
                  <div className='flex justify-center gap-2'>
                    <RatingCircle rating={movie.vote_average}/>
                    <LightButton icon={<PlayArrowRoundedIcon/>} displayText="WATCH TRAILERS"/>
                  </div>
                  <p className='text-white text-xs tracking-widest xs:text-sm'>{movie.overview}</p>
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
                    alt="movie.id" />
                </div>
                <div className='order-2 flex flex-col justify-center pr-6 lg:pr-10 xl:pr-20 select-none gap-4'>
                  <h1 className='text-white text-3xl font-extrabold lg:text-4xl xl:text-5xl'>{movie.title}</h1>
                  <div className='flex gap-2'>
                    <RatingCircle rating={movie.vote_average}/>
                    <LightButton icon={<PlayArrowRoundedIcon/>} displayText="WATCH TRAILERS"/>
                  </div>
                  <p className='text-white tracking-widest xs:text-xs xs:leading-[13px] md:leading-4 lg:text-sm xl:text-base'>{movie.overview}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
    </>
  )
}
