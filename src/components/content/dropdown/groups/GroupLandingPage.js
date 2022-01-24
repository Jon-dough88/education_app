import React, { Component } from 'react';
import { connect } from 'react-redux';

import Sidebar from '../../../elements/sidebar/Sidebar';
import GroupsMenu from './GroupsMenu';
import Promotional from '../../../elements/Promotional/Promotional';

import { getRefreshToken } from '../../../../businessLogic/users/usersActions';
import { fetchGroups } from '../../../../businessLogic/groups/groupActions';

import './GroupLandingPage.css';



class GroupLandingPage extends Component {



    componentDidMount(){
        const { userId } = this.props;
        console.log(userId);

        this.props.getRefreshToken();
        this.props.getGroups(userId);
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
        groups: state.groups.groups
    }
}

const mapDispatchToProps = dispatch => {
    
    return {
        
        getRefreshToken: () => {dispatch(getRefreshToken())},
        getGroups: (userId) => { dispatch(fetchGroups(userId)) }
        
    }
    
} 


export default connect(mapStateToProps, mapDispatchToProps)(GroupLandingPage)