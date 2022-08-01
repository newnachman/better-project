import React from 'react'
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderStyled>
      <LogoStyled>LOGO</LogoStyled>
      <div>BETTER</div>
    </HeaderStyled>
  )
}

export default Header;

const LogoStyled = styled.div`
  font-size: 0.5em;
`;

const HeaderStyled = styled.div`
  display: flex;
  color: blue;
  font-size: 2em;
  font-weight: 800;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin-bottom: 3vh;
`;