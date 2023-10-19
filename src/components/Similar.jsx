import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/free-mode"

import { MovieCard, TvCard } from "./utils/Card";

export const SimilarMovie = () => {
  const [movies, setMovies] = useState([]);
  const getId = localStorage.getItem("clickItem")
  
  const BASE_URL = "https://api.themoviedb.org/3"
  const AUTH_KEY = process.env.REACT_APP_AUTH_KEY
  const fetchTopRatedMovie = useRef(() => {})

  const options = {
    params: {language: 'en-US'},
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`
    }
  };

  fetchTopRatedMovie.current = async() => {
    const { data } = await axios.get(`${BASE_URL}/movie/${getId}/similar`, options)
    console.log(data);
    setMovies(data)
  }

  useEffect(() => {
    fetchTopRatedMovie.current();
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
        {movies.map((movie, idx) => (
            <SwiperSlide key={idx} className="py-8 cursor-pointer">
              <MovieCard data={movie}/>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export const SimilarTv = () => {
  const [tvShows, setTvShows] = useState([]);
  
  const BASE_URL = "https://api.themoviedb.org/3"
  const AUTH_KEY = process.env.REACT_APP_AUTH_KEY
  const fetchTopRatedTv = useRef(() => {})

  const options = {
    params: {language: 'en-US'},
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`
    }
  };

  fetchTopRatedTv.current = async() => {
    const { data: {results} } = await axios.get(`${BASE_URL}/tv/top_rated`, options)
    setTvShows(results)
  }

  useEffect(() => {
    fetchTopRatedTv.current();
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
        {tvShows.map((tv, idx) => (
            <SwiperSlide key={idx} className="py-8 cursor-pointer">
              <TvCard data={tv}/>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}