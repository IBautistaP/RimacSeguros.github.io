import React, {Component} from "react";
// import axios from "axios";
import { NavLink } from 'react-router-dom';
import "../../../../Assets/css/Login.css";
class Registro extends Component{
    // state = {
    //     lista : [],
    // };
    // componentWillMount() {
    //     this.getApi();
    // }
    // getApi = () => {
    //     axios.get("https://randomuser.me/api/").then((res) => {
    //     this.setState({
    //         lista: res.data,
    //     });
    //         console.log(res.data);
    //     });
    // };
    state = {
        lista : [],
    };
    render(){

        return(
            <form className="form-signin">
                
                {/* <label  className="inp">
                    <input type="text" id="inp" placeholder="&nbsp;"/>
                    <span className="label">Label</span>
                    <span className="focus-bg"></span>
                </label> */}

                {/* <div className="text-center mb-4">
                    <h1 className="h3 mb-3 font-weight-normal">Floating labels</h1>
                    <p>Build form controls with floating labels via the <code>:placeholder-shown</code> pseudo-element. <a href="https://caniuse.com/css-placeholder-shown">Works in latest Chrome, Safari, Firefox, and IE 10/11 (prefixed).</a></p>
                </div> */}

                <div className="form-label-group">
                    <input type="text" id="inputDNI" className="form-control" placeholder="&nbsp;" required="" />
                    <label >DNI</label>
                </div>

                <div className="form-label-group">
                    <input type="text" id="inputCelular" className="form-control" placeholder="&nbsp;" required=""/>
                    <label >Celular</label>
                </div>

                <div className="form-label-group">
                    <input type="text" id="inputPlaca" className="form-control" placeholder="&nbsp;" required=""/>
                    <label >Placa</label>
                </div>

                <div className="checkbox mb-3">
                    <label>
                    <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                </div>
                {/* <button className="btn btn-lg btn-danger btn-block" type="submit">Sign in</button> */}
                <NavLink to="/Master/{this.lista}" className="btn btn-lg btn-danger btn-block">COTÍZALO</NavLink>
                <p className="mt-5 mb-3 text-muted text-center">© 2017-2021</p>
            </form>
        );
    }
    
}
export default Registro;