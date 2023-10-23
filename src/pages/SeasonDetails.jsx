import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'
import { Epsiodes } from '../components/Epsiodes'

export const SeasonDetails = () => {
  const [seasonDetails, setSeasonDetails] = useState({})
  const getId = localStorage.getItem("clickItem")
  const getSeasonNum = localStorage.getItem("clickSeason")

  const BASE_URL = "https://api.themoviedb.org/3"
  const AUTH_KEY = process.env.REACT_APP_AUTH_KEY
  const fetchTvDetails = useRef(() => {})

  const options = {
    params: {language: 'en-US'},
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`
    }
  };

  fetchTvDetails.current = async() => {
    const { data } = await axios.get(`${BASE_URL}/tv/${getId}/season/${getSeasonNum}`, options)
    console.log(data);
    setSeasonDetails(data)
  }

  useEffect(() => {
    fetchTvDetails.current();
  }, []);
  return (
    <>
      <section className='container mx-auto flex items-center mt-12 px-4 md:mt-0 outline'>
        <div className=''>
          <img 
            className='w-28 shadow-zinc-700 shadow-lg 2xs:w-36 xs:w-44 sm:w-52 md:w-44 lg:w-52 xl:w-60 2xl:w-72'
            src={`https://image.tmdb.org/t/p/w500${seasonDetails.poster_path}`}
            alt={seasonDetails.id} />
        </div>
        <div>
          <p>{seasonDetails.name}</p>
          <p>{dayjs(seasonDetails.release_date).format("MMMM DD, YYYY")}</p>
        </div>
      </section>
    </>
  )
}
