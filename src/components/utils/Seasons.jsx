import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { SeasonCard } from './Card';

export const Seasons = () => {
  const [tvSeasons, setTvSeasons] = useState([]);
  const getId = localStorage.getItem("clickItem")
  
  const BASE_URL = "https://api.themoviedb.org/3"
  const AUTH_KEY = process.env.REACT_APP_AUTH_KEY
  const fetchTvSeasons = useRef(() => {})

  const options = {
    params: {language: 'en-US'},
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`
    }
  };

  fetchTvSeasons.current = async() => {
    const { data: { seasons } } = await axios.get(`${BASE_URL}/tv/${getId}`, options)
    setTvSeasons(seasons)
  }

  useEffect(() => {
    fetchTvSeasons.current();
  }, []);
  
  return (
    <>
      <h1 className='my-8 text-lg tracking-widest font-semibold mx-4 border-l-[0.3rem] border-red-700 pl-2 lg:text-xl xl:text-2xl'>SEASONS</h1>
      <div className='grid md:grid-cols-2 my-4'>
        {tvSeasons.map((season, idx) => {
          return <div key={idx} className='mb-2 p-2'>
            <SeasonCard data={season}/>
          </div>
        })}
      </div>
    </>
  )
}
