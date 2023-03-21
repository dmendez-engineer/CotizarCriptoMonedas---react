import {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../Hooks/useSelectMonedas'
import {monedas} from '../data/Monedas'
import Error from './Error'

const InputSubmit=styled.input
`
background-color: #9497FF;
margin-top:20px;
border:none;
width:100%;
padding:10px;
color:#FFF;
font-weight: 700;
text-transform: uppercase;
font-size: 20px;
border-radius: 5px;
transition:background-color .3s ease;
&:hover{
    background-color: #7A7DFE;
    cursor:pointer;
}
`

const Formulario = ({setMonedas}) => {

    const [cripto,setCripto]=useState([]);
    const[error,setError]=useState(false);

    const [moneda,SelectMonedas]=useSelectMonedas('Elige tu Moneda',monedas);
    const [monedaCritpto,SelectMonedasCripto]=useSelectMonedas('Elige tu Moneda Cripto',cripto);
  
    useEffect(()=>{
        const consultarAPI=async ()=>{
            const url="https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
            const respuesta=await fetch(url);
            const resultado=await respuesta.json();
            
            const arrayCripto=resultado.Data.map(cripto=>{
               
                const objeto={
                    id:cripto.CoinInfo.Name,
                    nombre:cripto.CoinInfo.FullName
                }
                return objeto;
            });
            setCripto(arrayCripto);
        }
        consultarAPI();

        

    },[]);
    
    const handleSubmit=function(e){
        e.preventDefault();
        
        if([moneda,monedaCritpto].includes('')){
            setError(true);
            return;
        }
        setMonedas({
            moneda:moneda,
            monedaCritpto:monedaCritpto
        });

        console.log("Formulario enviado");
        setError(false);

    }

    return (
    
    <div>
        {error && <Error>Todos los campos son obligatorios</Error>
       //<Error mensaje={'Todos los campos son obligatorios'}/>    
    }
        <form 
        onSubmit={handleSubmit}
        >
            <SelectMonedas/>
            <SelectMonedasCripto/>
            <InputSubmit 
            type="submit" 
            value="Cotizar"
            />
        </form>
    </div>
  )
}

export default Formulario