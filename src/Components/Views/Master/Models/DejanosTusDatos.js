import React, {Component} from "react";
import SimpleReactValidator from 'simple-react-validator';
import axios from "axios";
import "../../../../Assets/css/Login.css";
// import DatosDelAuto from "./DatosDelAuto";
// import { NavLink, Route } from 'react-router-dom';
class DejanosTusDatos extends Component{

    dniRef = React.createRef();
    celularRef = React.createRef();
    placaRef = React.createRef();

    state={
        datos:{
        },
        campos:{
            dni: "",
            celular: "",
            placa: ""
        },
        verModulo : Boolean,
        envioData: {}
    };

    datosGenerales = ()=>{
        var envio = {
            envioData:{
                datos : this.state.datos,
                campos: {
                    dni: this.state.campos.dni,
                    celular : this.state.campos.celular,
                    placa: this.state.campos.placa
                },
                verModulo: false
            }
        }
        this.props.funcionDatos(envio);
    }

    componentWillMount(){
        this.getApi();
        this.validator = new SimpleReactValidator({
            // autoForceUpdate: this,
            messages: {
                required: 'Este campo es requerido',
            }
        });
    }

    getApi = () => {
        axios.get("https://randomuser.me/api/").then((res) => {
            var modelo = {
                datos:{
                    resultado: res.data.results[0]
                },
            }
            this.setState({
                datos : modelo,
            });
        }).catch((error)=>{
            console.log(error);
        });
    };

    validacionFormulario = (e) => {
        e.preventDefault(); 
        let dni = this.dniRef.current.value;
        let celular = this.celularRef.current.value;
        let placa = this.placaRef.current.value;

        this.setState({
            campos : {
                dni: dni,
                celular: celular,
                placa: placa
            }
        });
    }

    envioDatos = (e) =>{
        if(this.validator.allValid()){
            this.datosGenerales();
            // this.props.funcionDatos(this.state.envioData);
        }else{
            this.validator.showMessages();
            this.forceUpdate();
        }
    }
    // envioDatos(){
    //     this.validacionFormulario();

    //         // this.props.funcionDatos(this.state.datos);
    // }

    render(){
        // var campoDni = this.state.campos.dni;
        return(
            <div className="form-signin">
            {/* <form className="form-signin" > */}
                <div className="form-label-group">
                    {/* <input type="text" id="inputDNI" className="form-control" placeholder="&nbsp;"  onChange={this.state.campos.dni}/> */}
                    <input id="inputDNI" name="DNI" className="form-control" ref={this.dniRef} onChange={this.validacionFormulario}   />
                    <label >DNI</label>
                    {this.validator.message('DNI', this.state.campos.dni, 'required')}
                </div>

                <div className="form-label-group">
                    <input type="text" id="inputCelular" className="form-control" ref={this.celularRef} placeholder="&nbsp;" onChange={this.validacionFormulario}/>
                    <label >Celular</label>
                    {this.validator.message('DNI', this.state.campos.celular, 'required')}
                </div>

                <div className="form-label-group">
                    <input type="text" id="inputPlaca" className="form-control" ref={this.placaRef} placeholder="&nbsp;" onChange={this.validacionFormulario}/>
                    <label >Placa</label>
                    {this.validator.message('DNI', this.state.campos.placa, 'required')}
                </div>

                <div className="checkbox mb-3">
                    <label>
                    <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-danger btn-block" 
                onClick={()=>this.envioDatos()} type="submit">COTÍZALO</button>
                <p className="mt-5 mb-3 text-muted text-center">© 2021</p>
            {/* </form> */}
            </div>
        );
    }
}
export default DejanosTusDatos;