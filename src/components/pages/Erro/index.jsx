import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Erro extends Component{
    render(){
        return(
            <div>
              <h2>Ops! Página não encontrada...</h2>
              <h3>Você está procurando por:</h3>
              <Link to="/">Ir para Home</Link>
              <Link to="/sobre">Ir para Sobre</Link>
            </div>
        );
    }
}
export default Erro;