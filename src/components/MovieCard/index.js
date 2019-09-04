import React from "react";

import Box from "../Box";
import { Img, Wrapper } from "./MovieCard";

const MovieCard = ({ movieInfo, first }) => {
  return (
    <Wrapper color="white" first={first}>
      <Img src={require(`../../assets/${movieInfo.img}`)} />
      <p>{movieInfo.title}</p>
    </Wrapper>
  );
};

export default MovieCard;
