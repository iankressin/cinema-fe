import React, { useEffect, useState } from "react";

import Box from "../../components/Box";
import Flex from "../../components/Flex";
import TimeCard from "../TimeCard";
import { timeResponsiveColumns } from "../../config/responsiveColumns";
import useWindowWidth from "../../hooks/useWindowWidth";
import { Wrapper } from "./styled";

const TimeList = ({ movieList }) => {
  console.log(movieList);
  const windowWidth = useWindowWidth();
  const [state, setState] = useState({ rows: [], numberOfColumns: 0 });

  useEffect(
    () => setState(chunkMoviesInGroups(timeResponsiveColumns[windowWidth])),
    [windowWidth]
  );

  useEffect(() => console.log(state));

  const chunkMoviesInGroups = size => {
    //causa a demora para o render
    if (!size) return 0;
    var myArray = [];
    for (var i = 0; i < movieList.length; i += size) {
      myArray.push(movieList.slice(i, i + size));
    }
    console.log(myArray);
    return { rows: myArray, numberOfColumns: size };
  };

  if (!state || state.rows === [] || state.numberOfColumns === 0) {
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
                    <TimeCard
                      numberOfColumns={state.numberOfColumns}
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

export default TimeList;
