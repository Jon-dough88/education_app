import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../../../../businessLogic/users/usersActions';
import { getRefreshToken } from '../../../../businessLogic/users/usersActions';
import { findGroupName } from '../../../../businessLogic/groups/groupActions';
 

import './Groups.css'

class GroupCreator extends Component {

    constructor(){
        super()
        this.state = {
            groupName: ''  
        }
    }


    componentDidMount(){

        // this.props.getUser();
        this.props.newRefreshToken();
        
        console.log(`Username is: ${this.props.userName}`)
    }


    handleKeyPress(e) {
        let keyPress = e.target.value;
        // console.log(`Key pressed: ${keyPress}`);

        this.setState({
            groupName: keyPress
        })

        this.props.checkForGroup(this.props.userId);

        console.log(`Group name is: ${this.state.groupName}`);
    }

    render() { 

        const {userId} = this.props;
        console.log(`The user's ID is: ${userId}`);

        return ( 
            <div className="card group-creation-menu">
                <div className="card-body">
                    <form className="form-inline justify-content-center" id="group-creation-form">
                        {/* <div><h1>{this.props.userName}'s Groups</h1></div> */}
                        <div className="form-group groups-formGroup">
                            <label for="group-name">Group name: </label>
                            <input type="text" name="groupName" className="form-control groups-input" id="group-name" aria-describedby="group-name" onChange={(e)=> { this.handleKeyPress(e) }}></input>

                        </div>
                        <div className="form-group groups-formGroup">
                            <label for="student-search">Add a student (click on the searchbar to choose): </label>
                            <input type="search" id="student-search" className="form-control groups-input"></input>
                            <button className="btn btn-primary btn-lg">Add</button>
                        </div>
                        <div className="form-group">
                            <button className="btn-lg level-btn" >3p</button>
                            <button className="btn-lg level-btn" >4p</button>
                            <button className="btn-lg level-btn" >5p</button>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-lg create-group-btn">Create Group</button>
                        </div>
                        <a href="/groups">
                            <h5><strong>Back to the group menu</strong></h5>
                        </a>
                    </form>
                </div>
            </div>
         );
    }
}


const mapStateToProps = state => {
    return {
        userName: state.users.userName,
        userId: state.users.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // getUser: () => dispatch(fetchUser()),
        newRefreshToken: () => dispatch(getRefreshToken()),
        checkForGroup: (userId) => dispatch(findGroupName(userId))
    }
}


 
export default connect(mapStateToProps, mapDispatchToProps)(GroupCreator);