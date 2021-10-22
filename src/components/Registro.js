import React from 'react';
import { useHistory } from "react-router-dom";
import { Title, ContainerLoginBack, ContainerLogin, BoxLeft, BoxRight, TextCenter } from './styles';

function Registro() {
    const history = useHistory();
    
    function criarCadastro(event){
        event.preventDefault();
        history.push("/");
    }

    return ( 
        <ContainerLoginBack>
            <ContainerLogin>
                <BoxLeft></BoxLeft>
                <BoxRight>

                    <Title>
                        Cadastra-se
                    </Title>
                    <form onSubmit={criarCadastro}>
                        <TextCenter>
                            <label for="idTxtNome">Nome:</label>
                            <br/> 
                            <input type="text" name="txtNome" id="idTxtNome"  placeholder="Nome"/>
                        </TextCenter>
                        <TextCenter>
                            <label for="idTxtEmail">Email:</label>
                            <br/>
                            <input type="text" name="txtEmail" id="idTxtEmail" placeholder="Email"></input> 
                        </TextCenter>
                        <TextCenter>
                            <label for="idTxtSenha">Senha:</label>
                            <br/>
                            <input type="password" name="txtSenha" id="idTxtSenha" placeholder="Senha"/> 
                        </TextCenter>
                        <TextCenter>
                            <label for="idSelgen">Gênero</label>
                            <br/>
                            <select name="selgen" id="idSelgen">
                                <option value="M">Masculino</option>
                                <option value="F">Feminino</option>
                                <option value="0">Outros</option>
                                <option value="0" selected="select">Selecione uma opção</option>
                            </select>
                        </TextCenter>
                        <TextCenter>
                            <input class="btn btn-primary" type="submit" value="Criar seu cadastro"></input>
                        </TextCenter>
                    </form>                   
                </BoxRight>
            </ContainerLogin>    
        </ContainerLoginBack>
     );
}

export default Registro;