import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import Loading from "../components/Loading";
import { DiscoverMoviesCard, DiscoverTvShowsCard } from '../components/utils/Card';
import { Pagination } from '../components/utils/Pagination';

export const Search = ({showLoading}) => {
  const [search, setSearch] = useState({});
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('avengers');
  const [page, setPage] = useState(1);

  const BASE_URL = "https://api.themoviedb.org/3";
  const AUTH_KEY = process.env.REACT_APP_AUTH_KEY;
  const searchMovies = useRef(() => {});

  const options = {
    params: {
      query: `${query}`,
      include_adult: 'false', 
      language: 'en-US', 
      page: `${page}`
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${AUTH_KEY}`,
    },
  };

  searchMovies.current = async () => {
    const { data } = await axios.get(`${BASE_URL}/search/multi`, options);
    console.log(data);
    setSearch(data);
    console.log(data.results);
    setMovies(data.results)
  };

  useEffect(() => {
    if (query !== '') {
      searchMovies.current();
    }
  }, [page, query]);

  return (
    <>
      {showLoading && <Loading/>}
      <section className="container mx-auto">
        <div className='flex justify-center items-center tracking-widest relative px-8 mt-4'>
          <input
            className='pl-2 pr-7 py-1 w-full rounded-sm text-xs font-semibold bg-[#3b3b3b] outline-none focus:outline-1 focus:outline-red-700 transition-all ease-in-out lg:text-sm xl:text-base' 
            type="text" 
            placeholder='SEARCH' 
            defaultValue={''}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <Pagination currentPage={page} setPage={setPage} totalPages={search.total_pages} />
        <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
          {movies.map((movie, idx) => {
            return <div key={idx} className="py-2 cursor-pointer">
              {movie.media_type === 'movie' ? <DiscoverMoviesCard data={movie}/> : <DiscoverTvShowsCard data={movie}/>}
            </div>
          })}
        </div>
        <Pagination currentPage={page} setPage={setPage} totalPages={search.total_pages} />
      </section>
    </>
  )
}
