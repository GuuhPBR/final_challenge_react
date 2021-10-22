import React from 'react';
import Navigation from './Navigation.js';
import Atividade from './Atividade.js';
import toystory from '../img/toystory.jpg';
import bobesponja from '../img/bobesponja.jpg';
import monstro_sa from '../img/monstro_sa.jpg';
import turbo from '../img/turbo.jpg';
import alvin from '../img/alvin.jpg';
import { BoxCenter, ContainerContent, TextCenter, Title, MainContent  } from './styles';

function Filme() {
    return ( 
        <MainContent>
            <ContainerContent>
                <Navigation/>
                <BoxCenter>
                    <Title>Lista de filmes</Title>
                    <br/>
                    <TextCenter>
                        <h3>Alvin e os esquilos</h3>
                        <Atividade imagem={alvin} descricao= "Quando a árvore em que moram é derrubada e enviada para Los Angeles, os esquilos falantes Alvin, Simon e Theodore encontram um novo lar na casa do compositor Dave Seville (Antti Jaakola). Apesar de um início conturbado com a nova situação doméstica, Dave descobre que as criaturas travessas sabem cantar muito bem. Os esquilos assinam um contrato com uma gravadora e logo descobrem o preço da fama"></Atividade>
                    </TextCenter>
                    <br/>
                    <TextCenter>
                        <h3>Bob esponja - O incrivel resgate</h3>
                        <Atividade imagem={bobesponja} descricao="Onde está Gary? Segundo Bob Esponja, Gary foi caracolstrado pelo temível Rei Poseidon e levado para a cidade perdida de Atlantic City. Com a ajuda do Patrick, ele sai em uma missão de resgate ao querido amigo, e nesta jornada os dois conhecem novos personagens e vivem inimagináveis aventuras"></Atividade>    
                    </TextCenter>
                    <br/>
            
                    <TextCenter>
                        <h3>Monstro SA</h3>
                        <Atividade imagem={monstro_sa} descricao="A maior fábrica de monstros do mundo conta com James Sullivan, um dos monstros mais assustadores, que tem o pelo azul e chifres, além de seu assistente e melhor amigo Mike, um monstro verde de um olho só. Eles têm por missão assustar as crianças, que são consideradas tóxicas pelos monstros e cujo contato com eles seria catastrófico para seu mundo. Porém, ao visitar o mundo dos humanos a trabalho, Mike e Sully conhecem a garota Boo, que acaba sem querer indo parar no mundo dos monstros."></Atividade>
                    </TextCenter>
                    <br/>
                    <TextCenter>
                        <h3>Toy Story</h3>
                        <Atividade imagem={toystory} descricao="O aniversário do garoto Andy está chegando e seus brinquedos ficam nervosos, temendo que ele ganhe novos brinquedos que possam substituí-los. Liderados pelo caubói Woody, o brinquedo predileto de Andy, eles recebem Buzz Lightyear, o boneco de um patrulheiro espacial, que logo passa a receber mais atenção do garoto. Com ciúmes, Woody tenta ensiná-lo uma lição, mas Buzz cai pela janela. É o início da aventura do caubói, que precisa resgatar Buzz para limpar sua barra com os outros brinquedos."></Atividade>
                    </TextCenter>
                    <br/>
                    <TextCenter>
                        <h3>Turbo</h3>
                        <Atividade imagem={turbo} descricao="Um caracol tem a chance de escapar de sua vida em ritmo lento e participar da 500 Milhas de Indianápolis quando um estranho acidente lhe dá o poder da supervelocidade."></Atividade>          
                    </TextCenter>
                </BoxCenter>
            </ContainerContent>    
        </MainContent>
     );
}

export default Filme;