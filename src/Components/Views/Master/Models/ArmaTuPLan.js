import React, {Component} from "react";
class ArmaTuPLan extends Component{
    // state={
    // };
    volver(){
        var opcionVolver = {
                volver : true
        }
        this.props.funcionDatos(opcionVolver)
    };
//---- Monto de Pago --- //
    state={
        montoBase : 20,
        roboParcial : 15,
        choqueOAccidente : 20,
        perdidaTotalPorAccidenteDeTransito : 50,
        boton:{
            LlantaRobada: true,
            ChoqueOPasarseLaLuzRoja: true,
            AtropelloEnlaViaEvitamiento: true
        }
    };

    montoPago( {ValorLlantaRobada = 0, valorChoqueOPasarseLaLuzRoja = 0, valorAtropelloEnlaViaEvitamiento = 0}){
        var montoBase = this.state.montoBase;
        montoBase = montoBase + ValorLlantaRobada + valorChoqueOPasarseLaLuzRoja + valorAtropelloEnlaViaEvitamiento;
        this.setState({
            montoBase : montoBase
        });
    }

    verBotones({verLlantaRobada = true, verChoqueOPasarseLaLuzRoja = true, verAtropelloEnlaViaEvitamiento = true}){
        this.setState({
            boton:{
                LlantaRobada: verLlantaRobada,
                ChoqueOPasarseLaLuzRoja: verChoqueOPasarseLaLuzRoja,
                AtropelloEnlaViaEvitamiento: verAtropelloEnlaViaEvitamiento
            }
        });

    }

    botonLlantaRobada(e){
        if(e === true ){
            this.montoPago({
                ValorLlantaRobada : this.state.roboParcial
            });
            this.verBotones({
                verLlantaRobada : false,
                verChoqueOPasarseLaLuzRoja: this.state.boton.ChoqueOPasarseLaLuzRoja,
                verAtropelloEnlaViaEvitamiento: this.state.boton.AtropelloEnlaViaEvitamiento,
            });
        }
        if(e === false){
            this.montoPago({
                ValorLlantaRobada : - this.state.roboParcial
            });
            this.verBotones({
                verLlantaRobada : true,
                verChoqueOPasarseLaLuzRoja: this.state.boton.ChoqueOPasarseLaLuzRoja,
                verAtropelloEnlaViaEvitamiento: this.state.boton.AtropelloEnlaViaEvitamiento,
            });
        }
    }

    botonChoqueOPasarseLaLuzRoja(e){
        this.verBotones({
            verLlantaRobada : e
        });
        if(e === true ){
            this.montoPago({
                valorChoqueOPasarseLaLuzRoja : this.state.choqueOAccidente
            });
            this.verBotones({
                verLlantaRobada : this.state.boton.LlantaRobada,
                verChoqueOPasarseLaLuzRoja: false,
                verAtropelloEnlaViaEvitamiento: this.state.boton.AtropelloEnlaViaEvitamiento,
            });
        }
        if(e === false){
            this.montoPago({
                valorChoqueOPasarseLaLuzRoja : - this.state.choqueOAccidente
            });
            this.verBotones({
                verLlantaRobada : this.state.boton.LlantaRobada,
                verChoqueOPasarseLaLuzRoja: true,
                verAtropelloEnlaViaEvitamiento: this.state.boton.AtropelloEnlaViaEvitamiento,
            });
        }
    }

    botonAtropelloEnlaViaEvitamiento(e){
        this.verBotones({
            verLlantaRobada : e
        });
        if(e === true ){
            this.montoPago({
                valorAtropelloEnlaViaEvitamiento : this.state.perdidaTotalPorAccidenteDeTransito
            });
            this.verBotones({
                verAtropelloEnlaViaEvitamiento : false,
                verChoqueOPasarseLaLuzRoja: this.state.boton.ChoqueOPasarseLaLuzRoja,
                verLlantaRobada : this.state.boton.LlantaRobada,
            });
        }
        if(e === false){
            this.montoPago({
                valorAtropelloEnlaViaEvitamiento : - this.state.perdidaTotalPorAccidenteDeTransito
            });
            this.verBotones({
                verAtropelloEnlaViaEvitamiento : true,
                verChoqueOPasarseLaLuzRoja: this.state.boton.ChoqueOPasarseLaLuzRoja,
                verLlantaRobada : this.state.boton.LlantaRobada,
            });
        }
    }

//-----End Monto de Pago --- //

    render(){
        const placa = this.props.placa;
        const marca = this.props.marca.value;
        const anio = this.props.anio.value;
        const monto = this.state.montoBase;
        return(
            <div className="form-signin">
            {/* // <form className="form-signin"> */}
                <button className="btn btn-outline-danger" 
                onClick={()=>this.volver()} type="submit">Volver</button>

                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 font-weight-normal">Mira las coberturas</h1>
                    <p>Conoce las coberturas para tu plan</p>
                </div>
                <div className="border border-secondary rounded">
                        <p className="text-muted">placa: {placa}</p> 
                        <p className="font-weight-bolder text-uppercase  text-truncate">{marca} <br></br>{anio}</p>
                        <p className="text-muted  text-truncate">$ {monto}.00 mensuales</p>
                        <a href="#" className="text-decoration-none">EDITAR</a>
                    
                </div>
                <div>
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Protege a tu auto</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Protege a los que te rodean</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Mejora tu plan</a>
                    </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">...</div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">..f.</div>
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
                    </div>
                </div>

                <div>
                    <p>Llanta Robada</p>
                    {this.state.boton.LlantaRobada === true &&
                        <button type="button" className="btn btn-outline-success" onClick={()=>this.botonLlantaRobada(true)}>Agregar</button>
                    }
                    {this.state.boton.LlantaRobada === false &&
                        <button type="button" className="btn btn-outline-danger" onClick={()=>this.botonLlantaRobada(false)}>Quitar</button>
                    }
                </div>
                <div>
                    <p>Choque y/o pasarte a la luz roja</p>
                    {this.state.boton.ChoqueOPasarseLaLuzRoja === true &&
                        <button type="button" className="btn btn-outline-success" onClick={()=>this.botonChoqueOPasarseLaLuzRoja(true)}>Agregar</button>
                    }
                    {this.state.boton.ChoqueOPasarseLaLuzRoja === false &&
                        <button type="button" className="btn btn-outline-danger" onClick={()=>this.botonChoqueOPasarseLaLuzRoja(false)}>Quitar</button>
                    }
                </div>
                <div>
                    <p>Atropello en la vía Evitamiento</p>
                    {this.state.boton.AtropelloEnlaViaEvitamiento === true &&
                        <button type="button" className="btn btn-outline-success" onClick={()=>this.botonAtropelloEnlaViaEvitamiento(true)}>Agregar</button>
                    }
                    {this.state.boton.AtropelloEnlaViaEvitamiento === false &&
                        <button type="button" className="btn btn-outline-danger" onClick={()=>this.botonAtropelloEnlaViaEvitamiento(false)}>Quitar</button>
                    }
                </div>

        {/* // </form> */}
            {/* <button className="btn btn-lg btn-danger btn-block" type="submit">LO QUIERO</button>
                    <p className="mt-5 mb-3 text-muted text-center">© 2021</p> */}
            </div>
        );
    }
}
export default ArmaTuPLan;