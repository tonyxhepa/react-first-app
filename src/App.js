import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./Context/MovieContext";

import Header from "./Components/Header";
import MovieList from "./Components/movie-list/movie-list";
import About from "./Pages/About";
import MovieDetails from "./Pages/MovieDetails";

const App = () => {
  return (
    <MovieProvider>
      <Header />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="about" element={<About />} />
        <Route path="movies/:id" element={<MovieDetails />} />
      </Routes>
    </MovieProvider>
  );
};

export default App;
