import React, {Component} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import  Login  from '../src/components/users/login';
import Navmenu from '../src/components/index/Navbar';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }

    }

    render() { 
        return ( 
            <Router>
                <div>

                    <Navmenu />

                    <Switch>
                        <Route path="/login" component={Login}></Route>
                    </Switch>
                </div>
            </Router>
         );
    }
}
 
export default Homepage;
