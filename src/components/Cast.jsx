import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/free-mode"

import CastDetails from './utils/CastDetails';

const Cast = () => {
  const [moviesCast, setMoviesCast] = useState([]);
  const getId = localStorage.getItem("clickItem")
  
  const BASE_URL = "https://api.themoviedb.org/3"
  const AUTH_KEY = process.env.REACT_APP_AUTH_KEY
  const fetchMovieCast = useRef(() => {})

  const options = {
    params: {language: 'en-US'},
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`
    }
  };

  fetchMovieCast.current = async() => {
    const { data: {cast} } = await axios.get(`${BASE_URL}/movie/${getId}/credits`, options)
    setMoviesCast(cast)
  }

  useEffect(() => {
    fetchMovieCast.current();
  }, []);

  return (
    <div>
      <h1 className='mt-8 text-lg tracking-widest font-semibold mx-4 border-l-[0.3rem] border-red-700 pl-2 lg:text-xl xl:text-2xl'>CAST</h1>
      <Swiper 
        modules={[FreeMode, Navigation]}
        slidesPerView={2}
        breakpoints={{
          520: {slidesPerView: 3},
          768: {slidesPerView: 4},
          1024: {slidesPerView: 5},
          1280: {slidesPerView: 6},
          1536: {slidesPerView: 7},
          }}
        freeMode={true}
        navigation
      >
        {moviesCast.map((cast, idx) => (
            <SwiperSlide key={idx} className="py-8 cursor-pointer">
              <CastDetails data={cast}/>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}

export default Cast