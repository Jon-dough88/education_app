import React, {Component} from 'react';
import Signup from '../Signup/Signup';

class SignupPage extends Component {
    
    submit = values => {
        console.log(values)
    }

    
    render() { 
        return <Signup onSubmit={this.submit}/>
    }
}
 
export default SignupPage;

