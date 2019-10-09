import React from "react";

import ScreenTimeList from "../../components/ScreenTimeList";
import { movies } from "../../config/api";
import ContentFrame from "../../components/ContentFrame";

const TimeListView = ({}) => {
  return (
    <ContentFrame>
      <ScreenTimeList movieList={movies} />
    </ContentFrame>
  );
};

export default TimeListView;
