import React, {Component} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }

    }

    render() { 
        return ( 
            <div>
                <h1>Homepage</h1>
            </div>
         );
    }
}
 
export default Homepage;
