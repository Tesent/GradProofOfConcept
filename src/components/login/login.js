import React, { PureComponent } from "react";
class Login extends PureComponent {
    render(){
        return(
            <div>
            <input type="button" value="Click here to log in" onClick={this.mapPage} ></input>
            </div>
        );
    };
}


export default Login;