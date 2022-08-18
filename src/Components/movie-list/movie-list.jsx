import { useContext } from "react";
import MovieContext from "../../Context/MovieContext";

import MovieCard from "../movie-card/movie-card";

const MovieList = () => {
  const { filteredMovies, isLoading } = useContext(MovieContext);
  return isLoading ? (
    "Loading..."
  ) : (
    <div className="grid grid-cols-3 gap-4">
      {filteredMovies.map((movie) => {
        return <MovieCard movie={movie} />;
      })}
    </div>
  );
};

export default MovieList;
