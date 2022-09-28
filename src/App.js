import React from 'react'
import Cabeçalho from './components/BarraPesquisa/BarraPesquisa'
import Cartao from './components/Property/Property'
import dados from './stays.js';
import {useState} from 'react';
function App(){
    const [localizacao, definirLocalizacao] = useState("");

    const [cartoesAtuais, definirCartoes] = useState(
        dados.map((cartao,index)=>{
            return <Cartao key={index}  imagem={cartao.photo} titulo={cartao.title}
                           tipo={cartao.type} pontuacao={cartao.rating}/>

        })
    )

    function buscar(input){
        definirLocalizacao(input);
        definirCartoes(
                dados.filter((cartao)=>{
                return cartao.city.toLocaleLowerCase() === input.toLocaleLowerCase();
            }).map((cartao,index)=>{
                return <Cartao key={index}  imagem={cartao.photo} titulo={cartao.title}
                               tipo={cartao.type} pontuacao={cartao.rating}/>

            })

        )
    }
    return(

        <>
        <Cabeçalho buscarLocalizacao={buscar}/>
            <h2 className={'localizacao'}>{localizacao}</h2>
         <div className={'painel-resultados'}>
             {cartoesAtuais}

         </div>

        </>
    )
}

export default App;