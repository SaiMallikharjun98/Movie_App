import { Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:imdbID" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
