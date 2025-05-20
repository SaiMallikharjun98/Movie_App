import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="border-b border-gray-300">
        <div className="flex gap-3 justify-between">
          <img
            src="/images/logo.avif"
            alt="movieLogo"
            className="w-15 h-10 p-2"
          />
          <h1 className="text-2xl">Movies</h1>
          <Link to="/" className="text-2xl hover:text-blue-700">
            Home
          </Link>
          <Link to="/details" className="text-2xl hover:text-blue-700">
            Details
          </Link>
        </div>
      </div>
    </>
  );
}
export default Navbar;
