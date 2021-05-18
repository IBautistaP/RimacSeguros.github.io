import React,{Component} from "react";
import ArmaTuPLan from "./Models/ArmaTuPLan";
import DatosDelAuto from "./Models/DatosDelAuto";
import DejanosTusDatos  from "./Models/DejanosTusDatos";
class Master extends Component{
    state = {
        datosDelAutoObtenidos: {},
        verModulo : {
            verModuloDejanosTusDatos: true,
            verModuloDatosDelAuto : false,
            verModuloArmaTuPLan : false
        },
        placa: "",
        // marca: "",
        // anio: ""
        marca: {
            id: 0,
            value: ""
        },
        anio: {
            id: 0,
            value: ""
        }
    };

    funcionDejanosTusDatos = (event) => {
        // event.preventDefault();
        var datosObtenidos = event.envioData.datos.datos.resultado;
        var ModuloDejanosTusDatos = event.envioData.verModulo;
        var placa = event.envioData.campos.placa;
        this.setState({
            datosDelAutoObtenidos: datosObtenidos,
            verModulo: {
                verModuloDejanosTusDatos : ModuloDejanosTusDatos,
                verModuloDatosDelAuto : true
            },
            placa: placa
        });
    };

    funcionDatosDelAuto = (event) => {
        var ModuloDatosDelAuto = event;
        // var marca = event.marca;
        // var anio = event.anio;
        var anio = {
            id: event.anio.id,
            value: event.anio.value
        };
        var marca = {
            id: event.marca.id,
            value: event.marca.value
        };
        // console.log(event);
        if(ModuloDatosDelAuto.volver === true){
            this.setState({
                verModulo: {
                    verModuloDejanosTusDatos : true,
                    verModuloDatosDelAuto : false
                },
                // marca: marca,
                // anio: anio
                marca: {
                    id: marca.id,
                    value: marca.value 
                },
                anio: {
                    id: anio.id,
                    value: anio.value
                }
            });
        }
        if(ModuloDatosDelAuto.continuar === true){
            this.setState({
                verModulo: {
                    verModuloDejanosTusDatos : false,
                    verModuloArmaTuPLan : true
                },
                // marca: marca,
                // anio: anio
                marca: {
                    id: marca.id,
                    value: marca.value 
                },
                anio: {
                    id: anio.id,
                    value: anio.value
                }
            });
        }
    };

    funcionArmaTuPLan = (event) => {
        var ModuloArmaTuPLan = event;
        if(ModuloArmaTuPLan.volver === true){
            this.setState({
                verModulo: {
                    verModuloDatosDelAuto : true,
                    verModuloDejanosTusDatos : false
                }
            });
        }
    }

    render(){
        return(
            <React.Fragment>
                <div className="center">
                    {this.state.verModulo.verModuloDejanosTusDatos &&
                        <DejanosTusDatos
                            funcionDatos={this.funcionDejanosTusDatos}
                        >
                        </DejanosTusDatos>
                    }
                    {this.state.verModulo.verModuloDatosDelAuto &&
                        <DatosDelAuto 
                        marca = {this.state.marca}
                        anio = {this.state.anio}
                        nombre = {this.state.datosDelAutoObtenidos.name.first}
                        funcionDatos = {this.funcionDatosDelAuto}></DatosDelAuto>
                    }
                    {this.state.verModulo.verModuloArmaTuPLan &&
                        <ArmaTuPLan
                        placa = {this.state.placa}
                        marca = {this.state.marca}
                        anio = {this.state.anio}
                        funcionDatos = {this.funcionArmaTuPLan}></ArmaTuPLan>
                    }
                </div>
            </React.Fragment>
        );
    }
}
export default Master;