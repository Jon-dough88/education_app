import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from './Login';
import { login } from '../../../businessLogic/users/usersActions';


class LoginPage extends Component {
    
    submit = values => {
        console.log(values)
        this.props.userLoggedIn(values)
    }

    render() {
        return <Login onSubmit={this.submit}/>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userLoggedIn: (values) => {dispatch(login(values))}
    }
    
} 


export default LoginPage