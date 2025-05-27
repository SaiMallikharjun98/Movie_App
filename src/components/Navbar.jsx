import { Link, useNavigate } from "react-router-dom";
// import { FaSearch } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const searchHandler = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate(`/?s=${query}`);
    }
  };

  return (
    <>
      <div className="border-b border-gray-300 ">
        <div className="flex gap-3">
          <img
            src="/images/logo.avif"
            alt="movieLogo"
            className="w-15 h-10 p-2"
          />
          <h1 className="text-2xl">Movies</h1>

          <form
            onSubmit={searchHandler}
            className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg"
          >
            <input
              type="text"
              placeholder="Search Movies..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-transparent outline-none w-40 md:w-64"
            />
            {/* <button type="submit" className="text-pink-500 hover:text-pink-700">
              <FaSearch />
            </button> */}
          </form>
          <div className="flex gap-4">
            <Link to="/" className="text-2xl hover:text-blue-700">
              Home
            </Link>
            <Link to="/details" className="text-2xl hover:text-blue-700">
              Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
