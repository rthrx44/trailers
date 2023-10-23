import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { SeasonCard } from './Card';

export const Seasons = () => {
  const [tvSeasons, setTvSeasons] = useState([]);
  const getId = localStorage.getItem("clickItem")
  
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
    const { data: { seasons } } = await axios.get(`${BASE_URL}/tv/${getId}`, options)
    setTvSeasons(seasons)
  }

  useEffect(() => {
    fetchTrendingTv.current();
  }, []);
  return (
    <div className='grid sm:grid-cols-2 my-4'>
      {tvSeasons.map((season, idx) => {
        return <div key={idx} className='p-2'>
          <SeasonCard data={season}/>
        </div>
      })}
    </div>
  )
}
