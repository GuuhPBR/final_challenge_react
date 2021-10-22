import React from 'react';
import Atividade from './Atividade.js';
import agachamento from '../img/agachamento.jpg';
import burpee from '../img/burpee.jpg';
import polichinelo from '../img/polichinelo.jpg';
import pulando_corda from '../img/pulando_corda.jpg';
import prancha from '../img/prancha.jpg';
import { BoxCenter, ContainerContent, TextCenter, Title } from './styles';

function Exercicio() {
    return ( 
        <ContainerContent>    
            <BoxCenter>
                <Title>Lista de Exercícios</Title>
                <br/>
                <TextCenter>
                    <h3>Prancha</h3>
                    <Atividade imagem={prancha} descricao= "Apoie os antebraços no chão, com os cotovelos na altura do ombro. Mantenha o quadril na altura da cabeça e mantenha-se firme nessa posição por um período de 20 a 30 segundos. Descanse por 30 a 60 segundos e repita por 3 vezes. Serve para fortalecer seu abdômen e pernas. "></Atividade>
                </TextCenter>
                <br/>
                <TextCenter>
                    <h3>Pular Corda</h3>
                    <Atividade imagem={pulando_corda} descricao= "Pule corda por aproximadamente 15 minutos e esse exercício aeróbico vai te ajudar a fortalecer os ossos e os membros inferiores. Pular Corda é um treino para o corpo inteiro." ></Atividade>
                </TextCenter>
                <br/>
                <TextCenter>
                    <h3>Burpee</h3>
                    <Atividade imagem={burpee} descricao= "Em pé e com as pernas afastadas na lateral do quadril, flexione os joelhos e agache. Em seguida apoie as mãos no chão e “jogue” os pés para trás, ficando em posição de flexão de braços. Volte e estenda o corpo, dando um salto para cima com as mãos estendidas acima da cabeça. Repita o exercício de forma contínua. Serve para os músculos do peitoral, ombro e tríceps." ></Atividade>
                </TextCenter>
                <br/>
                <TextCenter>
                    <h3>Polichinelo</h3>
                    <Atividade imagem={polichinelo} descricao= "Fique em pé, com as pernas unidas e os braços estendidos ao lado do corpo, dê um salto pra cima e ao mesmo tempo afaste os pés lateralmente batendo as mãos acima da cabeça. Serve para todos os grupos musculares e fortalece a saúde cardiovascular. " ></Atividade>
                </TextCenter>
                <br/>
                <TextCenter>
                    <h3>Agachamento com deslocamento lateral</h3>
                    <Atividade imagem={agachamento} descricao= "Fique de pé e com as pernas unidas, coloque as mãos na cintura. Dê um passo para o lado e estenda os braços para a frente. Contraia o abdome e agache até suas coxas ficarem paralelas ao chão. Volte a posição inicial e execute o movimento para o outro lado. Serve para as musculaturas e te ajuda a ter mais estabilidade nas articulações." ></Atividade>               
                </TextCenter>
            </BoxCenter>
        </ContainerContent>
     );
}

export default Exercicio;