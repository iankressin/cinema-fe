import React, { useState, useRef, useEffect } from "react";

import Box from "../Box";
import Flex from "../Flex";
import MovieCard from "../MovieCard";
import useWindowWidth from "../../hooks/useWindowWidth";
import { Wrapper } from "./MovieList";

const MovieList = ({ movieList }) => {
  const windowWidth = useWindowWidth();
  const [state, setState] = useState({ columns: null });
  const wrapperRef = useRef(null);

  useEffect(() => setState({ rows: getRows(windowWidth) }), [windowWidth]);

  useEffect(() => console.log(getRows(windowWidth)));

  const getRows = width => {
    if (width >= 1200) {
      return chunkMoviesInGroups(5);
    }

    if (width < 1200 && width >= 768) {
      return chunkMoviesInGroups(4);
    }

    if (width < 768 && width >= 576) {
      return chunkMoviesInGroups(3);
    }

    if (width < 576) {
      return chunkMoviesInGroups(1);
    }
  };

  const chunkMoviesInGroups = size => {
    var myArray = [];
    for (var i = 0; i < movieList.length; i += size) {
      myArray.push(movieList.slice(i, i + size));
    }
    return myArray;
  };

  if (state.columns === null) {
    return <h1>LOADING..</h1>;
  }

  return (
    <Box ref={wrapperRef} bg="#1d1d1d" display="inline-block">
      {state.rows.map((columns, index) => {
        return (
          <Box>
            <Flex
              key={index}
              style={{ marginLeft: "auto", marginLeft: "auto" }}
            >
              {columns.map((movie, index) => {
                return (
                  <MovieCard
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
    </Box>
  );
};

export default MovieList;
