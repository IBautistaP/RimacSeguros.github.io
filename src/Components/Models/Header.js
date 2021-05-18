import React, { Component } from "react";
// import { NavLink, Route } from 'react-router-dom';
import logo from '../../Assets/images/LogoRIMAC.svg';
class Header extends Component{
    render(){
        return(
            <header id="header">
            <div className="center">
                {/* <!-- LOGO --> */}
                <div id="logo">
                    <img src={logo} className="app-logo" alt="Logotipo" />
                    <span id="brand">
                        {/* <strong>Rimac</strong> */}
                    </span>
                </div>
                
                {/* <!-- MENU --> */}
                {/* <nav id="menu">
                    <ul>
                        <li>
                            <NavLink to="/Login" activeClassName="active">Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Master" activeClassName="active">Master</NavLink>
                        </li>
                    </ul>
                </nav> */}

                {/* <!--LIMPIAR FLOTADOS--> */}
                <div className="clearfix"></div>
            </div>
        </header>
        );
    }
}

export default Header