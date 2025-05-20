import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Home() {
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
      <Link to="/details" state={{ movie }}>
        <div className="w-[200px] my-20 mx-auto">
          <img
            src={movie.Poster}
            className="h-30 w-30 object-cover mx-auto"
            alt={movie.Title}
          />
          <h3 className="text-2xl">{movie.Title}</h3>
          <p className="text-2xl  ">Actors: {movie.Actors}</p>
          <p className="text-2xl  ">Released: {movie.Released}</p>
          <p className="text-2xl ">Ratings: {movie.imdbRating}</p>
        </div>
      </Link>
    </>
  );
}

export default Home;
