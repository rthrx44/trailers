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
  const fetchMovie = useRef(() => {})

  const options = {
    params: {language: 'en-US'},
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`
    }
  };

  fetchMovie.current = async() => {
    const { data: {results} } = await axios.get(`${BASE_URL}/movie/popular`, options)
    setMovies(results)
  }

  useEffect(() => {
    fetchMovie.current();
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
              <Card data={movie}/>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export const PopularTv = () => {
  const [movies, setMovies] = useState([]);
  
  const BASE_URL = "https://api.themoviedb.org/3"
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
    const { data: {results} } = await axios.get(`${BASE_URL}/tv/popular`, options)
    setMovies(results)
  }

  useEffect(() => {
    fetchMovie.current();
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
        {movies.map((tv, idx) => (
            <SwiperSlide key={idx} className="py-8 cursor-pointer">
              <Card data={tv}/>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

