import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  background-color: ${colors.BLUE_PRIMARY};
`;
export const Title = styled.h1`
  padding: 20px;
  color: ${colors.BLUE_TERTIARY};
  font-family: 'Paytone One';
  letter-spacing: 1px;
  font-size: 1.7rem;
`;
export const ContainerStacks = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
`;
export const P = styled.p`
  margin-left: 10px;
  font-family: 'Paytone One', sans-serif;
  letter-spacing: 1px;
  font-weight: 500;
  font-size: 1.2rem;
  color: ${colors.WHITE_PRIMARY};
`;