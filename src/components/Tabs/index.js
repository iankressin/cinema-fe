import React, { useState } from "react";

import Flex from "../Flex";
import { StyledLink, Tab, Wrapper } from "./Tabs";
import { tabs } from "../../config/tabs";

const Tabs = () => {
  const [activeTab, setActive] = useState(0);

  const handleTabClick = index => {
    setActive(index);
  };

  return (
    <Wrapper>
      {tabs.map((tab, index) => {
        return (
          <StyledLink key={index} active={index === activeTab} to={tab.path}>
            <Tab
              onClick={() => handleTabClick(index)}
              index={index}
              key={index}
            >
              <Flex marginRight="10px">{tab.icon}</Flex>
              {tab.label}
            </Tab>
          </StyledLink>
        );
      })}
    </Wrapper>
  );
};

export default Tabs;
