import React, { Component } from 'react';

class CompPedidoDetalleItem extends Component{

    render()
    {
        return <tr>
            <th scope='row' >{this.props.pIndice+1}</th>
            <td className='text-center'>{this.props.pItem.producto.nombre}</td>
            <td>{this.props.pItem.producto.marca.nombre}</td>
            <td className='text-end'>{this.props.pItem.precioUnitario}</td>
            <td className='text-end'>{this.props.pItem.cantidad}</td>
            <td className='text-end'>{this.props.pItem.subTotal}</td>

        </tr>
    }
}

export default CompPedidoDetalleItem;