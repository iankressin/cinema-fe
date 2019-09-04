import React from "react";

import Box from "../Box";
import { Img, Wrapper } from "./MovieCard";

const MovieCard = ({ first, movieInfo, numberOfColumns }) => {
  return (
    <Wrapper first={first} numberOfColumns={numberOfColumns}>
      <Img src={require(`../../assets/${movieInfo.img}`)} />
      <p>{movieInfo.title}</p>
    </Wrapper>
  );
};

export default MovieCard;
