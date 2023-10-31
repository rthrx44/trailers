import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import { Pagination } from "../components/utils/Pagination";
import { DiscoverTvShowsCard } from "../components/utils/Card";

export const TvShows = ({showLoading}) => {
  const [discoverTvShows, setDiscoverTvShows] = useState({});
  const [tvShows, setTvShows] = useState([]);
  const [page, setPage] = useState(1);

  const BASE_URL = "https://api.themoviedb.org/3";
  const AUTH_KEY = process.env.REACT_APP_AUTH_KEY;
  const fetchTvShows = useRef(() => {});

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

  fetchTvShows.current = async () => {
    const { data } = await axios.get(`${BASE_URL}/discover/tv`, options);
    setDiscoverTvShows(data);
    setTvShows(data.results)
  };

  useEffect(() => {
    fetchTvShows.current();
  }, [page]);

  return (
    <>
      {showLoading && <Loading/>}
      <section className="container mx-auto">
        <h1 className='my-8 text-lg tracking-widest font-semibold mx-4 border-l-[0.3rem] border-red-700 pl-2 lg:text-xl xl:text-2xl'>DISCOVER TV SHOWS</h1>
        <Pagination currentPage={page} setPage={setPage} totalPages={discoverTvShows.total_pages} />
        <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
          {tvShows.map((tv, idx) => (
            <div key={idx} className="py-2 cursor-pointer">
              <DiscoverTvShowsCard data={tv}/>
            </div>
          ))}
        </div>
        <Pagination currentPage={page} setPage={setPage} totalPages={discoverTvShows.total_pages} />
      </section>
    </>
  );
};
