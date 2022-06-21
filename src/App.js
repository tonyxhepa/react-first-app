import { Component } from "react";

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
      renderMovies = (
        <div>
          {filteredMovies.map((movie) => {
            return (
              <h2 key={movie.Title}>
                My favorite movie is {movie.Title} {movie.Year}
              </h2>
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Welcome to laraveller.</h1>
        <input
          type="search"
          placeholder="search movies"
          onChange={this.searchMoviesHandler}
        />
        {renderMovies}
      </div>
    );
  }
}

export default App;
