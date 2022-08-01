import React from 'react'
import styled from 'styled-components';

const Title = ( { name } ) => {
  return (
    <TitleStyled>היי {name}!</TitleStyled>
  )
}

export default Title;

const TitleStyled = styled.h1`
  color: green;
`;