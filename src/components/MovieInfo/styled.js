import styled from 'styled-components';

import Box from '../../components/Box';

export const Img = styled.img`
  width: 150px;
  height: 210px;
  filter: drop-shadow(5px 5px 7px rgba(255, 255, 178, 0.1));
}
`;

export const Header = styled.h4`
  font-weight: 700;
  margin: 0;
  font-size: ${props => (props.type === 'title' ? '2em' : '1em')};
`;

export const Wrapper = styled(Box)`
  margin: 20px;
`;
