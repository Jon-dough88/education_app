import React, { Component } from 'react';
import Login from './Login';


class LoginPage extends Component {
    
    submit = values => {
        console.log(values)
    }

    render() {
        return <Login onSubmit={this.submit}/>
    }
}


export default LoginPage