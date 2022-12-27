import React ,{Component} from 'react';

export default class EjemploEstado extends Component
{
    constructor()
    { super()
        this.state={mensaje:"Bienvenido a React",contador:0 };
       
    }

    incrementarcontador()
    {
            alert(this.state.mensaje) ;    
            console.log("Contador",this.state.contador);  
            this.setState({mensaje:"Ejecutó acción",contador:this.state.contador+1});
    }


    render()
    {
        const mensaje2="xyz";
        let mensaje3="errr";
        var mensaje4="abc";
        

            return <div>
                <h1>{this.state.mensaje}</h1>
                <h3>{this.state.contador}</h3>
                <button onClick={()=>this.incrementarcontador()}>Incrementar</button>

                <h3>mensaje 2 = {mensaje2}</h3>
            </div>

            {mensaje2="Valor de prueba    333333 "}
    }

}


//export default EjemploEstado;