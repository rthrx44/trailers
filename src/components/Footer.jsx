import React from "react";
import Trailers from "./assets/Trailers.png";
import T from "./assets/T.png";
import TMDBL from "./assets/TMDBL.svg";
import TMDBSF from "./assets/TMDBSF.svg";
import YTS from "./assets/YTS.png";

function Footer () {
  return (
    <>
    <div className="container mx-auto md:grid md:grid-cols-3 md:place-items-center">
      <div className="my-16 py-8 flex flex-col justify-center items-center gap-8 md:grid md:grid-cols-2 order-1">
        <div className="">
          <img src={Trailers} alt="Trailers Logo" className="h-5 xs:h-6 lg:h-7 xl:h-8 md:hidden" />
          <img src={T} alt="Trailers Logo" className="hidden md:flex md:h-40 lg:h-44 xl:h-48 2xl:h-52" />
        </div>
        <div className="">
          <ul className="flex flex-col items-center gap-6 text-xs tracking-widest lg:text-sm xl:text-base text-[#fff] md:gap-8">
            <li className="hover:text-red-700 cursor-pointer font-semibold transition-all ease-in-out">HOME</li>
            <li className="hover:text-red-700 cursor-pointer font-semibold transition-all ease-in-out">BROWSE</li>
            <li className="hover:text-red-700 cursor-pointer font-semibold transition-all ease-in-out"> MOVIES</li>
            <li className="hover:text-red-700 cursor-pointer font-semibold transition-all ease-in-out">TV SHOWS</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center gap-4 px-12 md:mb-10 order-2">
        <img src={TMDBL} alt="TMDB Logo" className="h-4 xs:h-5 lg:h-6 xl:h-7 md:hidden" />
        <img src={TMDBSF} alt="TMDB Logo" className="hidden md:flex h-7 xs:h-8 lg:h-9 xl:h-10" />
        <p className="text-center text-xs lg:text-sm xl:text-base text-[#fff] text-opacity-40"><b>"This product uses the TMDB API but is not endorsed or certified by TMDB."</b></p>
      </div>
      <div className="mt-10 flex flex-col items-center gap-4 px-12 md:mb-10 order-3">
        <img src={YTS} alt="YTS Logo" className="h-6 xs:h-7 lg:h-8" />
        <p className="text-center text-xs lg:text-sm xl:text-base text-[#fff] text-opacity-40"><b>"This product uses the YTS API but is not endorsed or certified by YTS."</b></p>
      </div>
    </div>
    <div className="mt-10 px-4">
      <p className="text-center text-xs text-[#fff] text-opacity-20"><b>Copyright © 2023. Designed and built by Ruther Dio. All rights reserved.</b></p>
    </div>
    </>
  );
};

export default Footer;
