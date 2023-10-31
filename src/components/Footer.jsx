import React from "react";
import Trailers from "./assets/Trailers-Logo.png";
import T from "./assets/T.png";
import TMDBL from "./assets/TMDBL.svg";
import TMDBSF from "./assets/TMDBSF.svg";

function Footer () {
  return (
    <>
      <div className="container mx-auto md:grid md:grid-cols-2 md:place-items-center">
        <div className="my-16 py-8 flex flex-col justify-center items-center gap-8 md:grid md:grid-cols-2 order-1">
          <img src={Trailers} alt="Trailers Logo" className="h-5 xs:h-6 lg:h-7 xl:h-8 md:hidden" />
          <img src={T} alt="Trailers Logo" className="hidden md:flex md:h-40 lg:h-44 xl:h-48 2xl:h-52" />
          <ul className="flex flex-col items-center gap-6 text-xs tracking-widest lg:text-sm xl:text-base text-[#fff] md:gap-8">
            <li className="hover:text-red-700 cursor-pointer font-semibold transition-all ease-in-out"><a href="/">HOME</a></li>
            <li className="hover:text-red-700 cursor-pointer font-semibold transition-all ease-in-out">BROWSE</li>
            <li className="hover:text-red-700 cursor-pointer font-semibold transition-all ease-in-out"><a href="/discover/movie">MOVIES</a></li>
            <li className="hover:text-red-700 cursor-pointer font-semibold transition-all ease-in-out"><a href="/discover/tv">TV SHOWS</a></li>
          </ul>
        </div>
        <div className="mt-10 flex flex-col items-center gap-4 px-12 md:mb-10 order-2">
          <img src={TMDBL} alt="TMDB Logo" className="h-4 xs:h-5 lg:h-6 xl:h-7 md:hidden" />
          <img src={TMDBSF} alt="TMDB Logo" className="hidden md:flex h-7 xs:h-8 lg:h-9 xl:h-10" />
          <p className="text-center text-xs lg:text-sm xl:text-base text-[#fff] text-opacity-40"><b>"This product uses the TMDB API but is not endorsed or certified by TMDB."</b></p>
        </div>
      </div>
      <div className="mt-24 px-4 text-center text-xs text-[#fff] text-opacity-20">
        <p><b>DISCLAIMER</b></p>
        <p className="mb-8 "><b>"This site does not store any files on its server. All contents are provided by non-affiliated third parties."</b></p>
        <p><b>Copyright © 2023. Designed and built by Ruther Dio.</b></p>
      </div>
    </>
  );
};

export default Footer;
