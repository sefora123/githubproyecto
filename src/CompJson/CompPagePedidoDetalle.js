import React, { Component } from 'react';
import dataJsonPedido from '../DataJson/dataJsonPedido.json';
import dataJsonListaDetallePedido from '../DataJson/dataJsonListaDetallePedido.json';
import CompPedidoDetalle from './CompPedidoDetalle';


class CompPagePedidoDetalle extends Component {
    constructor() {
        super();
        this.state = { mipedido: dataJsonPedido, mipedidodetalle: dataJsonListaDetallePedido };
    }

    render() {

        //alert("llega aqui");
       return <div><CompPedidoDetalle pPedido={this.state.mipedido} pPedidoDetalle={this.state.mipedidodetalle}  /></div>
     
    }


}

export default CompPagePedidoDetalle;