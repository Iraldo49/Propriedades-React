import React from 'react'
import { GrStar } from 'react-icons/gr';
import Styles from './Property.module.css'

function Property({imagem,tipo,titulo,pontuacao}){
    return(
        <div className={Styles.Card}>
            <img src={imagem} alt={'imagem'} className={Styles.propertyCard}/>
            <div className={Styles.estrelaTitulo}>
                <small className={Styles.typeCard}>{tipo}</small>
                <div className={Styles.estrela}>
                    <GrStar/>
                    <p className={Styles.pontuacaoCard}>{pontuacao}</p>
                </div>

            </div>
            <p className={Styles.tituloCard}>{titulo}</p>
        </div>

    )
}
export default Property;