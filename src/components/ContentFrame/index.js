import React from "react";

import { ContentWrapper } from "./styled";
import Tabs from "../Tabs";

const ContentFrame = ({ children }) => {
  return (
    <>
      <Tabs />
      <ContentWrapper windowWidth="lg">{children}</ContentWrapper>
    </>
  );
};

export default ContentFrame;
