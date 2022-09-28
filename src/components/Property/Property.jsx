import React from 'react'
import { GrStar } from 'react-icons/gr';
import './Style.css'

function Cartao({imagem,tipo,titulo,pontuacao}){
    return(
        <div className={'cartao'}>
            <img src={imagem} alt={'imagem'} className={'apartamento-imagem'}/>
            <div className={'estrelinha-pontuacao-titulo'}>
                <small className={'tipo-cartao'}>{tipo}</small>
                <div className={'estrelinha-pontuacao'}>
                    <GrStar/>
                    <p className={'pontuacao-cartao'}>{pontuacao}</p>
                </div>

            </div>
            <p className={'titulo-cartao'}>{titulo}</p>
        </div>

    )
}
export default Cartao;