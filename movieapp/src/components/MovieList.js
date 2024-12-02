import React, { Fragment } from "react";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  return (
    <Fragment>
      {props.movies.map((movie) => {
        return <MovieCard movie={movie} key={movie.id} />;
      })}
    </Fragment>
  );
};

export default MovieList;
