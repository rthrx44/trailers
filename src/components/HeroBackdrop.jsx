import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/autoplay"
import { LargeScreenHeroCard, SmallScreenHeroCard } from './utils/Card';

export const HeroBackdrop = () => {
  const [moviesBackdrop, setMoviesBackdrop] = useState([]);

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
              <SmallScreenHeroCard data={movie}/>
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
              <LargeScreenHeroCard data={movie}/>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
    </>
  )
}
