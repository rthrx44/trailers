import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/free-mode"

import { MovieCard } from "./MovieCard";

export const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  
  const BASE_URL = process.env.REACT_APP_BASE_URL
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
    const { data: {results} } = await axios.get(`${BASE_URL}/trending/movie/day`, options)
    setMovies(results)
  }

  useEffect(() => {
    fetchMovie.current();
  }, []);

  return (
    <div>
      <Swiper 
        modules={[FreeMode]}
        slidesPerView={2}
        breakpoints={{
          520: {slidesPerView: 3},
          768: {slidesPerView: 4},
          1024: {slidesPerView: 5},
          1280: {slidesPerView: 6},
          1536: {slidesPerView: 7},

          }}
        freeMode={true}
      >
        {movies.map((movie, idx) => (
            <SwiperSlide key={idx} className="py-8 group hover:!scale-110 duration-300 cursor-pointer">
              <MovieCard data={movie}/>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
