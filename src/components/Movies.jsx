"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Movies = ({ dt }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/movie/${dt?.id}`)}
      className="relative imgContainer cursor-pointer"
    >
      <Image
        style={{ objectFit: "cover" }}
        width={300}
        height={300}
        className="rounded-lg cursor-pointer"
        src={`https://image.tmdb.org/t/p/original/${
          dt?.backdrop_path || dt?.poster_path
        }`}
      />
      <div className="absolute bottom-0 p-3 text-blue-500 w-full h-full flex flex-col justify-end opacity-50 hover:opacity-100 transition-opacity">
        <p className="text-xl font-bold">{dt.title}</p>
        <div>
          {dt.release_date} - {dt.vote_average}
        </div>
      </div>
    </div>
  );
};

export default Movies;
