import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'
import Loading from '../components/Loading';
import { SimilarTv } from '../components/Similar';
import { TvCast } from '../components/Cast';
import { EpisodeCard } from '../components/utils/Card';

export const SeasonDetails = ({showLoading}) => {
  const [seasonDetails, setSeasonDetails] = useState({})
  const [episodeDetails, setEpisodeDetails] = useState([])
  const getId = localStorage.getItem("clickItem")
  const getSeasonNum = localStorage.getItem("clickSeason")

  const BASE_URL = "https://api.themoviedb.org/3"
  const AUTH_KEY = process.env.REACT_APP_AUTH_KEY
  const fetchSeasonDetails = useRef(() => {})

  const options = {
    params: {language: 'en-US'},
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`
    }
  };

  fetchSeasonDetails.current = async() => {
    const { data } = await axios.get(`${BASE_URL}/tv/${getId}/season/${getSeasonNum}`, options)
    setSeasonDetails(data)
    setEpisodeDetails(data.episodes)
  }

  useEffect(() => {
    fetchSeasonDetails.current();
  }, []);

  return (
    <>
      {showLoading && <Loading/>}
      <section>
        <h1 className='my-8 text-lg tracking-widest font-semibold mx-4 border-l-[0.3rem] border-red-700 pl-2 lg:text-xl xl:text-2xl'>EPISODES</h1>
        <div className='grid 2xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 my-4'>
          {episodeDetails.map((episode, idx) => {
            return <div key={idx} className='mb-2 p-2'>
              <EpisodeCard data={episode}/>
            </div>
          })}
        </div>
      </section>
      <section className='container mx-auto flex flex-col items-center mt-12 px-4 md:mt-0'>
        <div>
          {seasonDetails.poster_path ? 
            <img 
              className='lazy loader w-28 shadow-zinc-700 shadow-lg 2xs:w-36 xs:w-44 sm:w-52 md:w-44 lg:w-52 xl:w-60 2xl:w-72'
              src='https://fakeimg.pl/286x429?text=No+Image'
              data-src={`https://image.tmdb.org/t/p/w500${seasonDetails.poster_path}`}
              alt={seasonDetails.id}
            /> : 
            <img 
              className='lazy loader w-28 shadow-zinc-700 shadow-lg 2xs:w-36 xs:w-44 sm:w-52 md:w-44 lg:w-52 xl:w-60 2xl:w-72' 
              src='https://fakeimg.pl/286x429?text=No+Image' 
              alt={seasonDetails.id}
            />}
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
