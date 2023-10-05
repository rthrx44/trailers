import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/free-mode"

import { MovieCard, TvCard } from "./Card";

export const TopRatedMovie = () => {
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
    const { data: {results} } = await axios.get(`${BASE_URL}/movie/top_rated`, options)
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
          640: {slidesPerView: 4},
          768: {slidesPerView: 5},
          1024: {slidesPerView: 6},
          1280: {slidesPerView: 7},
          1536: {slidesPerView: 8},
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

export const TopRatedTv = () => {
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
    const { data: {results} } = await axios.get(`${BASE_URL}/tv/top_rated`, options)
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
          640: {slidesPerView: 4},
          768: {slidesPerView: 5},
          1024: {slidesPerView: 6},
          1280: {slidesPerView: 7},
          1536: {slidesPerView: 8},
          }}
        freeMode={true}
      >
        {movies.map((tv, idx) => (
            <SwiperSlide key={idx} className="py-8 group hover:!scale-110 duration-300 cursor-pointer">
              <TvCard data={tv}/>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

