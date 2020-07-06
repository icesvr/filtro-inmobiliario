import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MainComponent = styled.div`
    font-family: 'Muli';
    display: flex;
    width: 90%;
    height: 150px;
    margin: 10px auto;
    background: #ffffff;
    overflow:hidden;
    cursor:pointer;
    box-shadow: 0px 0px 50px 1px rgba(0,0,0,1);
    border-radius: 10px 10px 10px 10px;
    -moz-border-radius: 10px 10px 10px 10px;
    -webkit-border-radius: 10px 10px 10px 10px; 
    -webkit-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.32);
    img{
        
        height: 100%;
        object-fit: cover;
       
        
    }
    .info{
        margin-top:-20px;
        font-size: 12px;
        opacity: 0.8;
    }
    .description{
        margin-top: 30px;
        font-size: 14px;
    }

`
const DetailComponent = styled.div`
    margin: 0px 15px;
    width:80%;

`


const CardComponent = ({precio,info,direccion}) => {

    const goScrapping = () => {
        console.log("Precio: ", precio);
    }

    return (

        <MainComponent onClick={()=>goScrapping()}>
            <img  src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png"/>
            <DetailComponent>
                <h3><strong>{precio}</strong></h3>
                <p className="info">{info}</p>
                <p className="description">{direccion}</p>
            </DetailComponent>
        </MainComponent>
        
    );
};


CardComponent.propTypes = {

};


export default CardComponent;
