import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Details() {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { imdbID } = useParams();

  useEffect(() => {
    axios
      .get(`${baseUrl}?apikey=${apiKey}&i=${imdbID}`)
      .then((response) => {
        if (response.data.Response === "True") {
          setMovie(response.data);
        } else {
          setError("No movies found");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Error fetching movies");
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <div className="text-center mt-10 text-gray-600">Loading...</div>;
  }
  if (error) {
    return <div className="text-center mt-10 text-red-600">{error}</div>;
  }

  return (
    <>
      <div className="w-[520px] mx-auto my-20 ">
        <div className="flex gap-6">
          <img
            src={movie.Poster}
            className="h-60 w-60 object-cover mx-auto justify-center"
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
