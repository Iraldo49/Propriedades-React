import React from 'react'
import Cabeçalho from './components/BarraPesquisa/BarraPesquisa'
import Card from './components/Property/Property'
import dados from './stays.js';
import {useState} from 'react';
import BarraPesquisa from './components/BarraPesquisa/BarraPesquisa';
import Styles from './Style.module.css'

function App(){
    const [localizacao, definirLocalizacao] = useState("");

    const [cardAtuais, definirCard] = useState(
        dados.map((card,index)=>{
            return <Card key={index}  imagem={card.photo} titulo={card.title}
                           tipo={card.type} pontuacao={card.rating}/>

        })
    )

    function buscar(input){
        definirLocalizacao(input);
        definirCard(
                dados.filter((card)=>{
                return card.city.toLocaleLowerCase() === input.toLocaleLowerCase();
            }).map((card,index)=>{
                return <Card key={index}  imagem={card.photo} titulo={card.title}
                               tipo={card.type} pontuacao={card.rating}/>

            })

        )
    }
    return(

        <>
        <BarraPesquisa buscarLocalizacao={buscar}/>
            <h2 className={Styles.localizacao}>{localizacao}</h2>
         <div className={Styles.View}>
             {cardAtuais}

         </div>

        </>
    )
}

export default App;