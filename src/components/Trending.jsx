import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/free-mode"

import { MovieCard, TvCard } from "./utils/Card";

export const TrendingMovie = () => {
  const [movies, setMovies] = useState([]);
  
  const BASE_URL = "https://api.themoviedb.org/3"
  const AUTH_KEY = process.env.REACT_APP_AUTH_KEY
  const fetchTrendingMovie = useRef(() => {})

  const options = {
    params: {language: 'en-US'},
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`
    }
  };

  fetchTrendingMovie.current = async() => {
    const { data: {results} } = await axios.get(`${BASE_URL}/trending/movie/day`, options)
    setMovies(results)
  }

  useEffect(() => {
    fetchTrendingMovie.current();
  }, []);

  return (
    <div>
      <Swiper 
        modules={[FreeMode, Navigation]}
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
        navigation
      >
        {movies.slice(0, 10).map((movie, idx) => (
            <SwiperSlide key={idx} className="py-8 cursor-pointer">
              <MovieCard data={movie}/>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export const TrendingTv = () => {
  const [tvShows, setTvShows] = useState([]);
  
  const BASE_URL = "https://api.themoviedb.org/3"
  const AUTH_KEY = process.env.REACT_APP_AUTH_KEY
  const fetchTrendingTv = useRef(() => {})

  const options = {
    params: {language: 'en-US'},
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`
    }
  };

  fetchTrendingTv.current = async() => {
    const { data: {results} } = await axios.get(`${BASE_URL}/trending/tv/day`, options)
    setTvShows(results)
  }

  useEffect(() => {
    fetchTrendingTv.current();
  }, []);

  return (
    <div>
      <Swiper 
        modules={[FreeMode, Navigation]}
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
        navigation
      >
        {tvShows.slice(0, 10).map((tv, idx) => (
            <SwiperSlide key={idx} className="py-8 cursor-pointer">
              <TvCard data={tv}/>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

