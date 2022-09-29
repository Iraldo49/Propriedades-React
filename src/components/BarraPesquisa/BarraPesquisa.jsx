import React from 'react'
import logo from './logo.png'
import { BiSearchAlt2 } from 'react-icons/bi';
import Styles from './Pesquisa.module.css'


function BarraPesquisa({buscarLocalizacao}){
    return(
        <div className={Styles.Navibar}>
            <img src={logo} alt={'logo'} id={Styles.logo}/>
           <div className={Styles.Pesquisa}>
               <input placeholder={'localizações'} id={Styles.input}/>
               <button id={Styles.btn} 
               onClick={()=>buscarLocalizacao(document.getElementById(Styles.input).value)}>
                <BiSearchAlt2 width='17.5px' height='17.5px'/></button>
           </div>
        </div>
    )
}

function buscar(entrada){
    console.log(entrada);
}

export default BarraPesquisa;