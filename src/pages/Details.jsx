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
      <div className="w-[300px] mx-auto my-8 ">
        <div className="flex gap-4">
          <img
            src={movie.Poster}
            className="h-30 w-30 object-cover mx-auto"
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
