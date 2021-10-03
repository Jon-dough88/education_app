import React, {Component} from 'react';
import { connect } from 'react-redux';

import Signup from '../Signup/Signup';
import { signup } from '../../../businessLogic/users/usersActions';


class SignupPage extends Component {
    
    submit = values => {
        console.log(values)
        this.props.userRegistered(values)
    }

    

    
    render() { 
        return <Signup onSubmit={this.submit}/>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userRegistered: (values) => dispatch(signup(values))
    }
}
 
export default connect(null, mapDispatchToProps)(SignupPage);

