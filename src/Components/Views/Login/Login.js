import React, {Component} from "react";
//Modules
import Registro from "./Models/Registro";
class Login extends Component{
    render(){
        return(
            <div>
                <h1>Déjanos tus datos</h1>
                <Registro></Registro>
            </div>
        );
    }
}
export default Login;