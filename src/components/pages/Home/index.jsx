import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component{
    render(){
        return(
            <div>
              <h2>Bem vindo à Homepage</h2>
              <Link to="/sobre">Ir para Sobre</Link>
            </div>
        );
    }
}
export default Home;