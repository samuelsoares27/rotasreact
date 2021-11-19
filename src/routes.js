import { BrowserRouter, Route, Switch  } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Sobre from './Pages/Sobre/Sobre'
import Contato from './Pages/Contato/Contato'
import Header from './Pages/Components/Header/Header'
import Erro from './Pages/Erro/Erro'
import Produto from './Pages/Produto/Produto'

const Routes = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/sobre" component={Sobre}/>
                <Route exact path="/contato" component={Contato} />
                <Route path="/produto/:id/:nome" component={Produto} />
                <Route path="*" component={Erro}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;