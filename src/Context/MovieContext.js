import { createContext, useState, useEffect } from "react";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/movies")
      .then((response) => response.json())
      .then((apiMovies) => {
        setMovies(apiMovies);
        setIsLoading(false);
      });
  }, []);

  const searchMoviesHandler = (event) => {
    const search = event.target.value.toLocaleLowerCase();
    setSearchInput(search);
  };

  const filteredMovies = movies.filter((movie) => {
    return movie.Title.toLocaleLowerCase().includes(searchInput);
  });

  return (
    <MovieContext.Provider
      value={{ filteredMovies, isLoading, searchMoviesHandler }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
