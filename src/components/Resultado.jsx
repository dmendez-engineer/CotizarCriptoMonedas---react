import React from 'react'
import { useEffect, useState } from 'react'
import styled from '@emotion/styled'

const Result=styled.div
`
color:#FFF;
font-family: 'Lato',sans-serif;
display: flex;
align-items: center;
gap:1rem;
margin-top: 30px;


`
const Texto=styled.p
`
font-size: 18px;
span{
    font-weight: 700;
}

`
const Precio=styled.p
`
font-size: 24px;
span{
    font-weight: 700;
}
`
const Imagen=styled.img
`
display: block;
width: 150px;
`
const Resultado = ({resultado}) => {
  
    const {PRICE,HIGHDAY,LOWDAY,CHANGEPCT24HOUR,IMAGEURL,LASTUPDATE}=resultado;
    

    useEffect(()=>{
            
        if(Object.keys(resultado).length>0){
            console.log("Resultado desde Resultado",resultado);
        }
        
        
    },[resultado]);

  
    return (
    <Result>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`}/>
        <div>
            <Precio>El precio es de : <span>{PRICE}</span></Precio>
            <Texto>El precio mas alto : <span>{HIGHDAY}</span></Texto>
            <Texto>El precio mas bajo: <span>{LOWDAY}</span></Texto>
            <Texto>Variacion : <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Ultima actualizacion : <span>{LASTUPDATE}</span></Texto>
        </div>
        

    
    </Result>
  )
}

export default Resultado