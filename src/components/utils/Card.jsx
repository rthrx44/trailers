import React from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { RatingCircle } from "../RatingCircle";
import { WatchButton } from "../Buttons";
import T from "../assets/T.png";


import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

export const Card = (props) => {

  return (
    <div className="px-2 group hover:!scale-110 duration-300">
      <div className="relative">
        <img
          className="bg-cover w-full mx-auto"
          src={`https://image.tmdb.org/t/p/original${props.data.poster_path}`}
          alt={props.data.id}
        />
        <img src={T} alt="Trailers Logo" className="absolute top-2 left-1 h-5 2xs:h-6 lg:h-7 xl:h-8" />
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
            <RatingCircle rating={props.data.vote_average.toFixed(1)} />
          </div>
        </div>
        <Link>
          <WatchButton
            icon={<PlayArrowRoundedIcon />}
            displayText="WATCH NOW"
          />
        </Link>
      </div>
    </div>
  );
};

