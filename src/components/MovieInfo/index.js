import React from "react";

import Box from "../../components/Box";
import { Img, Title, Wrapper } from "./styled";
import ReadMore from "../../components/ReadMore";

const MovieInfo = ({ movieInfo }) => {
  return (
    <Wrapper>
      <Box textAlign="center" marginRight="auto" marginLeft="auto">
        <Img src={require(`../../assets/bacurau.jpg`)}></Img>
        <Title type="info">Bacurau</Title>
      </Box>
      <Box>
        <ReadMore>
          Simba idolatra seu pai, Rei Mufasa, e leva a sério seu futuro real.
          Mas nem todos do reino celebram sua chegada. Scar, o irmão de Mufasa e
          anterior herdeiro do trono, tem seus próprios planos. A batalha pela
          Pedra do Reino será repleta de traições, tragédia e drama, resultando
          no exilo de Simba. Com ajuda de uma curiosa dupla de novos amigos,
          Simba deverá descobrir como crescer e tomar o que é seu por direito.
        </ReadMore>
      </Box>
      <Box>
        <p>Itaguaçu</p>
      </Box>
    </Wrapper>
  );
};

export default MovieInfo;
