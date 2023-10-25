import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'
import { SimilarTv } from '../components/Similar';
import { TvCast } from '../components/Cast';

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/free-mode"
import { EpisodeCard } from '../components/utils/Card';

export const EpisodesDetails = () => {
  const [seasonDetails, setSeasonDetails] = useState({})
  const [episodeDetails, setEpisodeDetails] = useState([])
  const getId = localStorage.getItem("clickItem")
  const getSeasonNum = localStorage.getItem("clickSeason")
  const getEpisodeNum = localStorage.getItem("clickEpisode")

  const BASE_URL = "https://api.themoviedb.org/3"
  const AUTH_KEY = process.env.REACT_APP_AUTH_KEY
  const fetchEpisodeDetails = useRef(() => {})

  const options = {
    params: {language: 'en-US'},
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`
    }
  };

  fetchEpisodeDetails.current = async() => {
    const { data } = await axios.get(`${BASE_URL}/tv/${getId}/season/${getSeasonNum}`, options)
    setSeasonDetails(data)
    setEpisodeDetails(data.episodes)
  }

  useEffect(() => {
    fetchEpisodeDetails.current();
  }, []);

  return (
    <>
      <section className='px-4 container mx-auto'>
        <div className="flex flex-col mt-4 mb-8 xl:mb-12 sm:px-10 md:p-12 lg:px-16 xl:px-20 gap-4">
          <p className='text-gray-500 text-center tracking-widest font-bold text-xs'>If current server doesn't work please try other servers below.</p>
          <iframe
            className="w-full aspect-video"
            src={`https://autoembed.to/tv/tmdb/${getId}-${getSeasonNum}-${getEpisodeNum}?server=2`}
            allowFullScreen={true}
            title='Video Container'
          ></iframe>
        </div>
      </section>
      <section className='container mx-auto'>
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
            {episodeDetails.map((episode, idx) => (
                <SwiperSlide key={idx} className="py-8 cursor-pointer">
                  <EpisodeCard data={episode}/>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </section>
      <section className='container mx-auto flex flex-col items-center mt-12 px-4 md:mt-0'>
        <div>
          <img 
            className='w-28 shadow-zinc-700 shadow-lg 2xs:w-36 xs:w-44 sm:w-52 md:w-44 lg:w-52 xl:w-60 2xl:w-72'
            src={`https://image.tmdb.org/t/p/w500${seasonDetails.poster_path}`}
            alt={seasonDetails.id} />
        </div>
        <div className='text-center'>
          <p className='text-center'>{seasonDetails.name}</p>
          <p>{dayjs(seasonDetails.release_date).format("MMMM DD, YYYY")}</p>
          <p className='text-center'>{seasonDetails.overview}</p>
        </div>
      </section>
      <section className='container mx-auto mt-12 text-white tracking-widest font-extrabold text-lg lg:text-xl xl:text-2xl'>
        <TvCast/>
        <SimilarTv/>
      </section>
    </>
  )
}
