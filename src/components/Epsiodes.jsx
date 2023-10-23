import React from "react";
const getId = localStorage.getItem("clickItem");
const getSeasonNum = localStorage.getItem("clickSeason");

export const Epsiodes = () => {
  return (
    <div>
      {/* <section className="px-4 container mx-auto">
        <div className="flex flex-col mt-4 mb-8 xl:mb-12 sm:px-10 md:p-12 lg:px-16 xl:px-20 gap-4">
          <p className="text-gray-500 text-center tracking-widest font-bold text-xs">
            If current server doesn't work please try other servers below.
          </p>
          <iframe
            className="w-full aspect-video"
            src={`https://autoembed.to/tv/tmdb/${getId}-${getSeasonNum}`}
            allowFullScreen={true}
            title="Video Container"
          ></iframe>
        </div>
      </section> */}
    </div>
  );
};
