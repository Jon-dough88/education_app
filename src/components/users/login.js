import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

import './Login/Login.css';


let Login = props => {
    const { handleSubmit, pristine, reset, submitting } = props

    return (
        <div className="jumbotron container">
            <div className="card" id="login-page">
                <h1 className="card-title">Login</h1>
                <div className="card-body">
                    <form className="form-inline justify-content-center" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <Field className="form-control form-control-lg"
                                 name="userName"
                                 component="input"
                                 type="text"
                                 placeholder="User Name"   
                            />
                        </div>

                        <div className="form-group">
                            <Field className="form-control form-control-lg"
                                 name="password"
                                 component="input"
                                 type="password"
                                 placeholder="Password"   
                            />
                        </div>

                        <button className="btn btn-lg btn-primary login-button" type="submit" disabled={pristine || submitting}>Login</button>
                        <br />
                        <button className="btn btn-lg btn-info" type="button" disabled={pristine || submitting} onClick={reset}>Clear</button>
                        <br />
                        <a href="/signup">Not a member yet? Sign up today!</a>

                    </form>
                </div>
            </div>
        </div>
    )
}
// import {connect} from react-redux;

// class Login extends Component {
//     constructor(props) {
//         super(props);
        
//     }

//     render() { 
//         return (
//             <div className="card" id="login-page">
//                 <div className="card-body" id="login-card">
//                     <form className="form-inline justify-content-center" 
//                     // onSubmit={}
//                     >
//                     <div className="form-group">
//                         <input className="form-control form-control-lg" type="text" required={true} placeholder="Username"></input>
//                     </div>
//                     <div className="form-group">
//                         <input className="form-control form-control-lg" type="text" required={true} placeholder="Password"></input>
//                     </div>  
//                     <input className="btn btn-primary btn-lg login-button" type="submit" value="Login!"></input>
//                     <br/>
//                     <a href="/signup">Not a member yet? Sign up today!</a>
//                     </form>
//                 </div>
//             </div>
//         );
//     }
// }
 
export default Login;