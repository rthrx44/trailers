import React from "react";
import dayjs from "dayjs";
import { RatingCircle } from "./RatingCircle";
import { WatchButton, ViewInfo, LightButton } from "../Buttons";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";

export const SmallScreenHeroCard = (props) => {
  const setId = () => {
    localStorage.setItem("clickItem", JSON.stringify(props.data.id));
  };
  return (
    <>
      {props.data.poster_path ? 
        <img
          className="lazy w-full"
          src='https://fakeimg.pl/639x959?text=No+Image'
          data-src={`https://image.tmdb.org/t/p/w500${props.data.poster_path}`}
          alt={props.data.id}
        /> : <img src='https://fakeimg.pl/639x959?text=No+Image' alt={props.data.id}/>}
      <div className="absolute top-0 w-full h-full text-center flex items-end px-4 bg-gradient-to-t from-[#141414] from-10%">
        <div className="flex flex-col justify-center pr-4 mb-16 xs:mb-40 gap-2">
          <h1 className="text-white text-3xl font-bold mb-2 xs:text-4xl">
            {props.data.title || props.data.name}
          </h1>
          <div className="flex justify-center items-center gap-2">
            <RatingCircle rating={Number(props.data.vote_average).toFixed(1)} />
            <a href={`/${props.data.media_type}/${props.data.id}`}>
              <LightButton
                icon={<PlayArrowRoundedIcon />}
                displayText="WATCH NOW"
                buttonClick={setId}
              />
            </a>
            <p className="flex items-center gap-2 text-white tracking-widest uppercase text-xs">
              <FiberManualRecordRoundedIcon sx={{ fontSize: 10 }} />
              {props.data.media_type}
            </p>
          </div>
          <p className="h-20 text-white text-xs tracking-widest xs:text-sm text-ellipsis overflow-hidden">
            {props.data.overview}
          </p>
        </div>
      </div>
    </>
  );
};

