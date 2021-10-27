import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from './Login';
import { login, fetchUser } from '../../../businessLogic/users/usersActions';


class LoginPage extends Component {
    
    componentDidMount = () => {
        this.props.findUser()
    }

    submit = values => {
        console.log(values)
        this.props.userLoggedIn(values)
    }

    render() {
        return <Login onSubmit={this.submit}/>
    }
}

const mapStateToProps = state => {
    return {
        user: state.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        findUser: () => {dispatch(fetchUser())},
        userLoggedIn: (values) => {dispatch(login(values))}
    }
    
} 


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)