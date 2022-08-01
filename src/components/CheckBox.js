import React from 'react';
import styled from 'styled-components';

const CheckBox = ({ isSelected, toggleItemChecked, type }) => {

  return (
    <ContainerStyled>
      <InputStyled onChange={ () => toggleItemChecked( type ) } type="checkbox" checked={isSelected} />
      <CustomCheckboxStyled />
    </ContainerStyled>
  )
}

export default CheckBox;


/* Hide the browser's default checkbox */
const InputStyled = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

/* Create a custom checkbox */
const CustomCheckboxStyled = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;

  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`;

const ContainerStyled = styled.label`
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;

  &:hover input ~ ${CustomCheckboxStyled} {
    background-color: #ccc;
  }

  & input:checked ~ ${CustomCheckboxStyled} {
    background-color: #2196F3;
  }

  & input:checked ~ ${CustomCheckboxStyled}:after {
    display: block;
  }

  & ${CustomCheckboxStyled}:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;