import React, { Component } from 'react';
import Login from './Login';

import { connect } from 'react-redux';


class LoginPage extends Component {
    
    submit = values => {
        console.log(values)
        this.props.userLoggedIn(values)
    }

    render() {
        return <Login onSubmit={this.submit}/>
    }
}


export default LoginPage