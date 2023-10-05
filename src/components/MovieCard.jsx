import React from "react";
import dayjs from "dayjs";
import { RatingCircle } from "./RatingCircle";
import { WatchButton } from "./Buttons";

import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

export const MovieCard = (props) => {
  return (
    <div className="px-2">
      <img
        className="bg-cover w-full mx-auto"
        src={`https://image.tmdb.org/t/p/original${props.data.poster_path}`}
        alt={props.data.id}
      />
      <div className="py-2 bg-zinc-800 flex flex-col gap-2">
        <div className="px-2 grid grid-flow-col gap-4 justify-between items-center">
          <div className="flex-col order-1 truncate">
            <p className="text-sm font-semibold lg:text-base xl:text-lg truncate">
              {props.data.title}
            </p>
            <p className="text-xs font-semibold lg:text-sm xl:text-base">
              {dayjs(props.data.release_date).format("YYYY")}
            </p>
          </div>
          <div className="order-2">
            <RatingCircle rating={props.data.vote_average.toFixed(1)} />
          </div>
        </div>
        <WatchButton
          icon={<PlayArrowRoundedIcon />}
          displayText="WATCH TRAILERS"
        />
      </div>
    </div>
  );
};
