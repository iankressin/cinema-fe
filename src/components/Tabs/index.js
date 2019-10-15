import React, { useState } from "react";

import Box from "../Box";
import Flex from "../Flex";
import { ContentWrapper, Tab } from "./styled.js";

const Tabs = ({ data }) => {
  const [active, setActive] = useState(0);

  return (
    <Box>
      <Flex>
        <Tab index={0}>Hoje</Tab>
        <Tab index={1}>Amanhã</Tab>
        <Tab index={2}>Quarta</Tab>
        <Tab index={4}>Quinta</Tab>
      </Flex>
      <ContentWrapper></ContentWrapper>
    </Box>
  );
};

export default Tabs;
