import React from "react";
import { Link } from 'react-router-dom';

import { 
  Container, 
  ContainerStacks, 
  P, 
  Title 
} from "./styles";

export function Header() {

  return (
    <Container>
      <Title>Erik Matheus</Title>
      <ContainerStacks>
        <Link to="/"><P>Home</P></Link>
        <Link to="/projects"><P>Projetos</P></Link>
        <Link to="/contact"><P>Contatos</P></Link>
      </ContainerStacks>
    </Container>
  )
}