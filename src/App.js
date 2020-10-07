import React, { Component } from 'react';
import './App.css';
import Buscador from './components/Buscador.js';
import Resultado from './components/Resultado.js';

class App extends Component{

  state = {
    termino: "",
    imagenes: []
  }
  
  consultarApi = () => {
    const url = `https://pixabay.com/api/?key=17903545-f909876c376874eb3ff689de1&q=${this.state.termino}`;

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({imagenes : resultado.hits}));
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino
    }, () => {
      this.consultarApi();
    })
  }

  render(){
    return (
      <div className="App">
        <div className="buscador">
          <h1>Buscador de Imágenes</h1>
          <Buscador 
            datosBusqueda={this.datosBusqueda}
          />
        </div>
        <Resultado 
          imagenes = {this.state.imagenes}
        />
      </div>
    );
  }
}

export default App;
