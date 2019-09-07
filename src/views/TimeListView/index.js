import React from "react";

import TimeList from "../../components/TimeList";
import { movies } from "../../config/api";
import Box from "../../components/Box";

const TimeListView = ({}) => {
  return (
    <Box>
      <TimeList movieList={movies} />
    </Box>
  );
};

export default TimeListView;
