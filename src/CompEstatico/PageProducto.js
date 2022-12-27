import React, { Component } from 'react';
import CompCabecera from './CompCabecera';
import CompListaCategoria from './CompListaCategoria';
import CompPiePagina from './CompPiePagina';
import CompProductoDetalle from './CompProductoDetalle';

class PageProducto extends Component {
    //Este es el componente Page Producto
    render() {
        return <div>

            <CompCabecera />
            <main role="main" className='container'>
                <div className='row'>
                    <CompListaCategoria />
                    <CompProductoDetalle />
                </div>
            </main>
            <CompPiePagina />
        </div>
    }
}

export default PageProducto;