import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import FilterComponent from './components/FilterComponent';
import CardComponent from './components/CardComponent';

const Container = styled.div`
  width: 70%;
  margin:auto;
`
const DataContainer = styled.div`
  width: 80%;
  margin: auto;
  margin-bottom: 50px;
  padding:10px;
  -webkit-box-shadow: 0px 0px 4px 1px rgba(0,0,0,0.13);
  -moz-box-shadow: 0px 0px 4px 1px rgba(0,0,0,0.13);
  box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.05);
  border-radius: 6px 6px 6px 6px;
  background: #F7F7F7;
`

function App() {

  const state = useSelector((state) => state.inmuebles);


  return (
    <Container>
      <FilterComponent />
      <DataContainer>
        {
          state.map( (data, index) => <CardComponent  key={index} precio={`${data.precio}${data.simbolo}`} info={`${data.metrosCuadrados} || ${data.dormitorios} || ${data.banios}`} direccion={data.direccion} /> )
        }
      </DataContainer>
    </Container>
  );
}

export default App;
