import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
function Details() {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) => {
        console.log(response.data);
        setMovie(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  if (!movie) {
    return <div className="text-center mt-10 text-gray-600">Loading...</div>;
  }

  return (
    <>
      <div className="w-[520px] mx-auto my-20 ">
        <div className="flex gap-6">
          <img
            src={movie.Poster}
            className="h-60 w-60 object-cover mx-auto align-center"
            alt={movie.Title}
          />
          <div>
            <h3 className="text-2xl">{movie.Title}</h3>
            <p className="text-2xl  ">Actors: {movie.Actors}</p>
            <p className="text-2xl  ">Released: {movie.Released}</p>
            <p className="text-2xl ">Ratings: {movie.imdbRating}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
