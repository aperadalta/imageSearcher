import React, { Component } from 'react';
import Imagen from './Imagen.js';

class Resultado extends Component {

    mostrarImagenes = () => {

        const imagenes = this.props.imagenes;

        if(imagenes.length === 0) return null;

        return (
            <React.Fragment>
                <div className = "holder">
                    {imagenes.map(imagen =>(
                        <Imagen 
                            imagen={imagen}
                            key = {imagen.id}
                        />
                    ))}
                </div>
            </React.Fragment>
        )
    }


    render () {
        return (
            <React.Fragment>
                {this.mostrarImagenes()}
            </React.Fragment>
        );
    }
}

export default Resultado;