import React from "react";

import { ContentWrapper } from "./styled";

const ContentFrame = ({ children }) => {
  return (
    <>
      <ContentWrapper windowWidth="lg">{children}</ContentWrapper>
    </>
  );
};

export default ContentFrame;
