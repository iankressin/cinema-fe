import React from 'react';

import Box from '../../components/Box';
import {Img, Header, Wrapper} from './styled';
import ReadMore from '../../components/ReadMore';

const MovieInfo = ({movieInfo}) => {
  return (
    <Wrapper>
      <Box textAlign="center">
        <Img src={require(`../../assets/bacurau.jpg`)} />{' '}
        <Header type="title">{movieInfo.title}</Header>
      </Box>
      <ReadMore>{movieInfo.description}</ReadMore>
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
    </Wrapper>
  );
};

export default MovieInfo;
