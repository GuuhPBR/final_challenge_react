import React from 'react';
import Atividade from './Atividade.js';
import home_melhoria from '../img/home_melhoria.jpg';
import { Title, SubTitleVi, SubTitleV, SubTitleL, BoxDiv, ContDiv  } from './styles';

function Home() {
    return ( 
        <ContDiv>
            <BoxDiv>
                <Title>
                    Bem Vindos
                </Title>
                <SubTitleV>
                    Pratique habítos saudáveis.
                </SubTitleV>
                <SubTitleVi>
                    Melhore sua qualidade de vida.
                </SubTitleVi>
                <SubTitleL>
                    Seu corpo e sua mente agradeçem.
                </SubTitleL>
                <Atividade imagem={home_melhoria} ></Atividade> 
            </BoxDiv>
        </ContDiv>    
     );
}

export default Home;