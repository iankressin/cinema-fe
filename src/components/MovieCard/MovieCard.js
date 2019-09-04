import styled from "styled-components";

export const Img = styled.img`
  width: 150px;
  height: 210px;
`;

export const Wrapper = styled.div`
  word-wrap: break-word;
  max-width: 150px;
  margin-top: 20px;
  margin-left: ${props =>
    props.first ? "0" : `${props.numberOfColumns * 10}px`};
  text-align: center;
`;
