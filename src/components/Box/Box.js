import styled from "styled-components";
import { color, space, layout, typography } from "styled-system";

export const Box = styled.div`
  display: block;
  flex-wrap: wrap;
  ${space}
  ${layout}
  ${typography}
  ${color}
`;
