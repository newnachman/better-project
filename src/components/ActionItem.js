import React from 'react';
import styled from 'styled-components';
import CheckBox from './CheckBox'

const ActionItem = ( { item, toggleItemChecked } ) => {

  return (
    <ItemWrapperStyled>
      <CheckBox type={item.type} toggleItemChecked={toggleItemChecked} isChecked={item.checked} />
      <ItemTextStyled>{ getTypeText(item.type) }</ItemTextStyled>
      <div>{ item.amount } ש"ח</div>
      <div><i>i</i></div>
    </ItemWrapperStyled>
  )
}

export default ActionItem;

const ItemTextStyled = styled.div`
  width: 40%;
`;

const ItemWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2vh;
`;

function getTypeText( type ) {
  switch (type) {
    case "cancelRelativeInsurance":
      return "ביטול ביטוח שארים";
  
    case "commissionReduction":
      return "הפחתת דמי הניהול וניוד קרן הפנסיה";
  
    case "missingDeposit":
      return "מציאת הפקדה חסרה מחודש נובמבר 2020";
  
    default:
     return "";
  }
}