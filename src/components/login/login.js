import React, { PureComponent } from "react";
import Map from "../Map/map"


class Login extends PureComponent {
    render(){
        return(
            <div>
            <input type="button" value="Click here to log in" onClick={this.mapPage} ></input>
            </div>
        );
    };

    mapPage(){
        return(<Map/>);
    };
}


export default Login;