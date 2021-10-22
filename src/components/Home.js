import React from 'react';
import Atividade from './Atividade.js';
import Navigation from './Navigation.js';
import home_melhoria from '../img/home_melhoria.jpg';
import { MainContent, ContainerContent, Title, SubTitleVi, SubTitleV, SubTitleL, BoxCenter  } from './styles';

function Home() {
    return ( 
        <MainContent>
            <ContainerContent>
                <Navigation/>
                <BoxCenter>
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
                </BoxCenter>
            </ContainerContent>
        </MainContent>
     );
}

export default Home;