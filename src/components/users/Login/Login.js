import React from 'react';
import { Field, reduxForm } from 'redux-form';

import './Login.css';
import { required, maxLengthValue, minLengthValue } from '../../../utils/validations';


const validationField = ({input, label, type, meta: {touched, error, warning}}) => (

    <div className="validation-field-container">
        {/* <label>{label}</label> */}
        <div >
            <input 
            className="input" {...input} placeholder={label} type={type} 
            ></input>    
        </div>
        <div className="error-container">
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)

let Login = props => {
    const { handleSubmit, pristine, reset, submitting } = props

    return (
        <div className="jumbotron login-container">
            <div className="card" id="login-page">
                <h1 className="card-title">Login</h1>
            
                <div className="card-body">
                    <form className="form-inline justify-content-center" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <Field className="form-control form-control-lg"
                                 name="userName"
                                 component={validationField}
                                 type="text"
                                 label="User Name"
                                 validate={[required, minLengthValue, maxLengthValue]}   
                            />
                        </div>

                        <div className="form-group">
                            <Field className="form-control form-control-lg"
                                 name="password"
                                 component={validationField}
                                 type="password"
                                 label="Password" 
                                 validate={[required, minLengthValue, maxLengthValue]}    
                            />
                        </div>

                        <button className="btn btn-lg btn-primary login-button" type="submit" disabled={pristine || submitting}>Login</button>
                    
                        <button className="btn btn-lg btn-warning" type="button" disabled={pristine || submitting} onClick={reset}>Clear</button>
                        <br />

                        <a className="signup-link" href="/signup"><strong>Not a member yet? Sign up today!</strong></a>

                    </form>
                </div>
            </div>
        </div>
    )
}

Login = reduxForm({
    form: 'login'
})(Login)


export default Login;