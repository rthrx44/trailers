import React from "react";
import dayjs from "dayjs";
import { RatingCircle } from "./RatingCircle";
import { WatchButton, ViewInfo } from "../Buttons";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
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

export const CastCard = (props) => {
  return (
    <div className='px-2 flex flex-col'>
      <img
          className="w-full mx-auto"
          src={`https://image.tmdb.org/t/p/original${props.data.profile_path}`}
          alt={props.data.id}
        />
      <div className="p-2 bg-zinc-800 flex flex-col gap-2">
        <div className="flex">
          <div className="flex-col">
            <p className="text-sm font-black lg:text-base">{props.data.name}</p>
            <p className='text-sm font-light lg:text-base'>{props.data.character}</p>
          </div>
        </div>
        <a href='/'>
          <ViewInfo
            icon={<InfoOutlinedIcon sx={{ fontSize: 20 }}/>}
            displayText="VIEW INFO"
          />
        </a>
      </div>
    </div>
  )
}

export const SeasonCard = (props) => {
  const getId = localStorage.getItem("clickItem")
  const setSeasonNum = () => {localStorage.setItem('clickSeason', JSON.stringify(props.data.season_number))}
  return (
    <div className='px-2 flex flex-row'>
      <div className="flex items-center">
        <img
          className='w-28 shadow-zinc-700 shadow-lg 2xs:w-36 xs:w-44 md:w-44 xl:w-52'
          src={`https://image.tmdb.org/t/p/original${props.data.poster_path}`}
          alt={props.data.id}
        />
      </div>
      <div className="p-2 bg-zinc-800 flex flex-col justify-between w-full gap-2">
        <div className="flex justify-between gap-4">
          <div className="flex flex-col text-white tracking-widest text-xs xs:text-sm md:text-xs lg:text-sm xl:text-lg">
            <p className="font-black">{props.data.name}</p>
            <p className='font-light'>{dayjs(props.data.air_date).format("MMMM DD, YYYY")}</p>
            <p className='font-light'>{props.data.episode_count} Episodes</p>
          </div>
          <div>
            <RatingCircle rating={Number(props.data.vote_average).toFixed(1)} />
          </div>
        </div>
        <a href={`/tv/${getId}/season/${props.data.season_number}`}>
          <WatchButton
            icon={<PlayArrowRoundedIcon />}
            displayText="WATCH NOW"
            buttonClick={setSeasonNum}
          />
        </a>
      </div>
    </div>
  )
}

export const EpisodeCard = (props) => {
  const getId = localStorage.getItem("clickItem")
  const setEpisodeNum = () => {localStorage.setItem('clickEpisode', JSON.stringify(props.data.episode_number))}
  return (
    <div className='flex flex-col px-2'>
      <a href={`/tv/${getId}/season/${props.data.season_number}/episode/${props.data.episode_number}`}>
          <WatchButton
            icon={<PlayArrowRoundedIcon />}
            displayText={`${props.data.season_number}x${props.data.episode_number} : ${props.data.name}`}
            buttonClick={setEpisodeNum}
          />
        </a>
    </div>
  )
}


