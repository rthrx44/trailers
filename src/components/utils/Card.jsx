import React from "react";
import dayjs from "dayjs";
import { RatingCircle } from "./RatingCircle";
import { WatchButton } from "../Buttons";

import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

export const MovieCard = (props) => {
  const setId = () => {localStorage.setItem('clickItem', JSON.stringify(props.data.id))}
  return (
    <div className="px-2 group hover:!scale-110 duration-300">
      <div className="relative">
        <img
          className="bg-cover w-full mx-auto"
          src={`https://image.tmdb.org/t/p/original${props.data.poster_path}`}
          alt={props.data.id}
        />
      </div>
      <div className="p-2 bg-zinc-800 flex flex-col gap-2">
        <div className="grid grid-flow-col gap-4 justify-between items-center">
          <div className="flex-col order-1 truncate">
            <p className="text-sm font-semibold lg:text-base truncate">
              {props.data.title || props.data.name }
            </p>
            <p className="text-xs font-semibold lg:text-sm xl:text-base">
              {dayjs(props.data.release_date).format("YYYY")}
            </p>
          </div>
          <div className="order-2">
            <RatingCircle rating={Number(props.data.vote_average).toFixed(1)} />
          </div>
        </div>
        <a href={`/movie/${props.data.id}`}>
          <WatchButton
            icon={<PlayArrowRoundedIcon />}
            displayText="WATCH NOW"
            buttonClick={setId}
          />
        </a>
      </div>
    </div>
  );
};

export const TvCard = (props) => {
  const setId = () => {localStorage.setItem('clickItem', JSON.stringify(props.data.id))}
  return (
    <div className="px-2 group hover:!scale-110 duration-300">
      <div className="relative">
        <img
          className="bg-cover w-full mx-auto"
          src={`https://image.tmdb.org/t/p/original${props.data.poster_path}`}
          alt={props.data.id}
        />
      </div>
      <div className="p-2 bg-zinc-800 flex flex-col gap-2">
        <div className="grid grid-flow-col gap-4 justify-between items-center">
          <div className="flex-col order-1 truncate">
            <p className="text-sm font-semibold lg:text-base truncate">
              {props.data.title || props.data.name }
            </p>
            <p className="text-xs font-semibold lg:text-sm xl:text-base">
              {dayjs(props.data.release_date).format("YYYY")}
            </p>
          </div>
          <div className="order-2">
            <RatingCircle rating={Number(props.data.vote_average).toFixed(1)} />
          </div>
        </div>
        <a href={`/tv/${props.data.id}`}>
          <WatchButton
            icon={<PlayArrowRoundedIcon />}
            displayText="WATCH NOW"
            buttonClick={setId}
          />
        </a>
      </div>
    </div>
  );
};


