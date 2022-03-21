import React, { Component } from 'react';
import { connect } from 'react-redux';

import Sidebar from '../../../elements/sidebar/Sidebar';
import GroupsMenu from './GroupsMenu';
import Promotional from '../../../elements/Promotional/Promotional';

import { getRefreshToken } from '../../../../businessLogic/users/usersActions';
import { fetchGroups } from '../../../../businessLogic/groups/groupActions';
import { fetchUser } from '../../../../businessLogic/users/usersActions';

import './GroupLandingPage.css';



class GroupLandingPage extends Component {


    componentDidMount(){

        this.props.getUser()

        // const { userId } = this.props;
        // console.log(`The user ID at GroupLandingPage is: ${userId}`);

        // this.props.getRefreshToken();
        // this.props.getGroups(this.props.userId);


        console.log(this.props.groups)
    }

    render() {

        return(
            <div className="jumbotron main-page">
                <div className="row">
                    <div className="col-md-2 main-column" id="slider">
                        <Sidebar />
                    </div>
                    <div className="col-md-7 main-column" id="content">
                        <GroupsMenu />
                    </div>
                    <div className="col-md-3 main-column" id="promotional">
                        <Promotional />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        // user: state.users.currentUser,
        userName: state.users.userName,
        userId: state.users.userId,
        accessToken: state.users.accessToken,
        groups: state.users.groups
    }
}

const mapDispatchToProps = dispatch => {
    
    return {
        
        getUser: () => {dispatch(fetchUser())}
        // getRefreshToken: () => {dispatch(getRefreshToken())},
        // getGroups: (userId) => { dispatch(fetchGroups(userId)) }
        
    }
    
} 


export default connect(mapStateToProps, mapDispatchToProps)(GroupLandingPage)