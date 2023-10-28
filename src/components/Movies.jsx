"use client";
import React from "react";
import Image from "next/image";

const Movies = ({ dt }) => {
  return (
    <div className="w-[450px] h-[300px]">
      <Image
        width={450}
        height={300}
        src={`https://image.tmdb.org/t/p/original/${
          dt?.backdrop_path || dt?.poster_path
        }`}
      />
    </div>
  );
};

export default Movies;
