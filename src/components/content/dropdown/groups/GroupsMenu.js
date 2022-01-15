import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getRefreshToken } from '../../../../businessLogic/users/usersActions';
import { fetchGroups } from '../../../../businessLogic/groups/groupActions';
import GroupItem from './GroupItem';
import './Groups.css';


class GroupMenu extends Component {

    // constructor(props){
    //     super(props)

    //     this.retrieveGroups = this.retrieveGroups.bind(this)
    // }

    componentDidMount(){
        console.log(`The user's id is ${this.props.userId}`)
        
        this.props.getRefreshToken(this.props.userName)
        this.props.getGroups(this.props.userId);
        // this.retreieveGroups()
        
        console.log(`User name: ${this.props.userName}`)
    }

    // retrieveGroups(){
    //     const {userId} = this.props;    
    //     this.props.getGroups(userId);
    // }

    render() {

        const {groups} = this.props;
        
        const {userName} = this.props;
        const {userId} = this.props;
        console.log(`${userName}'s groups are: ${groups}`);

        console.log(`Current user of the group menu is ${userName}.`)
        console.log(userId)
        // this.props.getGroups(userId);

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
        getRefreshToken: (userName) => dispatch(getRefreshToken(userName)),
        getGroups: (userId) => dispatch(fetchGroups(userId))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GroupMenu)