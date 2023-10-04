import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { WatchButton } from "./Buttons";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/free-mode"
import { RatingCircle } from "./RatingCircle";


import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

export const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=2f1b97f3c5516282fbe25825bb55595c"
    )
      .then((res) => res.json())
      .then((json) => setMovies(json.results))
      .catch((err) => console.error("error:" + err));
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div>
      <Swiper 
        modules={[FreeMode]}
        slidesPerView={2}
        breakpoints={{
          520: {slidesPerView: 3},
          768: {slidesPerView: 4},
          1024: {slidesPerView: 5},
          }}
        freeMode={true}
      >
        {movies.map((movie, idx) => (
            <SwiperSlide key={idx} className="py-8 group hover:scale-105 focus:scale-105 transition-all cursor-pointer">
              <div className="p-4">
                <img
                  className='bg-cover w-full mx-auto'
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.id}
                />
                <div className="py-2 bg-zinc-800 flex flex-col gap-2">
                  <div className="px-2 grid grid-flow-col gap-4 justify-between items-center">
                    <div className="flex-col order-1 truncate">
                      <p className="text-sm font-semibold lg:text-base xl:text-lg truncate">{movie.title}</p>
                      <p className="text-xs font-semibold lg:text-sm xl:text-base">{dayjs(movie.release_date).format("YYYY")}</p>
                    </div>
                    <div className="order-2">
                      <RatingCircle rating={movie.vote_average}/>
                    </div>
                  </div>
                  <WatchButton icon={<PlayArrowRoundedIcon/>} displayText="WATCH TRAILERS"/>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
