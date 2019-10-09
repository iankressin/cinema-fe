import styled from "styled-components";

import Box from "../Box";

export const ContentWrapper = styled(Box)`
  ${props =>
    props.windowWidth === "xs" ? "margin-bottom: 60px" : "margin-top: 60px"}
`;
