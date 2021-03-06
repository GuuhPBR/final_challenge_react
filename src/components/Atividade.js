import React from 'react';
import styled from "styled-components";

const AtividadeEstilo = styled.div`
    height: auto;
`;

const Imagem = styled.img`
    height: auto;
    width: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto
`;

function Atividade(props) {
    return ( 
        <AtividadeEstilo>
            <Imagem src={props.imagem} />
            <div>
                {props.descricao}
            </div>
        </AtividadeEstilo>  
     );
}

export default Atividade;