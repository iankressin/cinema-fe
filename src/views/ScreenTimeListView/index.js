import React from "react";

import ScreenTimeList from "../../components/ScreenTimeList";
import { movies } from "../../config/api";
import Box from "../../components/Box";

const TimeListView = ({}) => {
  return (
    <Box>
      <ScreenTimeList movieList={movies} />
    </Box>
  );
};

export default TimeListView;
