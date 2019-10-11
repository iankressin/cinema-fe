import React from "react";

import { Badge } from "./styled";
import Flex from "../Flex";

const BadgeList = ({ badges }) => {
  return (
    <Flex mt="10px">
      {badges.map(badge => (
        <Badge>{badge}</Badge>
      ))}
    </Flex>
  );
};

export default BadgeList;
