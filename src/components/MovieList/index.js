import React, { useState, useRef, useEffect } from "react";

import Box from "../Box";
import Flex from "../Flex";
import MovieCard from "../MovieCard";
import { movieResponsiveColumns } from "../../config/responsiveColumns";
import useWindowWidth from "../../hooks/useWindowWidth";
import { Wrapper } from "./MovieList";

const MovieList = ({ movieList }) => {
  const windowWidth = useWindowWidth();
  const [state, setState] = useState({ rows: [], numberOfColumns: 0 });

  useEffect(
    () => setState(chunkMoviesInGroups(movieResponsiveColumns[windowWidth])),
    [windowWidth]
  );

  const chunkMoviesInGroups = size => {
    if (!size) return 0;
    var myArray = [];
    for (var i = 0; i < movieList.length; i += size) {
      myArray.push(movieList.slice(i, i + size));
    }
    console.log(myArray);
    return { rows: myArray, numberOfColumns: size };
  };

  if (state.rows === [] || state.numberOfColumns === 0) {
    return <h1>LOADING..</h1>;
  }

  return (
    <Wrapper>
      {state.rows &&
        state.rows.map((columns, index) => {
          return (
            <Box>
              <Flex key={index} style={{ marginLeft: "auto" }}>
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
