import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'
import Loading from '../components/Loading'
import { MovieCard, TvCard } from '../components/utils/Card'
import { RatingCircle } from '../components/utils/RatingCircle'

export const CastDetails = ({showLoading}) => {
  const [castDetails, setCastDetails] = useState({})
  const [castMovie, setCastMovie] = useState([])
  const getId = JSON.parse(localStorage.getItem("clickCast"))

  const BASE_URL = "https://api.themoviedb.org/3"
  const AUTH_KEY = process.env.REACT_APP_AUTH_KEY
  const fetchCastDetails = useRef(() => {})
  const fetchCastMovie = useRef(() => {})

  const options = {
    params: {language: 'en-US'},
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`
    }
  };

  fetchCastDetails.current = async() => {
    const { data } = await axios.get(`${BASE_URL}/person/${getId}`, options)
    console.log(data);
    setCastDetails(data)
  }

  fetchCastMovie.current = async() => {
    const { data: { cast } } = await axios.get(`${BASE_URL}/person/${getId}/combined_credits`, options)
    setCastMovie(cast)
  }

  useEffect(() => {
    fetchCastDetails.current();
    fetchCastMovie.current()
  }, []);

  return (
    <>
      {showLoading && <Loading/>}
      <div className='flex items-center items-center justify-center mt-12 md:mt-12'>
        {castDetails.profile_path ? 
          <img 
            className='lazy loader w-28 h-auto shadow-zinc-700 shadow-lg 2xs:w-36 xs:w-44 sm:w-52 md:w-44 lg:w-52 xl:w-60 2xl:w-72'
            src='https://fakeimg.pl/288x432?text=No+Image'
            data-src={`https://image.tmdb.org/t/p/w500${castDetails.profile_path}`}
            alt={castDetails.id}
          /> : 
          <img 
            className='lazy loader w-28 h-auto shadow-zinc-700 shadow-lg 2xs:w-36 xs:w-44 sm:w-52 md:w-44 lg:w-52 xl:w-60 2xl:w-72' 
            src='https://fakeimg.pl/288x432?text=No+Image' 
            alt={castDetails.id}
          />}
      </div>
      <div className='container mx-auto w-full h-full bg-gradient-to-t from-[#141414] from-25% md:from-35%'>
        <div className='md:grid md:my-12 lg:my-20 xl:my-32'>
          <div className='flex flex-col justify-center select-none gap-4 px-4 mb-4'>
            <h1 className='mt-4 text-white text-center text-2xl font-extrabold 2xs:text-3xl xs:text-4xl sm:text-[2.5rem] md:text-2xl lg:text-3xl xl:text-4xl'>{castDetails.name}</h1>
          </div>
          <div className='grid grid-cols-2 px-4 gap-2 my-4'>
            <div className='order-1 text-white tracking-widest text-xs xs:text-sm md:text-xs lg:text-sm xl:text-lg'>
              <p><b className='font-extrabold'>Known For:</b> {castDetails.known_for_department}</p>
              <p><b className='font-extrabold'>Birthday:</b> {dayjs(castDetails.birthday).format("MMMM DD, YYYY")}</p>
            </div>
            <div className='order-2 text-white tracking-widest text-xs xs:text-sm md:text-xs lg:text-sm xl:text-lg'>
              <p><b className='font-extrabold'>Place of Birth:</b> {castDetails.place_of_birth}</p>
              <p><b className='font-extrabold'>Deathday:</b> {dayjs(castDetails.deathday).format("MMMM DD, YYYY")}</p>
            </div>
          </div>
          <div className='mt-4 flex px-4'>
            <h3 className='text-white tracking-widest font-extrabold text-xs xs:text-sm md:text-xs lg:text-sm xl:text-lg'>Overview:</h3>
            <p className='overview text-white tracking-widest text-xs pl-2 xs:text-sm md:text-xs lg:text-sm xl:text-base'>{castDetails.biography}</p>
          </div>
        </div>
      </div>
      <h1 className='my-8 text-lg tracking-widest font-semibold mx-4 border-l-[0.3rem] border-red-700 pl-2 lg:text-xl xl:text-2xl'>FILMOGRAPHY</h1>
      <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
        {castMovie.map((movie, idx) => (
            <div key={idx} className="py-2 cursor-pointer">
              {movie.media_type === 'movie' ? <MovieCard data={movie}/> : <TvCard data={movie}/>}
            </div>
        ))}
      </div>
    </>
  )
}
