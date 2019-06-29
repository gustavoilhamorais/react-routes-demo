import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/pages/Home';
import Sobre from './components/pages/Sobre';
import Header from './components/Header';
import Erro from './components/pages/Erro';
import Produto from './components/pages/Produto';


const Routes = () => {
  return(
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/sobre" component={Sobre} />
          <Route path="/produto/:id" component={Produto} />
          <Route path="*" component={Erro} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;