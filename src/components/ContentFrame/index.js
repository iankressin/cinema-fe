import React from "react";

import { ContentWrapper } from "./styled";
import Tabs from "../Tabs";

const ContentFrame = ({ children }) => {
  return (
    <>
      <ContentWrapper windowWidth="lg">{children}</ContentWrapper>
    </>
  );
};

export default ContentFrame;
