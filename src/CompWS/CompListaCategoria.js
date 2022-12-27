import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

const CompListaCategoria = () => {

    const [error, setError] = useState(null);
    const [isloaded, setIsLoaded] = useState(false);
    const [categorias, setCategorias] = useState([]);

    const baseUrl = "http://localhost:51012/api/Categorias"

    useEffect(() => {
        fetch(baseUrl).then(res => res.json())
            .then((data) => {
                setIsLoaded(true);
                setCategorias(data);
            },
                (error) => {
                    setIsLoaded(false);
                    setError(error);

                })
    }
        , []
        //si los corchetes estas vacios se ejecuta solo una vez durante la fase de carga
    );

console.log(categorias);

    if (error) {
        return <div>Error: {error.message}</div>
    }
    else if (!isloaded) {
        return <div>Cargando...</div>

    }
    else {

        return <div className='col-3'>
            <p className='h5 text-secondary'>Categorías</p>
            <div className='card'>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <a className='text-secondary' href='#'>DESTACADOS</a>
                    </li>
                    {categorias.map(
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