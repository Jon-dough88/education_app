import React, {Component} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import Navmenu from '../src/components/index/Navbar';
import  Login  from '../src/components/users/login';
import Signup from '../src/components/users/Signup/Signup';
import Main from '../src/components/index/Main';
import AdminPage from '../src/components/content/admin/AdminPage';
import GroupMenu from '../src/components/content/dropdown/groups/GroupsMenu';


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
                        <Route path="/" exact component={Main}></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/signup" component={Signup}></Route>
                        <Route path="/admin" component={AdminPage}></Route>
                        <Route path="/groups" component={GroupMenu}></Route>
                    </Switch>
                    
                </div>
            </Router>
         );
    }
}
 
export default Homepage;
