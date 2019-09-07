import React from "react";

import Box from "../Box";
import Flex from "../Flex";
import { Img, Time, Title, Wrapper } from "./styled";

const TimeCard = ({ movieInfo, first, numberOfColumns }) => {
  const lastTime = movieInfo.times.length - 1;

  return (
    <Box mt="15px">
      <Flex>
        <Img src={require(`../../assets/${movieInfo.img}`)} />
        <Box ml="20px" mt="15px">
          <Title>{movieInfo.title}</Title>
          <Flex mt="20px">
            {movieInfo.times.map((time, index) => {
              return (
                <Time>{lastTime === index ? `${time}` : `${time},  `}</Time>
              );
            })}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default TimeCard;
