import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { MovieCard } from "../components/utils/Card";
import Loading from "../components/Loading";

export const Movies = ({showLoading}) => {
  const [movies, setMovies] = useState([]);

  const BASE_URL = "https://api.themoviedb.org/3";
  const AUTH_KEY = process.env.REACT_APP_AUTH_KEY;
  const fetchMovies = useRef(() => {});

  const options = {
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${AUTH_KEY}`,
    },
  };

  fetchMovies.current = async () => {
    const {
      data: { results },
    } = await axios.get(`${BASE_URL}/discover/movie`, options);
    console.log(results);
    setMovies(results);
  };

  useEffect(() => {
    fetchMovies.current();
  }, []);

  return (
    <>
      {showLoading && <Loading/>}
      <section className="container mx-auto">
        <h1 className='my-8 text-lg tracking-widest font-semibold mx-4 border-l-[0.3rem] border-red-700 pl-2 lg:text-xl xl:text-2xl'>DISCOVER MOVIES</h1>
        <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
          {movies.map((movie, idx) => (
            <div key={idx} className="py-2 cursor-pointer">
              <MovieCard data={movie} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
