import React, {Component} from "react";
import SimpleReactValidator from 'simple-react-validator';
class DatosDelAuto extends Component{

    // refMarca = React.createRef();
    // anio = React.createRef();

    state={
        // datos:{},
        anio:
            [
            {id:null,value:"Seleccione"},
            {id:0,value:"2021"},
            {id:1,value:"2020"},
            {id:2,value:"2019"},
            {id:3,value:"2018"},
            {id:4,value:"2017"},
            {id:5,value:"2016"},
            {id:6,value:"2015"},
            {id:7,value:"2014"},
            {id:8,value:"2013"},
            {id:9,value:"2012"},
            {id:10,value:"2011"},
            {id:11,value:"2010"},
            {id:12,value:"2009"},
            {id:13,value:"2008"}
        ],
        marca:[
            {id:null,value:"Seleccione"},
            {id:0,value:"Audi"},
            {id:1,value:"Subaru"},
            {id:2,value:"Lexus"},
            {id:3,value:"Porsche"},
            {id:4,value:"BMW"},
            {id:5,value:"Mazda"},
            {id:6,value:"Buick"},
            {id:7,value:"Toyota"},
            {id:8,value:"Kia"},
            {id:9,value:"Honda"},
            {id:10,value:"Hyundai"},
            {id:11,value:"Volvo"},
            {id:12,value:"Mini"},
            {id:13,value:"Mercedes-Benz"},
            {id:14,value:"Volkswagen"},
            {id:15,value:"Ford"},
            {id:16,value:"Lincoln"},
            {id:17,value:"Scion"},
            {id:18,value:"Acura"},
            {id:19,value:"Chevrolet"},
            {id:20,value:"Nissan"},
            {id:21,value:"Infiniti"},
            {id:22,value:"GMC"},
            {id:23,value:"Cadillac"},
            {id:24,value:"Dodge"},
            {id:25,value:"Land Rover"},
            {id:26,value:"Mitsubishi"},
            {id:27,value:"Jeep"},
            {id:28,value:"Fiat"}
        ],
        anioSeleccionado : {
            id: this.props.anio.id,
            value: this.props.anio.value
        },
        marcaSeleccionado : {
            id: this.props.marca.id,
            value: this.props.marca.value
        }
    };

    datosGenerales( {volver = false, continuar = false }){
        var datos = {
            volver: volver,
            continuar : continuar,
            marca : {
                id: this.state.marcaSeleccionado.id,
                value: this.state.marcaSeleccionado.value
            },
            anio : {
                id: this.state.anioSeleccionado.id,
                value: this.state.anioSeleccionado.value
            }
        }
        this.envioDatos(datos);
    }

    volver(){
        this.datosGenerales({
            volver: true,
        });
    }

    continuar(){
        this.datosGenerales({
            continuar: true,
        });
    }

    envioDatos(e) {
        this.props.funcionDatos(e);
    }

    seleccionAnio = (event) => {
        event.preventDefault(); 
        let id = event.target.id;
        let value = event.target.value;
        this.setState({
            anioSeleccionado:{
                id: id,
                value: value
            } 
        });
    }

    seleccionMarca = (event) =>{
        event.preventDefault(); 
        let id = event.target.id;
        let value = event.target.value;
        this.setState({
            marcaSeleccionado:{
                id: id,
                value: value
            } 
        });
    }

    render(){
        const nombre = this.props.nombre;

        return(
            <div className="form-signin">
            {/* // <form className="form-signin"> */}
                <button className="btn btn-outline-danger" 
                onClick={()=>this.volver()} type="submit">Volver</button>

                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 font-weight-normal">!Hola, <code>{nombre}!</code></h1>
                    <p>Completa los datos de tu auto</p>
                </div>
                <div className="form-group col-md-12">
                    <label >Año</label>
                    <select id={this.state.anioSeleccionado.id} className="form-control" value={this.state.anioSeleccionado.value} onChange={this.seleccionAnio}>
                        {this.state.anio.map(elemento=>(
                            <option key={elemento.id} id={elemento.id} value={elemento.value}>{elemento.value}</option>
                        ))}
                    </select>
                    {/* {this.validator.message('ANIO', this.state.anioSeleccionado.value, 'required')} */}
                </div>
                <div className="form-group col-md-12">
                    <label for="inputState">Marca</label>
                    <select id={this.state.marcaSeleccionado.id} className="form-control" value={this.state.marcaSeleccionado.value} onChange={this.seleccionMarca}>
                        {this.state.marca.map(elemento=>(
                            <option key={elemento.id} id={elemento.id} value={elemento.value}>{elemento.value}</option>
                        ))}
                    </select>
                </div>
                <div className="custom-control  custom-control-inline"><label >¿Tu auto es a gas?</label> </div>
                <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="customRadioInline1" name="customRadioInline" className="custom-control-input" value="Si"/>
                    <label className="custom-control-label" >Si</label>
                    {/*for="customRadioInline1" */}
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="customRadioInline2" name="customRadioInline" className="custom-control-input red" value="No"/>
                    <label className="custom-control-label" >No</label>
                </div>


                    <div className="custom-control  custom-control-inline form-group col-md-6">
                        <label  id="indicadorLabel">Indica la suma asegurada <br/>Min $12,500 || Max $16,500</label>
                        {/* <label >Min $12,500 || Max $16,500</label> */}
                    </div>
                    <div className="custom-control  custom-control-inline form-group col-md-4" >
                        <input type="number" id="sumaAsegurada" min="12500" max="16500" className="form-control" placeholder="&nbsp;" required=""/>
                        {/* <label >Lista Marca</label> */}
                    </div>
        {/* // </form> */}
            <button className="btn btn-lg btn-danger btn-block" 
                    onClick={()=>this.continuar()} type="submit">Continuar</button>
                    <p className="mt-5 mb-3 text-muted text-center">© 2021</p>
            </div>
        );
    }
}
export default DatosDelAuto;