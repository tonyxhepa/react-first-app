import { Component } from "react";
import MovieCard from "../movie-card/movie-card";

class MovieList extends Component {
  render() {
    return (
      <div className="grid grid-cols-3 gap-4">
        {this.props.movies.map((movie) => {
          return <MovieCard movie={movie} />;
        })}
      </div>
    );
  }
}

export default MovieList;
