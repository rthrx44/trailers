import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import { Pagination } from "../components/utils/Pagination";
import { DiscoverMoviesCard } from "../components/utils/Card";

export const Movies = ({showLoading}) => {
  const [discoverMovies, setDiscoverMovies] = useState({});
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const BASE_URL = "https://api.themoviedb.org/3";
  const AUTH_KEY = process.env.REACT_APP_AUTH_KEY;
  const fetchMovies = useRef(() => {});

  const options = {
    params: {
      include_adult: 'false',
      include_video: 'false',
      language: 'en-US',
      page: `${page}`,
      sort_by: 'popularity.desc'
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${AUTH_KEY}`,
    },
  };

  fetchMovies.current = async () => {
    const { data } = await axios.get(`${BASE_URL}/discover/movie`, options);
    console.log(data);
    setDiscoverMovies(data);
    setMovies(data.results)
  };

  useEffect(() => {
    fetchMovies.current();
  }, [page]);

  return (
    <>
      {showLoading && <Loading/>}
      <section className="container mx-auto">
        <h1 className='my-8 text-lg tracking-widest font-semibold mx-4 border-l-[0.3rem] border-red-700 pl-2 lg:text-xl xl:text-2xl'>DISCOVER MOVIES</h1>
        <Pagination currentPage={page} setPage={setPage} totalPages={discoverMovies.total_pages} />
        <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
          {movies.map((movie, idx) => (
            <div key={idx} className="py-2 cursor-pointer">
              <DiscoverMoviesCard data={movie}/>              
            </div>
          ))}
        </div>
        <Pagination currentPage={page} setPage={setPage} totalPages={discoverMovies.total_pages} />
      </section>
    </>
  );
};
