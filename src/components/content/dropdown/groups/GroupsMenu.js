import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getRefreshToken } from '../../../../businessLogic/users/usersActions';
import { fetchGroups } from '../../../../businessLogic/groups/groupActions';
import GroupItem from './GroupItem';
import './Groups.css';


class GroupMenu extends Component {

    componentDidMount(){
        const {userId} = this.props;
        this.props.getRefreshToken()
        this.props.getGroups(userId);
        console.log(`User name: ${this.props.userName}`)
    }

    render() {

        const {groups} = this.props
        const {userName} = this.props;
        const {userId} = this.props;

        console.log(`Current user of the group menu is ${userName}.`)
        console.log(userId)

        return (

            <div className="container jumbotron group-menu">
                <div className="row group-title-row">
                    <div className="col-md-7 col-sm-5">
                        <h1 className="group-menu-title">My Groups</h1>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <a href="/groupCreation"><i class="fas fa-plus-circle fa-3x add-button"></i></a> 
                    </div>
                </div>
                <div className="row">

                    {groups === null
                    ? <div className="col">
                        <div className="alert alert-danger">No groups found!</div>
                      </div>
                    : groups.map((group) => (
                        <GroupItem key={group._id} group={group} />
                    ))
                    }
                    {/* <GroupItem />
                    <GroupItem /> */}
                </div>  
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userName: state.users.userName,
        userId: state.users.userId,
        accessToken: state.users.accessToken,
        groups: state.groups.groups
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getRefreshToken: () => dispatch(getRefreshToken()),
        getGroups: (userId) => dispatch(fetchGroups(userId))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GroupMenu)