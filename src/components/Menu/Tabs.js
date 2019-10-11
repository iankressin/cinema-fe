import styled from "styled-components";

import Box from "../Box";
import Flex from "../Flex";
import { Link } from "react-router-dom";

export const Wrapper = styled(Flex)`
  width: 100%;
  background-color: #1c2023;
  line-height: 45px
  height: 45px;
  position: fixed;
  ${props => {
    if (props.windowWidth === "lg" || props.windowWidth === "md") {
      return "top: 0; line-height: 55px; height: 55px";
    } else {
      return "bottom: 0; line-height: 45px; height: 45px";
    }
  }}`;

export const Tab = styled(Box)`
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  border-bottom: ${props => (props.active ? "3px solid #ff005d" : "none")};
  margin-left: auto;
  margin-right: auto;
  color: white;
`;
