import Movies from "@/components/Movies";
import React from "react";

const Search = async ({ params }) => {
  const keyword = params.keyword;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=b0eb0edb2f15cd5a1f6e9d6bd8e8a12f&query=${keyword}&language=en-US&page=1`
  );
  const data = await res.json();

  return (
    <div>
      {!data?.results ? (
        <div>Aranan Film Bulunamadı...</div>
      ) : (
        <div className="flex items-center flex-wrap gap-3">
          {data?.results.map((dt, i) => (
            <Movies key={i} dt={dt} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
