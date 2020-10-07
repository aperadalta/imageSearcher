import React, { Component } from 'react';


class Buscador extends Component {

    busquedaRef = React.createRef();

    obtenerDatos = (e) => {
        e.preventDefault();

        const termino = this.busquedaRef.current.value;

        this.props.datosBusqueda(termino);
    }

    render() {
        return (
            <form onSubmit={this.obtenerDatos} >
                <div>
                    <input ref={this.busquedaRef} type="text" className ="input" placeholder="Busca tu imagen..."  />
                </div>
                <div>
                    <input type="submit" className ="button" value="Buscar"/>
                </div>
            </form>
        );
    }
}

export default Buscador;