import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"
import { RatingCircle } from "./RatingCircle";
import { WatchButton } from "./Buttons";

import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

export const MovieCard = ({movies}) => {
  return (
    <div>
      <Swiper 
        slidesPerView={2}
        loop={true}
        breakpoints={{
          520: {slidesPerView: 3},
          768: {slidesPerView: 4},
          1024: {slidesPerView: 5},
          1440: {slidesPerView: 6}
          }}
      >
        {movies.map((movie, idx) => (
            <SwiperSlide key={idx} className="px-1">
              <img
                className='bg-cover min-w-full mx-auto px-1'
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.id}
              />
              <div className="mx-1 py-2 bg-zinc-800 flex flex-col gap-2">
                <div className="px-2 flex justify-between items-center">
                  <RatingCircle rating={movie.vote_average}/>
                  <p>{movie.release_date}</p>
                </div>
                <p className="px-2 text-sm font-semibold lg:text-base xl:text-lg truncate">{movie.title}</p>
                <WatchButton icon={<PlayArrowRoundedIcon/>} displayText="Watch Trailers"/>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
