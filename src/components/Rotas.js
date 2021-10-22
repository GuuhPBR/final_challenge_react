import react from 'react'
import { 
    Home,
    Exercicio,
    Filme,
    Login,
    Sobre,
    Registro,
    Atividade,
    Pagina404,
} from '.'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function Rotas() {
    return (
        <Router>
            <Switch>   
                <Route exact path='/'>
                    <Login/>
                </Route>
                <Route  path='/Registro'>
                    <Registro/>
                </Route>
                <Route  path='/Home'>
                    <Home/>
                </Route>
                <Route path='/Filme'>
                    <Filme/>
                </Route>
                <Route path='/Exercicio'>
                    <Exercicio/>
                </Route>
                <Route path='/Sobre'>
                    <Sobre/>
                </Route>
                <Route>
                    <Pagina404/>
                </Route>               
            </Switch>
        </Router> 
     );
} 

export default Rotas;
