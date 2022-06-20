import { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: [
        { name: "Fast 9", year: 2020 },
        { name: "Fast X", year: 2022 },
        { name: "Fast 11", year: 2023 },
      ],
    };
  }

  changeName = (evenet) => {
    this.setState({
      movies: [
        { name: evenet.target.value, year: 2025 },
        { name: "Fast X", year: 2022 },
        { name: "Fast 11", year: 2023 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to laraveller.</h1>
        <p>
          My favorite movie is {this.state.movies[0].name}
          {this.state.movies[0].year}.
        </p>
        <p>
          My favorite movie is {this.state.movies[1].name}
          {this.state.movies[1].year}.
        </p>
        <p>
          My favorite movie is {this.state.movies[2].name}
          {this.state.movies[2].year}.
        </p>
        <input
          type="text"
          onChange={this.changeName}
          value={this.state.movies[0].name}
        />
      </div>
    );
  }
}

export default App;
