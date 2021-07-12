import { useState } from "react";
import moviesDataJSON from "../movies-data.json";
import MovieCard from "./MovieCard";

import AddMovie from "./AddMovie";
import FilterMovies from "./FilterMovies";

function MovieList() {
  const [moviesData, setMoviesData] = useState(moviesDataJSON);
  const [movies, setMovies] = useState(moviesDataJSON);

  const addNewMovie = (movie) => {
    const updatedMoviesData = [...moviesData, movie];
    const updatedMovies = [...movies, movie];

    setMoviesData(updatedMoviesData);
    setMovies(updatedMovies);
  };

  const filterMovieList = (str) => {
    let filteredMovies;
    if (str === "All") {
      filteredMovies = moviesData;
    } else {
      filteredMovies = moviesData.filter((movie) => {
        return movie.title[0].toLowerCase() === str.toLowerCase();
      });
    }

    setMovies(filteredMovies);
  };

  // const filterMovieList = (str) => {

  //   if (str === "") {
  //     setMovies(moviesData);
  //     return;
  //   }

  //   const filteredMovies = moviesData.filter((movie) => {
  //     return movie.title[0].toLowerCase() === str.toLowerCase();
  //   });

  //   setMovies(filteredMovies);
  // };

  return (
    <div>
      <FilterMovies filterMovies={filterMovieList} />
      <AddMovie addMovie={addNewMovie} />
      {movies.map((movie) => {
        return <MovieCard key={movie._id} movie={movie} />;
      })}
    </div>
  );
}

export default MovieList;
