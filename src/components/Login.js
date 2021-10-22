import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { Title, ContainerLoginBack, ContainerLogin, BoxLeft, BoxRight, TextCenter, TextCenterP  } from './styles';

function Login() {
    const history = useHistory();
    
    function fazerLogin(event){
        event.preventDefault();
        history.push("/home");
    }

    return ( 
        <ContainerLoginBack>
            <ContainerLogin>
                <BoxLeft></BoxLeft>
                <BoxRight>
                    <Title>
                        seja bem vindo
                    </Title>
                    <form onSubmit={fazerLogin}>
                        <TextCenter>
                            <label for="idTxtNome">Nome:</label>
                            <br/> 
                            <input type="text" name="txtNome" id="idTxtNome" placeholder="Nome"/>
                        </TextCenter>           
                        <TextCenter>
                            <label for="idTxtSenha">Senha:</label>
                            <br/>
                            <input type="password" name="txtSenha" id="idTxtSenha" placeholder="Senha"/> 
                        </TextCenter>
                        <TextCenter>
                            <input class="button" type="submit" value="Enviar"/>
                        </TextCenter>
                        <TextCenterP>
                            Não tem cadastro? 
                            <Link to="/Registro">Registre-se</Link>
                        </TextCenterP>
                    </form>
                </BoxRight>
            </ContainerLogin>    
        </ContainerLoginBack>
     );
}

export default Login;