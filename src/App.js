import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import MovieList from "./Components/movie-list/movie-list";
import About from "./Pages/About";
import MovieDetails from "./Pages/MovieDetails";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [showMovies, setShowMovies] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/movies")
      .then((response) => response.json())
      .then((apiMovies) => {
        setMovies(apiMovies);
        setShowMovies(true);
      });
  }, []);

  const searchMoviesHandler = (event) => {
    const search = event.target.value.toLocaleLowerCase();
    setSearchInput(search);
  };

  const filteredMovies = movies.filter((movie) => {
    return movie.Title.toLocaleLowerCase().includes(searchInput);
  });

  let renderMovies = "Loading movies...";

  if (showMovies) {
    renderMovies = <MovieList movies={filteredMovies} />;
  }

  return (
    <div className="max-w-6xl mx-auto bg-slate-200">
      <h1 className="flex justify-center text-2xl font-semibold">
        Welcome to laraveller.
      </h1>
      <div className="flex justify-center">
        <input
          className="m-2 p-2 text-gray-400 rounded-md"
          type="search"
          placeholder="search movies"
          onChange={searchMoviesHandler}
        />
      </div>
      <Routes>
        <Route path="/" element={renderMovies} />
        <Route path="about" element={<About />} />
        <Route path="movies/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};

export default App;
