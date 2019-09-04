import styled from "styled-components";

export const Img = styled.img`
  width: 170px;
  height: 230px;
`;

export const Wrapper = styled.div`
  word-wrap: break-word;
  color: #c1ccce;
  max-width: 170px;
  margin-top: 40px;
  margin-left: ${props => (props.first ? "0" : "40px")};
  text-align: center;
`;
