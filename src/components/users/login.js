import React, {Component} from 'react';
import './Login/Login.css'
// import {connect} from react-redux;

class Login extends Component {
    constructor(props) {
        super(props);
        
    }

    render() { 
        return (
            <div className="card" id="login-page">
                <div className="card-body" id="login-card">
                    <form className="form-inline justify-content-center" 
                    // onSubmit={}
                    >
                    <div className="form-group">
                        <input className="form-control form-control-lg" type="text" required={true} placeholder="Username"></input>
                    </div>
                    <div className="form-group">
                        <input className="form-control form-control-lg" type="text" required={true} placeholder="Password"></input>
                    </div>  
                    <input className="btn btn-primary btn-lg" type="submit" value="Login!"></input>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default Login;