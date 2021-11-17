import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from './Login';
import { login, authToken, getRefreshToken } from '../../../businessLogic/users/usersActions';


class LoginPage extends Component {
    
    componentDidMount = () => {
        const { accessToken } = this.props;
        console.log(accessToken)
        // console.log(`Logged in user is: ${this.props.user}`)
        // this.props.findUser()
        this.props.getRefreshToken()
        this.props.verifyToken(accessToken)
    }

    submit = values => {
        // console.log(values)
        this.props.userLoggedIn(values)
    }

    render() {

        const {userNama} = this.props;

        return <Login onSubmit={this.submit}/>
    }
}

const mapStateToProps = state => {
    return {
        // user: state.users.currentUser,
        userName: state.users.userName,
        accessToken: state.users.accessToken
    }
}

const mapDispatchToProps = dispatch => {
    
    return {
        // findUser: () => {dispatch(fetchUser())},

        // Change the user identifier to an id rather than a username.
        getRefreshToken: (userName) => {dispatch(getRefreshToken(userName))},
        verifyToken: (accessToken) => { dispatch(authToken(accessToken))},
        userLoggedIn: (values) => {dispatch(login(values))}
    }
    
} 


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)