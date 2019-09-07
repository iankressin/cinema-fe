import styled from "styled-components";

export const Img = styled.img`
  width: 100px;
  height: 140px;
`;

export const Title = styled.h4`
  font-weight: 700;
  margin: 0;
`;

export const Time = styled.h5`
  font-weight: 300;
  margin: 0;
`;

export const Wrapper = styled.div`
  word-wrap: break-word;
  max-width: 150px;
  margin-top: 20px;
  margin-left: ${props =>
    props.first ? "0" : `${props.numberOfColumns * 10}px`};
  text-align: center;
`;
