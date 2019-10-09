import React from "react";

import Box from "../../components/Box";
import ContentFrame from "../../components/ContentFrame";
import MovieList from "../../components/MovieList";
import { movies } from "../../config/api";

const MoviesListView = ({}) => {
  return (
    <ContentFrame>
      <MovieList movieList={movies} />
    </ContentFrame>
  );
};

export default MoviesListView;
