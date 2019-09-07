import React from "react";

import Box from "../../components/Box";
import MovieList from "../../components/MovieList";
import { movies } from "../../config/api";

const MoviesListView = ({}) => {
  console.log(movies);
  return (
    <Box>
      <MovieList movieList={movies} />
    </Box>
  );
};

export default MoviesListView;
