import React, { Component } from 'react';
import CompPedidoDetalleItem from './CompPedidoDetalleItem';

class CompPedidoDetalle extends Component {
 constructor(props)
 {
    super(props)
 }

    render() {
        return <div className='col-9'>
            <p className='h5 text-secondary'>Pedido</p>
            <div className='card border-primary'>
                <div className='card-header bg-transparent border-secondary h4 text-primary'>
                    <span style={{float:"left"}}>Número : {this.props.pPedido.id}</span>
                    <span style={{float:"right"}}>Total S/ : {this.props.pPedido.total}</span>
                </div>
                <div className='card-body text-secondary'>
                    <h5 className='card-title'>Productos</h5>
                    <table className='table'>
                        <thead className='thead-light'>
                            <tr>
                                <th scope='col' className='text-center'>#</th>
                                <th scope='col' className='text-center'>Producto</th>
                                <th scope='col' className='text-center'>Marca</th>
                                <th scope='col' className='text-center'>Precio</th>
                                <th scope='col' className='text-center'>Cantidad</th>
                                <th scope='col' className='text-center'>Sub Total</th>
                            </tr>
                        </thead>
                        {
                            this.props.pPedidoDetalle.map( (item,indice) =>{
                                return <CompPedidoDetalleItem pItem={item} pIndice={indice} key ={indice} />
                            }

                            )
                            
                        }

                    </table>
                </div>
            </div>
        </div>
    }

}

export default CompPedidoDetalle;