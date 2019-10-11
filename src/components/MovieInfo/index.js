import React from "react";

import Badge from "../../components/Badge";
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
          <Box textAlign="left" maxWidth="400px" ml="30px">
            <Header type="title">{movieInfo.title}</Header>
            <Badge badges={["Drama", "120 min", "Jose Maria"]} />
            <ReadMore>{movieInfo.description}</ReadMore>
          </Box>
        </Flex>
        <Box>
          <h2>Cinemas</h2>
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
      </Box>
    </Wrapper>
  );
};

export default MovieInfo;
