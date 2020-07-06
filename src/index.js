import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const initialState = {
    inmuebles: [],
    comunas : [],
    tipoInmueble  : [],
    dormitorios : [],
    selectedComuna : {},
    selectedTipoInmueble : {},
    selectedDormitorio: {}
}

function reducer(state, action){

  switch(action.type){

    case 'SET_INMUEBLES' : return {...state, inmuebles : action.payload};
    case 'SET_COMUNAS' : return {...state, comunas : action.payload};
    case 'SET_TIPO_INMUEBLE' : return {...state, tipoInmueble : action.payload};
    case 'SET_DORMITORIOS' : return {...state, dormitorios : action.payload};

    default : return state

  }

  
}

const store = createStore(reducer, initialState);


ReactDOM.render(
 
    <Provider store={store}>
      <App />
    </Provider> 
  ,
  document.getElementById('root')
);

