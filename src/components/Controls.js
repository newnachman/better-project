import React from 'react'
import styled from 'styled-components';

const Controls = ( { approve, decline } ) => {
  return (
    <div>
      <ButtonStyled onClick={ approve }>מאשר, תחסכו לי</ButtonStyled>
      <div onClick={ decline }>לא מעוניין לחסוך</div>
    </div>
  )
}

export default Controls;

const ButtonStyled = styled.button`
  width: 100%;
  padding: 1vh 20px;
  background-color: blue;
  color: white;
  font-size: 1.2em;
`