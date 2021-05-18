import React, {Component} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//Views
// import Login from "./Components/Views/Login/Login"
import Master from "./Components/Views/Master/Master";

// import DatosDelAuto from "./Components/Views/Master/Models/DatosDelAuto";
// import DejanosTusDatos from "./Components/Views/Master/Models/DejanosTusDatos";
import Header from "./Components/Models/Header";
class Router extends Component{
    render(){
        return(
            <BrowserRouter>
            <Header></Header>
            <Switch>
                <Route exact path="/" component={Master}></Route>
                {/* <Route exact path="/Login" component={Login}></Route> */}
                {/* <Route exact path="/Master" component={Master}></Route> */}
                {/* <Route exact path="/DatosDelAuto" component={DatosDelAuto}></Route>
                <Route exact path="/DejanosTusDatos" component={DejanosTusDatos}></Route> */}
                {/* <Route exact path="/Login" component={Login}></Route> */}

                {/* <Route exact path="/Master/:datos?" component={Master}></Route> */}
            </Switch>
            </BrowserRouter>
        );
    }
}
export default Router