import React from 'react';
import styled from 'styled-components';
import ActionItem from './ActionItem';

const ActionsList = ( { list, isOpenList, toggleItemChecked } ) => {

  return (
    <ListWrapperStyled isOpenList={isOpenList}>
      <div>
        <h3>חישוב חיסכון ש"ח נובע מהפעולות הבאות:</h3>
      {
        list.map( ( item, i ) => {
          return <ActionItem toggleItemChecked={toggleItemChecked} item={item} key={i} />
        })
      }
      </div>
    </ListWrapperStyled>
  )
}

export default ActionsList;

const ListWrapperStyled = styled.div`
  width: 100%;
  height: ${ props => props.isOpenList ? "fit-content" : 0};
  overflow: hidden;
  background-color: lightblue;
  margin: 4vh 0;

  &>div {
    padding: 5px 15px 20px 15px;
  }
`;