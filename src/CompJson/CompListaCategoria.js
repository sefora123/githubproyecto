import React, { Component } from 'react';
import dataJsonListaCategorias from '../DataJson/dataJsonListaCategorias.json';
import {Link} from 'react-router-dom';

class CompListaCategoria extends Component {

    render() {
        return <div className='col-3'>
            <p className='h5 text-secondary'>Categorías</p>
            <div className='card'>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <a className='text-secondary' href='#'>DESTACADOS</a>
                    </li>
                    {dataJsonListaCategorias.map(
                        (categoria, indice) => {
                            var url = "/productos/" + categoria.id;
                            return <li className='list-group-item' key={categoria.id}>
                                <Link className='text-secondary' to={url}  >{categoria.nombre}</Link>
                            </li>
                        }
                    )
                    }

                </ul>
            </div>

        </div>

    }

}

export default CompListaCategoria;