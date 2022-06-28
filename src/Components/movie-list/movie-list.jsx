import MovieCard from "../movie-card/movie-card";

const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {movies.map((movie) => {
        return <MovieCard movie={movie} />;
      })}
    </div>
  );
};

export default MovieList;
