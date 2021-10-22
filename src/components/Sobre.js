import React from 'react';
import { Title, BoxDiv, ContDiv  } from './styles';

function Sobre() {
    return ( 
        <ContDiv>   
            <BoxDiv>        
                <Title>
                    Sobre nós
                </Title>
                <Title>
                    Atualmente vivemos uma das piores fases do século XXI, na qual o novo coronavírus se disseminou pelo mundo inteiro. Tal pandemia, além de causar uma série de óbitos e internações em massa, nos colocou em uma situação muito delicada em vários quesitos. Da qual, ademais de nos afetar na questão da saúde física, nos afeta psicologicamente. De acordo com pesquisadores, só no ano de 2020, 80% da população ficou mais ansiosa.
                    Assim sendo, a empresa International Business Machines Corporation(IBM) surgiu com o desafio de criar uma tecnologia que melhore o cenário atual da população brasileira em relação à ansiedade. E nós alunos da FIAP, após analisarmos tal mal-estar físico e psíquico enfrentado pela população brasileira, constatamos que esse distúrbio provém de diversas causas, incluindo solidão e falta de ocupação gerada pela quarentena.
                    À vista disso, dispusemos da idéia de desenvolver um software, que através de entretenimentos disponibilizados, amenize e possivelmente até elimine essa solitude e escassez de afazeres. Começaremos oferecendo ao nosso público, diversas músicas e aulas de exercícios físicos, a fim de distraí-los e beneficiá-los. Nosso grupo-alvo é das pessoas entre 18 e 50 anos de idade, pois atualmente, são pessoas dessas idades que estão sendo mais afetadas pelo transtorno psicológico. Porém, todo e qualquer usuário, de qualquer idade, terão acesso aos conteúdos disponibilizados na plataforma.
                </Title>                       
            </BoxDiv>    
        </ContDiv>
     );
}

export default Sobre;