import React from 'react';

import { Header } from '../../components/Header';

import { 
  Text, 
  Title, 
  Container, 
  ContainerTitle, 
  ContainerBody, 
  ContainerVectorAnimated, 
  Image,
  ContainerAboutMe,
  AboutMeTitle
} from './styles';

export function Home() {
  return (
    <Container>
      <Header />
      <ContainerBody>
        <ContainerVectorAnimated>
          <Image src={require('../../assets/vector.png')} />
        </ContainerVectorAnimated>
        <ContainerTitle>
          <Title>Dev Front End</Title>
          <Text>I'm Erik, front end developer with React and React Native.</Text>
        </ContainerTitle>
      </ContainerBody>
      <ContainerAboutMe>
        <AboutMeTitle>Sobre Mim</AboutMeTitle>
      </ContainerAboutMe>
    </Container>
  )
}