import styled from "styled-components";

import Box from "../Box";

export const Tab = styled(Box)`
  height: 25px;
  lineHeight: 25px;
  padding: 10px
  width: auto;
  text-align: center;
  ${props => props.active && "border: 1px solid #F7475C"}
  border-radius: 2px
  background-color: #1C2023
`;

export const ContentWrapper = styled(Box)`
  border: 1px sold #F7475C
  border-radius: 2px
  width: 600px
  height:  100px
  background-color: #1C2023
`;
