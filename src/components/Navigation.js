import React from 'react';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { BiMovie, BiHomeAlt, BiSwim, BiQuestionMark, BiExit } from 'react-icons/bi';
import { MainContent, ContainerContent, Title, SubTitleVi, SubTitleV, SubTitleL, BoxCenter, Lista, ItemLista  } from './styles';

function Navigation() {
    const history = useHistory();

    function logOut(event){
        event.preventDefault();
        history.push("/");
    }

    return ( 
        <div>
            <nav>
                <Lista>
                    <ItemLista>
                        <Link className="link_to" to="/Home">Home <BiHomeAlt/> </Link>
                    </ItemLista>
                    <ItemLista> 
                        <Link className="link_to" to="/Filme">Filmes <BiMovie/></Link>
                    </ItemLista>
                    <ItemLista> 
                        <Link className="link_to" to="/Exercicio">Exercícios <BiSwim/></Link>
                    </ItemLista>
                    <ItemLista> 
                        <Link className="link_to" to="/Sobre">Sobre <BiQuestionMark/></Link>
                    </ItemLista>
                    <ItemLista> 
                        <a href="#" onClick={logOut}> Sair <BiExit/></a>
                    </ItemLista>
                </Lista>
            </nav>
        </div>
     );
}

export default Navigation;