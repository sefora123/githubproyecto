import React, {Component} from 'react';

class CompListaCategoria extends Component{

    render(){
        return <div className='col-3'>
                <p className='h5 text-secondary'>Categorías</p>
                <div className='card'>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <a className='text-secondary' href='#'>Destacados</a>
                        </li>
                        <li className='list-group-item'>
                            <a className='text-secondary' href='#'>Ropa</a>
                        </li>
                        <li className='list-group-item'>
                            <a className='text-secondary' href='#'>Zapatillas</a>
                        </li>
                        <li className='list-group-item'>
                            <a className='text-secondary' href='#'>Accesorios</a>
                        </li>
                    </ul>
                </div>

        </div>

}

}

export default CompListaCategoria;