import React, { useState } from 'react';
import Title from './Title';
import MainText from './MainText';
import ActionsList from './ActionsList';

const Content = ( { data, toggleItemChecked } ) => {

  const [isOpenList, setIsOpenList] = useState(false);

  return (
    <div>
      <Title name={data.name}/>
      <MainText totalMoneySaved={data.totalMoneySaved} isOpenList={isOpenList} setIsOpenList={setIsOpenList} />
      <ActionsList toggleItemChecked={toggleItemChecked} list={data.actions} isOpenList={isOpenList} />
    </div>
  )
}

export default Content;