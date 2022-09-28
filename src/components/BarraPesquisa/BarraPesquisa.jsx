import React from 'react'
import logo from './logo.png'
import { BiSearchAlt2 } from 'react-icons/bi';
import './Style.css'


function Cabeçalho({buscarLocalizacao}){
    return(
        <div className={'cabeçalho'}>
            <img src={logo} alt={'logo'} id={'logo'}/>
           <div className={'input-botao'}>
               <input placeholder={'localizações'} id={'input'}/>
               <button id={'botao'} onClick={()=>buscarLocalizacao(document.getElementById('input').value)}><BiSearchAlt2 width='17.5px' height='17.5px'/></button>
           </div>
        </div>
    )
}

function buscar(entrada){
    console.log(entrada);
}

export default Cabeçalho;