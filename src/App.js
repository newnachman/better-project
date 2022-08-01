import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Content from './components/Content';
import Header from './components/Header';
import Controls from './components/Controls';
import { responseData } from './data/data';




function App() {

  const [data, setData] = useState({ ...responseData, actions: addCheckedToList(responseData.actions) });
  
  console.log({data})

  // useEffect( () => {
  //   fetch('https://better-dev.s3.eu-central-1.amazonaws.com/2.json', {
  //     method : "GET",
  //     mode: 'cors',
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  //   .then( response =>  response.json())
  //   .then( responseData => setData( { ...responseData, actions: addCheckedToList(responseData.actions) } ));
  // }, [] )

  function addCheckedToList( list ) {
    return list.map( ( action ) => {
      return { ...action, checked: false  }
    } )
  }

  function toggleItemChecked( actionType ) {
    let updatedActionsList = data.actions.map( ( action ) => {
      if (action.type === actionType ) {
        return { ...action, checked: !action.checked  }
      } else {
        return { ...action }
      }
    } )

    setData({ ...responseData, actions: updatedActionsList } )
  }

  function approve() {
    let sum = 0;
    data.actions.forEach( action => {
      if (action.checked) {
        sum += action.amount;
      }
    });
    alert(`אישרת לנו לחסוך לך ${sum} ש"ח`);
  }

  function decline() {
    alert('אנחנו מצטערים לשמוע שאינך מעוניין לחסוך.');
  }

  return (
    <MainWrapperStyled >
      <Header/>
      { data && <Content data={data} toggleItemChecked={toggleItemChecked} />}
      <Controls approve={approve} decline={decline} />
    </MainWrapperStyled>
  );
}

export default App;

const MainWrapperStyled = styled.div`
  width: 95%;
  max-width: 480px;
  margin: 10px auto;
  background-color: white;
  padding: 20px 3%;
`;
