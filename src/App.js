import { Component } from "react";
import MovieList from "./Components/movie-list/movie-list";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      showMovies: false,
      searchInput: "",
    };
  }

  componentDidMount() {
    fetch(
      "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
    )
      .then((response) => response.json())
      .then((apiMovies) =>
        this.setState(() => {
          return { movies: apiMovies, showMovies: true };
        })
      );
  }

  searchMoviesHandler = (event) => {
    const search = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchInput: search };
    });
  };

  render() {
    let { showMovies, searchInput, movies } = this.state;

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
            onChange={this.searchMoviesHandler}
          />
        </div>
        {renderMovies}
      </div>
    );
  }
}

export default App;
