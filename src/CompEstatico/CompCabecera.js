import React, { Component } from "react";


class CompCabecera extends Component {
    render() {
        return <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4"   >
            <div className="container">
                <span className="float-left">
                    <a className="navbar-brand" href="#">
                        <img src="imagenes/Logo.png" width="225" height="55" alt="Tienda Virtual" />
                    </a>
                </span>
                <span className="float-right">
                    <div className="collapse navbar-collapse" id="navbarText">
                        <img src="imagenes/carrito.png" width="32" height="32" alt="" />
                        <a className="text-danger" href="#">&nbsp;3 producto(s)</a>
                    </div>
                </span>

            </div>
        </nav>
        
    }

}

export default CompCabecera;