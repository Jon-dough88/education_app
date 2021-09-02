import React from 'react';
import { Field, reduxForm } from 'redux-form';

import './Signup.css';

let Signup = props => {
    const { handleSubmit } = props

    return(
        <div className="jumbotron">
            <div className="card">
                <div className="card-body" id="signup-body">
                    <form className="form-inline justify-content-center" id="signup-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <Field 
                                name="firstName"
                                component="input"
                                type="text"
                                placeholder="First Name"
                            />
                        </div>

                    </form>    
                </div>

            </div>

        </div>
        
    )
}

Signup = reduxForm({
    form: 'signup'
})(Signup)
// class Signup extends Component {

//     constructor(props){
//         super(props);

        
//     }


//     render() {
//         return (
//             <div className="jumbotron">
//                 <div className="card" >
//                     <div className="card-body" id="signup-body">
//                         <form className="form-inline justify-content-center" id="signup-form">
//                             <div className="form-group">
//                                 <input className="form-control form-control-lg" 
//                                 type="text" 
//                                 id=""
//                                 // ref={}
//                                 placeholder="First Name"
//                                 >    
//                                 </input>
//                             </div>
//                             <div className="form-group">
//                                 <input className="form-control form-control-lg" 
//                                 type="text" 
//                                 id=""
//                                 // ref={}
//                                 placeholder="Last Name"
//                                 > 
//                                 </input>
//                             </div>
//                             <div className="form-group">
//                                  <input className="form-control form-control-lg" 
//                                 type="email" 
//                                 id=""
//                                 // ref={}
//                                 placeholder="Email"
//                                 >    
//                                 </input>
//                             </div>
//                             <div className="form-group"> 
//                                 <input className="form-control form-control-lg" 
//                                 type="password" 
//                                 id=""
//                                 // ref={}
//                                 placeholder="Password"
//                                 >
//                                 </input>
//                             </div>
//                             <div className="form-group">
//                                 <input className="form-control form-control-lg" 
//                                 type="password" 
//                                 id=""
//                                 // ref={}
//                                 placeholder="Retype your password"
//                                 >    
//                                 </input> 

//                             </div>
//                             <input className="btn btn-primary btn-lg signup-button" type="submit" value="Sign up!"></input> 
//                             <br />   
//                             <a href="/login"><strong style={{fontSize: "18px"}}>Already a member? Click here!</strong></a>    
//                         </form>
//                     </div>
//                 </div>     
//             </div>
//         )
//     }
// }


export default Signup