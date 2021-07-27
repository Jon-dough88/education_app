import React, { Component } from 'react';


class Signup extends Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="card">
                    <div className="card-body">
                        <form className="form-inline justify-content-center">
                            <div className="form-group">
                                <input className="form-control form-control-lg" 
                                type="text" 
                                id=""
                                // ref={}
                                placeholder="First Name"
                                >    
                                </input>
                            </div>
                            <div className="form-group">
                                <input className="form-control form-control-lg" 
                                type="text" 
                                id=""
                                // ref={}
                                placeholder="Last Name"
                                > 
                                </input>
                            </div>
                            <div className="form-group">
                                 <input className="form-control form-control-lg" 
                                type="email" 
                                id=""
                                // ref={}
                                placeholder="Email"
                                >    
                                </input>
                            </div>
                            <div className="form-group"> 
                                <input className="form-control form-control-lg" 
                                type="password" 
                                id=""
                                // ref={}
                                placeholder="Password"
                                >
                                </input>
                            </div>
                            <div className="form-group">
                                <input className="form-control form-control-lg" 
                                type="password" 
                                id=""
                                // ref={}
                                placeholder="Retype your password"
                                >    
                                </input> 

                            </div>
                                 
                        </form>
                    </div>
                </div>     
            </div>
        )
    }
}


export default Signup