import React, { Component } from 'react';
import { connect } from 'react-redux';

import Sidebar from '../../../elements/sidebar/Sidebar';
import GroupsMenu from './GroupsMenu';
import Promotional from '../../../elements/Promotional/Promotional';

import { getRefreshTokens } from '../../../../businessLogic/users/usersActions';

import './GroupLandingPage.css';

class GroupLandingPage extends Component {

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
        accessToken: state.users.accessToken
    }
}

const mapDispatchToProps = dispatch => {
    
    return {
        
        getRefreshToken: () => {dispatch(getRefreshToken())},
        
        
    }
    
} 


export default connect(mapStateToProps, mapDispatchToProps)s(GroupLandingPage)