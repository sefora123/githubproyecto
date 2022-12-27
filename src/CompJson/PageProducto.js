import React, { Component } from 'react';
import CompCabecera from './CompCabecera';
import CompListaCategoria from './CompListaCategoria';
import CompPiePagina from './CompPiePagina';
import CompProductoDetalle from './CompProductoDetalle';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import CompListaProductos from './CompListaProductos';
import CompPagePedidoDetalle from './CompPagePedidoDetalle';



class PageProducto extends Component {
    //Este es el componente Page Producto
    render() {
        return <div>
            <Router>
                <CompCabecera />
                <main role="main" className='container'>
                    <Routes>
                        <Route path="/productos/:idcat" element={<Productos/>}/>
                        <Route path="/pedidos" element={<Pedidos/>}/>
                        <Route path="/contactos" element={<Contacto/>}/>
                        <Route path="/" element={<Home/>}/>

                    </Routes>

                </main>
                <CompPiePagina />
            </Router>
        </div>
    }
}

export default PageProducto;

function Productos() {

    const {idcat} =useParams();
    alert(idcat);
    return <div className='row'>
        <CompListaCategoria />
        <CompListaProductos idcat={idcat}/>
    </div>
}

function Pedidos()
{
    
return <div><CompPagePedidoDetalle/> </div>

}

function Contacto()
{
    return <div>Para cualquier pregunta o consulta de los proudctos puede comunicarse a la central telfónica 999-999-666</div>
}

function Home()
{
    return <div>Aquí va el contenido de la página principal</div>
}