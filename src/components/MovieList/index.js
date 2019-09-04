import React, { useState, useRef, useEffect } from "react";

import Box from "../Box";
import Flex from "../Flex";
import MovieCard from "../MovieCard";
import useWindowWidth from "../../hooks/useWindowWidth";
import { Wrapper } from "./MovieList";

const MovieList = ({ movieList }) => {
  const windowWidth = useWindowWidth();
  const [state, setState] = useState({ rows: [], numberOfColumns: 0 });
  const wrapperRef = useRef(null);

  useEffect(() => setState(getRows(windowWidth)), [windowWidth]);

  const getRows = width => {
    if (width >= 1200) {
      const numberOfColumns = 5;
      return chunkMoviesInGroups(numberOfColumns);
    }

    if (width < 1200 && width >= 768) {
      const numberOfColumns = 4;
      return chunkMoviesInGroups(numberOfColumns);
    }

    if (width < 768 && width >= 576) {
      const numberOfColumns = 3;
      return chunkMoviesInGroups(numberOfColumns);
    }

    if (width < 576) {
      const numberOfColumns = 2;
      return chunkMoviesInGroups(numberOfColumns);
    }
  };

  const chunkMoviesInGroups = size => {
    var myArray = [];
    for (var i = 0; i < movieList.length; i += size) {
      myArray.push(movieList.slice(i, i + size));
    }
    return { rows: myArray, numberOfColumns: size };
  };

  useEffect(() => console.log(state.numberOfColumns));

  if (state.rows === [] || state.numberOfColumns === 0) {
    return <h1>LOADING..</h1>;
  }

  return (
    <Wrapper ref={wrapperRef}>
      {console.log(state.numberOfColumns)}
      {state.rows &&
        state.rows.map((columns, index) => {
          return (
            <Box>
              <Flex
                key={index}
                style={{ marginLeft: "auto", marginLeft: "auto" }}
              >
                {columns.map((movie, index) => {
                  return (
                    <MovieCard
                      numberOfColumns={state.numberOfColumns}
                      first={index === 0}
                      movieInfo={movie}
                      key={index}
                    />
                  );
                })}
              </Flex>
            </Box>
          );
        })}
    </Wrapper>
  );
};

export default MovieList;
