import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Home() {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("s") || "Marvel";
  useEffect(() => {
    axios
      .get(`${baseUrl}?apikey=${apiKey}&s=${query}`)
      .then((response) => {
        console.log(response.data);
        if (response.data.Response === "True") {
          setMovies(response.data.Search);
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
  }, [query]);
  if (loading) {
    return <div className="text-center mt-10 text-gray-600">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-600">{error}</div>;
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <Link
              key={movie.imdbID}
              to={`/details/${movie.imdbID}`}
              state={{ movie }}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={
                    movie.Poster !== "N/A"
                      ? movie.Poster
                      : "https://via.placeholder.com/300x450?text=No+Poster"
                  }
                  className="w-full h-[450px] object-cover"
                  alt={movie.Title}
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{movie.Title}</h3>
                  <p className="text-gray-600">Year: {movie.Year}</p>
                  <p className="text-gray-600">Type: {movie.Type}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
