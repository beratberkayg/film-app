import React from "react";
import Image from "next/image";

const getMovie = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=b0eb0edb2f15cd5a1f6e9d6bd8e8a12f`
  );

  return await res.json();
};

const Movie = async ({ params }) => {
  const id = params.id;

  const movieDetail = await getMovie(id);

  return (
    <div className="relative p-7 min-h-screen">
      <Image
        style={{ objectFit: "cover" }}
        fill
        src={`https://image.tmdb.org/t/p/original/${
          movieDetail?.backdrop_path || movieDetail?.poster_path
        }`}
      />
      <div className="absolute">
        <div className="text-4xl font-bold my-3">{movieDetail?.title}</div>
        <div className=" my-3 w-1/2">{movieDetail?.overview}</div>
        <div className=" my-3">
          {movieDetail?.release_date} - {movieDetail?.vote_average}
        </div>
        <div className=" my-2 border w-32 p-2 rounded-md text-center cursor-pointer text-lg hover:bg-white hover:text-black transition-all ">
          Trial
        </div>
      </div>
    </div>
  );
};

export default Movie;
