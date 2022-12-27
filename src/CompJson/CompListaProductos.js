import React from 'react';
import datajsonListaProductos from '../DataJson/dataJsonListaProductos.json';


const CompListaProductos = (props) => {

    const lstproductos = datajsonListaProductos.filter(x => x.idCategoria.toString() === props.idcat.toString());

    return <div className='col-9 row'>
        {
            lstproductos.map(
                (prod, index) => {
                    var dirimage = "../imagenes/nophoto.png";
                    //var keyimg ="img"+prod.id;
                    if (prod.url != null) dirimage = "../imagenes/" + prod.url;
                    return <div className='col-sm-6 col-lg-4'>
                        <div className='card h-100'>
                            <a href="#">
                                <img src={dirimage} className="card-img-top" alt="..." key={`img${prod.id}`}/>
                                <div className='card-body'>
                                    <a className='text-primary' href="#" key={`adr${prod.id}`}>
                                    <h5 className='card-title'>{prod.nombre} </h5>
                                    </a> 
                                    <p className='card-text'>{prod.descripcion}</p>
                                    <p className='h4 text-primary'>S/ {prod.precio.toString()}</p>
                                </div>
                            </a>
                        </div>

                    </div>


                }
            )
        }

    </div>


}

export default CompListaProductos;