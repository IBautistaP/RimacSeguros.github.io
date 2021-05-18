import React, {Component} from "react";
class ArmaTuPLan extends Component{
    state={
    };
    volver(){
        var opcionVolver = {
                volver : true
        }
        this.props.funcionDatos(opcionVolver)
    };

    render(){
        const placa = this.props.placa;
        const marca = this.props.marca;
        const anio = this.props.anio;
        const monto = 35;
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
                        <p className="text-muted  text-truncate">$ {monto} mensuales</p>
                        <a href="#" className="text-decoration-none">EDITAR</a>
                    
                </div>
                <div>
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
                </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">...</div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">..f.</div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
            </div>
                </div>

        {/* // </form> */}
            {/* <button className="btn btn-lg btn-danger btn-block" type="submit">LO QUIERO</button>
                    <p className="mt-5 mb-3 text-muted text-center">© 2021</p> */}
            </div>
        );
    }
}
export default ArmaTuPLan;