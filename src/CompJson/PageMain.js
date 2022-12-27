import React,{Component} from "react";
import {BrowserRouter as Router, Routes,Route,Link } from "react-router-dom";

class PageMain extends Component{
render(){
return <Router>

    <Link className="nav-link" to="/about">Acerca de</Link>
    <Link className="nav-link" to="/users">Usuarios</Link>

    <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/users" element={<Users/>} />
    </Routes>

</Router>

}
}
export default PageMain;

function About(){
    return <h2>Aquí va el contenido de la página Acerca de.....</h2>
}

function Users(){
    return <h4>Aquí va el contenido de la página de Usuarios.....</h4>
}