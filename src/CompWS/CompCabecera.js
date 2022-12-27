import React, { Component } from "react";
import {Link} from 'react-router-dom';
import {BiHomeSmile,BiCartAlt} from 'react-icons/bi';
import {GiClothes} from 'react-icons/gi';
import {GoMegaphone} from 'react-icons/go';







class CompCabecera extends Component {
    render() {
        return <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4"   >
            <div className="container">
                <span className="float-left">
                    <a className="navbar-brand" href="#">
                        <img src="/imagenes/Logo.png" width="200" height="65" alt="Tienda Virtual" />
                    </a>
                </span>

               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarExample09" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                <div    className="collapse navbar-collapse  text-center" id="navbarExample09">
                    <ul className="navbar-nav m-lg-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/"><h4><BiHomeSmile/></h4>
                                Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/productos/0"> <h4><GiClothes/></h4>
                                Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pedidos"><h4><BiCartAlt/></h4> Pedidos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contactos"><h4><GoMegaphone/></h4>
                                Contactos</Link>
                        </li>
                    </ul>

                </div>

                <span className="float-right">
                    <div className="collapse navbar-collapse" id="navbarText">
                        <img src="/imagenes/carrito.png" width="32" height="32" alt="" />
                        <a className="text-danger" href="#">&nbsp;3 producto(s)</a>
                    </div>
                </span>

            </div>
        </nav>
        
    }

}

export default CompCabecera;