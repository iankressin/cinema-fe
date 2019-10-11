import React from "react";

import Box from "../../components/Box";
import Flex from "../../components/Flex";
import { Img, Header, Wrapper } from "./styled";
import ReadMore from "../../components/ReadMore";

const MovieInfo = ({ movieInfo }) => {
  return (
    <Wrapper>
      <Box mx="auto">
        <Flex textAlign="center">
          <Img src={require(`../../assets/bacurau.jpg`)} />
          <Header type="title">{movieInfo.title}</Header>
          <Box textAlign="left" maxWidth="200px">
            <ReadMore>{movieInfo.description}</ReadMore>
          </Box>
        </Flex>
        <Box maxWidth="600px" mx="auto"></Box>
        <Box>
          {movieInfo.cinemas.map(cinema => {
            return (
              <Box marginTop="20px">
                <Header>{cinema.name}</Header>
                <p>
                  {cinema.screenTime.map((time, index) => {
                    return cinema.screenTime.length - 1 === index
                      ? `${time}`
                      : `${time},  `;
                  })}
                </p>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Wrapper>
  );
};

export default MovieInfo;
