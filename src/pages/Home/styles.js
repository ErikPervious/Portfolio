import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.BLUE_PRIMARY};
`;
export const ContainerBody = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
`;
export const ContainerVectorAnimated = styled.div`
`;
export const Image = styled.img`
  width: 300px;
`;
export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h2`
  font-size: 1.8rem;
  color: ${colors.WHITE_SECONDARY};
  font-family: 'Paytone One';
  letter-spacing: 1px;
`;
export const Text = styled.p`
  color: ${colors.WHITE_SECONDARY};
  margin-top: 10px;
  font-family: 'Roboto';
  font-weight: 500px;
`;
export const ContainerAboutMe = styled.div`
  width: 100%;
  height: 100vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: ${colors.BLUE_SECONDARY};
`;
export const AboutMeTitle = styled.h2`
  color: white;
`;
export const ContainerSocialIcons = styled.div`
`;
export const ContainerMoreAboutMe = styled.div`
`;