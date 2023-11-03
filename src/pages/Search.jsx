import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import Loading from "../components/Loading";
import { DiscoverMoviesCard, DiscoverTvShowsCard } from '../components/utils/Card';
import { Pagination } from '../components/utils/Pagination';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

export const Search = ({showLoading}) => {
  const [search, setSearch] = useState({});
  const [results, setResults] = useState([]);
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
    setSearch(data);
    console.log(data);
    setResults(data.results)
  };

  useEffect(() => {
    if (query !== '') {
      searchMovies.current();
    }
  }, [page, query]);

  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true)
      } else {
        setBackToTop(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {showLoading && <Loading/>}
      <section className="container mx-auto">
        {backToTop && <div className='bg-red-700 rounded-full flex justify-center items-center text-[#fff] fixed right-12 bottom-12 h-8 w-8 z-40 cursor-pointer transition-all hover:outline-1 hover:outline hover:outline-red-700 hover:outline-offset-[0.5rem] hover:transition-all xs:h-10 xs:w-10 md:h-12 md:w-12 lg:right-24 lg:bottom-20 2xl:right-[7%]' onClick={scrollUp} title='Scroll to top'><ArrowUpwardRoundedIcon/></div>}
        <div className='flex justify-center items-center tracking-widest relative px-8 mt-4'>
          <input
            className='pl-2 pr-7 py-1 w-full rounded-sm text-xs font-semibold bg-[#3b3b3b] outline-none focus:outline-1 focus:outline-red-700 transition-all ease-in-out lg:text-sm xl:text-base' 
            type="search" 
            placeholder='SEARCH MOVIES AND TV SHOWS' 
            defaultValue={''}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <Pagination currentPage={page} setPage={setPage} totalPages={search.total_pages} />
        <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
          {results.map((dataSearch, idx) => {
            return <div key={idx} className="py-2 cursor-pointer">
              {dataSearch.media_type === 'movie' ? <DiscoverMoviesCard data={dataSearch}/> : <DiscoverTvShowsCard data={dataSearch}/> }
            </div>
          })}
        </div>
        <Pagination currentPage={page} setPage={setPage} totalPages={search.total_pages} />
      </section>
    </>
  )
}
