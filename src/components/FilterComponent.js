import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {getComunas, getTipo, getDormitorios, getInmuebles} from './../services/service';


const FilterContainer = styled.div`
    width: 80%;
    height: 100px;
    margin: auto;
    margin-top:100px;
    margin-bottom:50px;
    background: #F7F7F7;
    border-radius: 6px 6px 6px 6px;
    padding: 10px;
    box-shadow: 0px 0px 50px 1px rgba(0,0,0,1);
    border-radius: 10px 10px 10px 10px;
    -moz-border-radius: 10px 10px 10px 10px;
    -webkit-border-radius: 10px 10px 10px 10px; 
    -webkit-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.32);
`
const SelectContainer = styled.div`
    line-height: 100px;
    width: 60%;
    margin: auto;
`
const Select = styled.select`
    width: 120px;
    margin: 10px;
    height: 30px;
    border-radius: 5px 5px 5px 5px;
    border: 0px solid #000000;
    font-family: 'Muli';
`
const Option = styled.option`
    border: 0px solid #000000;
    height:35px;
    
`
const Button = styled.button`
    border: none;
    cursor: pointer;
    outline: inherit;
    width:70px;
    height:30px;
    background: #FF7397;
    border-radius: 4px 4px 4px 4px;
    -moz-border-radius: 4px 4px 4px 4px;
    -webkit-border-radius: 4px 4px 4px 4px;
    &:hover {
        background: #FF4C7A;
        transition: 0.2s ease-in;
    }
`


const FilterComponent = () => {

    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const [comuna, setComuna] = useState('');
    const [tipoInmueble, setTipo] = useState('');
    const [dormitorios, setDormitorio] = useState('');

    useEffect(()=> {
        getComunas().then(comunas=> {
            dispatch({type:'SET_COMUNAS', payload: comunas});
        } ) 
    },[]);
  
    const requestData = async () =>{

        const inmuebles = await getInmuebles({comuna,dormitorios, tipoInmueble});
        dispatch({type:'SET_INMUEBLES',payload:inmuebles});
        
    }
    
    const handleSelected = async(value, select) => {
       switch(select){
            case 'comuna' : {
                const tipo = await getTipo(value);
                dispatch({type:'SET_TIPO_INMUEBLE', payload:tipo});
                setComuna(value);
                value = " ";
           }
            case 'tipo' : {
                const dormitorios = await getDormitorios(comuna, value);
                dispatch({type:'SET_DORMITORIOS', payload:dormitorios});
                setTipo(value);
                value = " ";
            }
            case 'dormitorio' : {  
                setDormitorio(value);
            }
        }
    }

    return (
        <FilterContainer>
            <SelectContainer>
            <Select onChange={(e)=> handleSelected(e.target.value, 'comuna')}>
                {
                    state.comunas.map( (value,index) => <Option key={index}>{ (value === "") ? "Sin valor" : value}</Option>)
                }
            </Select>
            <Select onChange={(e)=> handleSelected(e.target.value, 'tipo')}>
                {
                    state.tipoInmueble.map( (value,index) => <Option key={index}>{ (value === "") ? "Sin valor" : value}</Option>)
                }
            </Select>
            <Select onChange={(e)=> handleSelected(e.target.value, 'dormitorio')}>
                {
                    state.dormitorios.map( (value,index) => <Option key={index}>{ value }</Option>)
                }
            </Select>
            <Button onClick={()=> requestData()}>Buscar</Button>
            </SelectContainer>
            
        </FilterContainer>
        
    );
};


FilterComponent.propTypes = {

};


export default FilterComponent;