export const LargeScreenHeroCard = (props) => {
  const setId = () => {
    localStorage.setItem("clickItem", JSON.stringify(props.data.id));
  };
  return (
    <>
      {props.data.backdrop_path ? 
        <img
          className="lazy w-full 2xl:container 2xl:mx-auto"
          src='https://fakeimg.pl/1536x864?text=No+Image'
          data-src={`https://image.tmdb.org/t/p/original${props.data.backdrop_path}`}
          alt={props.data.id}
        /> : <img src='https://fakeimg.pl/1536x864?text=No+Image' alt={props.data.id}/>}
      <div className="absolute top-0 w-full h-full grid grid-cols-2 bg-gradient-to-t from-[#141414] from-10%">
        <div className="order-1 flex items-center justify-center px-14 2xl:px-40">
          {props.data.poster_path ? 
            <img
              className="lazy w-full shadow-zinc-700 shadow-lg sm:w-52 md:w-60 lg:w-72 xl:w-80 2xl:w-[22rem]"
              src='https://fakeimg.pl/352x528?text=No+Image'
              data-src={`https://image.tmdb.org/t/p/w500${props.data.poster_path}`}
              alt={props.data.id}
            /> : <img src='https://fakeimg.pl/352x528?text=No+Image' alt={props.data.id}/>}
        </div>
        <div className="order-2 flex flex-col justify-center pr-6 lg:pr-10 xl:pr-20 select-none gap-2">
          <h1 className="text-white text-2xl font-extrabold pb-2 md:text-3xl lg:text-4xl xl:text-5xl truncate">
            {props.data.title || props.data.name}
          </h1>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <RatingCircle rating={Number(props.data.vote_average).toFixed(1)} />
              <a href={`/${props.data.media_type}/${props.data.id}`}>
                <LightButton
                  icon={<PlayArrowRoundedIcon />}
                  displayText="WATCH NOW"
                  buttonClick={setId}
                />
              </a>
              <p className="flex items-center justify-center gap-2 text-white tracking-widest uppercase xs:text-xs xs:leading-[13px] md:leading-4 lg:text-sm xl:text-base">
                <FiberManualRecordRoundedIcon sx={{ fontSize: 10 }} />
                {props.data.media_type}
              </p>
            </div>
            <p className="text-white tracking-widest xs:text-xs xs:leading-[13px] md:leading-4 lg:text-sm xl:text-base">
              {props.data.overview}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export const MovieCard = (props) => {
  const setId = () => {
    localStorage.setItem("clickItem", JSON.stringify(props.data.id));
  };
  return (
    <div className="px-2 group hover:!scale-105 duration-300 z-50">
      <div className="relative">
        {props.data.poster_path ? 
          <img
            className="lazy loader bg-cover w-full mx-auto"
            src='https://fakeimg.pl/203x305?text=No+Image'
            data-src={`https://image.tmdb.org/t/p/w500${props.data.poster_path}`}
            alt={props.data.id}
          /> : <img src='https://fakeimg.pl/203x305?text=No+Image' alt={props.data.id}/>}
      </div>
      <div className="p-2 bg-zinc-800 flex flex-col gap-2">
        <div className="grid grid-flow-col gap-4 justify-between items-center">
          <div className="flex-col order-1 truncate">
            <p className="text-sm font-semibold lg:text-base truncate">
              {props.data.title || props.data.name}
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
  const setId = () => {
    localStorage.setItem("clickItem", JSON.stringify(props.data.id));
  };
  return (
    <div className="px-2 group hover:!scale-105 duration-300">
      <div className="relative">
        {props.data.poster_path ? 
          <img
            className="lazy loader bg-cover w-full mx-auto"
            src='https://fakeimg.pl/203x305?text=No+Image'
            data-src={`https://image.tmdb.org/t/p/w500${props.data.poster_path}`}
            alt={props.data.id}
          /> : <img src='https://fakeimg.pl/203x305?text=No+Image' alt={props.data.id}/>}
      </div>
      <div className="p-2 bg-zinc-800 flex flex-col gap-2">
        <div className="grid grid-flow-col gap-4 justify-between items-center">
          <div className="flex-col order-1 truncate">
            <p className="text-sm font-semibold lg:text-base truncate">
              {props.data.title || props.data.name}
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
  console.log(props.data);
  return (
    <div className="px-2 flex flex-col">
      {props.data.profile_path ? 
        <img
          className="lazy loader w-full mx-auto"
          src='https://fakeimg.pl/203x305?text=No+Image'
          data-src={`https://image.tmdb.org/t/p/w500${props.data.profile_path}`}
          alt={props.data.id}
        /> : <img src='https://fakeimg.pl/203x305?text=No+Image' alt={props.data.id}/>}
      <div className="p-2 bg-zinc-800 flex flex-col gap-2">
        <div className="flex">
          <div className="flex-col">
            <p className="text-sm font-black lg:text-base">{props.data.name}</p>
            <p className="text-sm font-light lg:text-base">
              {props.data.character}
            </p>
          </div>
        </div>
        <a href="/">
          <ViewInfo
            icon={<InfoOutlinedIcon sx={{ fontSize: 20 }} />}
            displayText="VIEW INFO"
          />
        </a>
      </div>
    </div>
  );
};

export const SeasonCard = (props) => {
  const getId = localStorage.getItem("clickItem");
  const setSeasonNum = () => {
    localStorage.setItem(
      "clickSeason",
      JSON.stringify(props.data.season_number)
    );
  };
  return (
    <div className="px-2 flex flex-row">
      <div className="flex items-center">
        {props.data.poster_path ? 
          <img
            className="lazy loader w-28 shadow-zinc-700 shadow-lg 2xs:w-36 xs:w-44 md:w-44 xl:w-52"
            src='https://fakeimg.pl/161x243?text=No+Image'
            data-src={`https://image.tmdb.org/t/p/w500${props.data.poster_path}`}
            alt={props.data.id}
          /> : <img src='https://fakeimg.pl/161x243?text=No+Image' alt={props.data.id}/>}
      </div>
      <div className="p-2 bg-zinc-800 flex flex-col justify-between w-full gap-2">
        <div className="flex justify-between gap-4">
          <div className="flex flex-col text-white tracking-widest text-xs xs:text-sm md:text-xs lg:text-sm xl:text-lg">
            <p className="font-black">{props.data.name}</p>
            <p className="font-light">
              {dayjs(props.data.air_date).format("MMMM DD, YYYY")}
            </p>
            <p className="font-light">{props.data.episode_count} Episodes</p>
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
  );
};

export const EpisodeCard = (props) => {
  const getId = localStorage.getItem("clickItem");
  const setEpisodeNum = () => {
    localStorage.setItem(
      "clickEpisode",
      JSON.stringify(props.data.episode_number)
    );
  };
  return (
    <div className="flex flex-col px-2">
      <a
        href={`/tv/${getId}/season/${props.data.season_number}/episode/${props.data.episode_number}`}
      >
        <WatchButton
          icon={<PlayArrowRoundedIcon />}
          displayText={`${props.data.season_number}x${props.data.episode_number} : ${props.data.name}`}
          buttonClick={setEpisodeNum}
        />
      </a>
    </div>
  );
};
