import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.BLUE_PRIMARY};
`;