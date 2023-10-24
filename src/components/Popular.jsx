import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/free-mode"

import { Card } from "./utils/Card";

export const PopularMovie = () => {
  const [movies, setMovies] = useState([]);
  
  const BASE_URL = "https://api.themoviedb.org/3"
  const AUTH_KEY = process.env.REACT_APP_AUTH_KEY
  const fetchPopularMovie = useRef(() => {})

  const options = {
    params: {language: 'en-US'},
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`
    }
  };

  fetchPopularMovie.current = async() => {
    const { data: {results} } = await axios.get(`${BASE_URL}/movie/popular`, options)
    setMovies(results)
  }

  useEffect(() => {
    fetchPopularMovie.current();
  }, []);

  return (
    <div>
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
        {movies.map((movie, idx) => (
            <SwiperSlide key={idx} className="py-8 cursor-pointer">
              <Card data={movie}/>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export const PopularTv = () => {
  const [tvShows, setTvShows] = useState([]);
  
  const BASE_URL = "https://api.themoviedb.org/3"
  const AUTH_KEY = process.env.REACT_APP_AUTH_KEY
  const fetchPopularTv = useRef(() => {})

  const options = {
    params: {language: 'en-US'},
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`
    }
  };

  fetchPopularTv.current = async() => {
    const { data: {results} } = await axios.get(`${BASE_URL}/tv/popular`, options)
    setTvShows(results)
  }

  useEffect(() => {
    fetchPopularTv.current();
  }, []);

  return (
    <div>
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
        {tvShows.map((tv, idx) => (
            <SwiperSlide key={idx} className="py-8 cursor-pointer">
              <Card data={tv}/>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

