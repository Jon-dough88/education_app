// import React from 'react';
// import { Field, reduxForm } from 'redux-form';

// import { required, maxLengthValue, minLengthValue, email, emailMaxValue, comparePasswords } from '../../../utils/validations';


// import './Signup.css';


// const validationField = ({input, label, type, meta: {touched, error, warning}}) => (

    
//     <div className="validation-field-container">
//         {/* <label>{label}</label> */}
//         <div >
//             <input 
//             className="input" {...input} placeholder={label} type={type} 
//             ></input>    
//         </div>
//         <div className="error-container">
//             {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
//         </div>
//     </div>
// )

// let Signup = props => {

//     const { handleSubmit, pristine, reset, submitting } = props

//     // hoverAnimation(){
        
//     // }

//     return(
//         <div className="jumbotron signup-container">
//             <div className="card">
//                 <div className="card-body" id="signup-body">
//                     <h1 className="card-title signup-title">Signup</h1>
//                     <form className="form-inline justify-content-center" id="signup-form" onSubmit={handleSubmit}>
//                         <div className="input-container">
//                             <div className="form-container left-form-container">
//                                 <div className="form-group first-group">
//                                     {/* <label for="firstName" className="form-label">First Name: </label> */}
//                                     <Field className="form-control form-control-lg" 
//                                         name="firstName"
//                                         component={validationField}
//                                         type="text"
//                                         label="First Name"
//                                         validate={[required, maxLengthValue, minLengthValue]}
//                                     />
//                                 </div>

//                                 <div className="form-group">
//                                     {/* <label for="lastName" className="form-label">Last Name: </label> */}
//                                     <Field className="form-control form-control-lg"
//                                         name="lastName"
//                                         component={validationField}
//                                         type="text"
//                                         label="Last Name"
//                                         validate={[required, maxLengthValue, minLengthValue]}
//                                     />
//                                 </div>

//                                 <div className="form-group">
//                                     {/* <label for="lastName" className="form-label">Last Name: </label> */}
//                                     <Field className="form-control form-control-lg"
//                                         name="userName"
//                                         component={validationField}
//                                         type="text"
//                                         label="Username"
//                                         validate={[required, minLengthValue, maxLengthValue]}
//                                     />
//                                 </div>
//                             </div>
//                             <div className="form-container right-form-container">
//                                 <div className="form-group">
//                                     {/* <label for="lastName" className="form-label">Last Name: </label> */}
//                                     <Field className="form-control form-control-lg"
//                                         name="email"
//                                         component={validationField}
//                                         type="email"
//                                         label="Email"
//                                         validate={[required, email, emailMaxValue]}
//                                     />
//                                 </div>

//                                 <div className="form-group">
//                                     {/* <label for="lastName" className="form-label">Last Name: </label> */}
//                                     <Field className="form-control form-control-lg"
//                                         name="password"
//                                         component={validationField}
//                                         type="password"
//                                         label="Password"
//                                         validate={[required, minLengthValue, maxLengthValue]}
                                        
//                                     />
//                                 </div>

//                                 <div className="form-group">
//                                     {/* <label for="lastName" className="form-label">Last Name: </label> */}
//                                     <Field className="form-control form-control-lg"
//                                         name="confirmPassword"
//                                         component={validationField}
//                                         type="password"
//                                         label="Confirm your password"
//                                         validate={[comparePasswords]}
//                                     />
//                                 </div>
//                             </div>
//                         </div>
                        

                        
                        
                        

//                         <div className="form-group role-checkbox-container">
//                             {/* <label for="lastName" className="form-label">Last Name: </label> */}
//                             <label><Field name="userType" className="form-control signup-radio" component="input" type="radio" value="teacher" /> Teacher</label>
//                             <label><Field name="userType" className="form-control signup-radio" component="input" type="radio" value="student"/> Student</label>
//                         </div>

//                         <div className="form-group">
//                             <button className="btn btn-lg btn-primary signup-button" type="submit" disabled={pristine || submitting}>Sign up!</button>
//                             <button className="btn btn-lg btn-warning clear-button" type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button> 
//                         </div>
                       
//                         <br />   
//                         <a href="/login"><strong style={{fontSize: "18px"}}>Already a member? Click here!</strong></a>
//                     </form>    
//                 </div>

//             </div>

//         </div>
        
//     )
// }

// // const mapDispatchToProps = dispatch => {
// //     return {

// //     }
// // }

// Signup = reduxForm({
//     form: 'signup'
// })(Signup)



// export default Signup


import React from 'react';
import { Field, reduxForm } from 'redux-form';

import './Signup.css';

let Signup = props => {

    const { handleSubmit, pristine, reset, submitting } = props

    return(
        <div className="jumbotron signup-container">
            <div className="card">
                <div className="card-body" id="signup-body">
                    <h1 className="card-title signup-title">Signup</h1>
                    <form className="form-inline justify-content-center" id="signup-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            {/* <label for="firstName" className="form-label">First Name: </label> */}
                            <Field className="form-control form-control-lg"
                                name="firstName"
                                component="input"
                                type="text"
                                placeholder="First Name"
                            />
                        </div>

                        <div className="form-group">
                            {/* <label for="lastName" className="form-label">Last Name: </label> */}
                            <Field className="form-control form-control-lg"
                                name="lastName"
                                component="input"
                                type="text"
                                placeholder="Last Name"
                            />
                        </div>

                        <div className="form-group">
                            {/* <label for="lastName" className="form-label">Last Name: </label> */}
                            <Field className="form-control form-control-lg"
                                name="userName"
                                component="input"
                                type="text"
                                placeholder="Username"
                            />
                        </div>

                        <div className="form-group">
                            {/* <label for="lastName" className="form-label">Last Name: </label> */}
                            <Field className="form-control form-control-lg"
                                name="email"
                                component="input"
                                type="email"
                                placeholder="Email"
                            />
                        </div>

                        <div className="form-group">
                            {/* <label for="lastName" className="form-label">Last Name: </label> */}
                            <Field className="form-control form-control-lg"
                                name="password"
                                component="input"
                                type="password"
                                placeholder="Password"
                            />
                        </div>

                        <div className="form-group">
                            {/* <label for="lastName" className="form-label">Last Name: </label> */}
                            <Field className="form-control form-control-lg"
                                name="confirmPassword"
                                component="input"
                                type="password"
                                placeholder="Confirm your password"
                            />
                        </div>

                        <div className="form-group">
                            {/* <label for="lastName" className="form-label">Last Name: </label> */}
                            <label><Field name="userType" className="form-control signup-radio" component="input" type="radio" value="teacher"/> Teacher</label>
                            <label><Field name="userType" className="form-control signup-radio" component="input" type="radio" value="student"/> Student</label>
                        </div>

                        <button className="btn btn-lg btn-primary signup-button" type="submit" disabled={pristine || submitting}>Sign up!</button>
                        <button className="btn btn-lg btn-warning" type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                        <br />   
                        <a href="/login"><strong style={{fontSize: "18px"}}>Already a member? Click here!</strong></a>
                    </form>    
                </div>

            </div>

        </div>
        
    )
}

// const mapDispatchToProps = dispatch => {
//     return {

//     }
// }

Signup = reduxForm({
    form: 'signup'
})(Signup)



export default Signup