import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/free-mode"

import { MovieCard, TvCard } from "./utils/Card";

export const SimilarMovie = () => {
  const [similarMovies, setSimilarMovies] = useState([]);
  const getId = localStorage.getItem("clickItem")
  
  const BASE_URL = "https://api.themoviedb.org/3"
  const AUTH_KEY = process.env.REACT_APP_AUTH_KEY
  const fetchSimilarMovie = useRef(() => {})

  const options = {
    params: {language: 'en-US'},
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`
    }
  };

  fetchSimilarMovie.current = async() => {
    const { data: {results} } = await axios.get(`${BASE_URL}/movie/${getId}/similar`, options)
    setSimilarMovies(results)
  }

  useEffect(() => {
    fetchSimilarMovie.current();
  }, []);

  return (
    <div className="mt-8">
      <h1 className='text-lg tracking-widest font-semibold mx-4 border-l-[0.3rem] border-red-700 pl-2 lg:text-xl xl:text-2xl'>SIMILAR MOVIES</h1>
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
        {similarMovies.map((movie, idx) => (
            <SwiperSlide key={idx} className="py-8 cursor-pointer">
              <MovieCard data={movie}/>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export const SimilarTv = () => {
  const [similarTvShows, setSimilarTvShows] = useState([]);
  const getId = localStorage.getItem("clickItem")
  
  const BASE_URL = "https://api.themoviedb.org/3"
  const AUTH_KEY = process.env.REACT_APP_AUTH_KEY
  const fetchSimilarTv = useRef(() => {})

  const options = {
    params: {language: 'en-US'},
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`
    }
  };

  fetchSimilarTv.current = async() => {
    const { data: {results} } = await axios.get(`${BASE_URL}/tv/${getId}/similar`, options)
    setSimilarTvShows(results)
  }

  useEffect(() => {
    fetchSimilarTv.current();
  }, []);

  return (
    <div className="mt-8">
      <h1 className='text-lg tracking-widest font-semibold mx-4 border-l-[0.3rem] border-red-700 pl-2 lg:text-xl xl:text-2xl'>SIMILAR TV SHOWS</h1>
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
        {similarTvShows.map((tv, idx) => (
            <SwiperSlide key={idx} className="py-8 cursor-pointer">
              <TvCard data={tv}/>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}