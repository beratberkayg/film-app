"use client";
import React from "react";
import Image from "next/image";

const Movies = ({ dt }) => {
  return (
    <div>
      <Image
        width={400}
        height={300}
        className="rounded-lg cursor-pointer"
        src={`https://image.tmdb.org/t/p/original/${
          dt?.backdrop_path || dt?.poster_path
        }`}
      />
      <div className="absolute">{dt.title}</div>
    </div>
  );
};

export default Movies;
