import React from "react";

import ContentFrame from "../../components/ContentFrame";
import MovieInfo from "../../components/MovieInfo";
import { movies } from "../../config/api";

const MovieInfoView = () => {
  const movieInfo = {
    title: "Bacurau",
    description:
      "Um diretor de cinema quer dar um final feliz ao seu último filme. Para isso, ele vai em busca de histórias reais de pessoas que, apesar de terem sofrido experiências muito dolorosas, conseguiram dar um final diferente às suas histórias, em que, no lugar de acabarem com vingança, optaram pelo maior presente de todos: o perdão.",
    cinemas: [
      {
        name: "Shopping Itaguaçu",
        screenTime: ["14:20", "14:20", "14:20", "14:20", "14:20"]
      }
    ]
  };

  return (
    <ContentFrame>
      <MovieInfo movieInfo={movieInfo} />
    </ContentFrame>
  );
};

export default MovieInfoView;
