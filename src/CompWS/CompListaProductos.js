import React, { Component } from 'react';
import { isElementOfType } from 'react-dom/test-utils';
//import datajsonListaProductos from '../DataJson/dataJsonListaProductos.json';
import { getProductosPorCategorias } from '../Servicios/ProductoServices';


class CompListaProductos extends Component {
    constructor(props) {
        super(props)
        this.state = { productos: [], isloaded: false, idcat: props.idcat }

    }

    async componentDidMount() {
        const responseJson = await getProductosPorCategorias(this.props.idcat);
        this.setState({ productos: responseJson, isloaded: true });
    }


    async componentDidUpdate()
    {
        if(this.state.idcat!=this.props.idcat)
        {
            //consumir el servicio
            const responseJson = await getProductosPorCategorias(this.props.idcat);
            //actualizar las variables de estado
            this.setState({ productos: responseJson, isloaded: true,idcat:this.props.idcat });
        }
    }

    render() {

        if (!this.state.isloaded) {
            return <div>CArgando...</div>
        }
        else {

            

            return <div className='col-9 row'>
                {
                    this.state.productos.map(
                        (prod, index) => {
                            var dirimage = "../imagenes/nophoto.png";
                            //var keyimg ="img"+prod.id;
                            if (prod.url != null) dirimage = "../imagenes/" + prod.url;
                            return <div className='col-sm-6 col-lg-4'>
                                <div className='card h-100'>
                                    <a href="#">
                                        <img src={dirimage} className="card-img-top" alt="..." key={`img${prod.id}`} />
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
    }




}

export default CompListaProductos;