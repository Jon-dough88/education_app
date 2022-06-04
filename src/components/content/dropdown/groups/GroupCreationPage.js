import React, {Component } from 'react';
import { connect } from 'react-redux';

import { handleKeyPress } from '../../../../utils/checkGroups';
import { createNewGroup } from '../../../../businessLogic/groups/groupActions';

import GroupCreator from './GroupCreator';

class GroupCreationPage extends Component {


    componentDidMount(){

        // this.props.getUser();
        this.props.newRefreshToken();
        
        console.log(`Username is: ${this.props.userName}`)
    }


    handleKeyPress(e) {
        let searchValue = e.target.value;
        console.log(`Search value: ${searchValue}`);


        this.props.checkForGroup(this.props.userId, searchValue);

        
    }

    handleStudentList(e) {
        const {userId, userName} = this.props;
        console.log(`User ID: ${userId}. User name: ${userName}`);
        // console.log("Input clicked!");
        this.props.getStudentList(userId, userName)
    }


submit = values => {
    // this.handleStudentList(values);
    // this.handleKeyPress(values)
    console.log(values)
    this.props.createGroup(values)

}

render(){
    return <GroupCreator onSubmit={this.submit} 
    // onChange={(e)=> { this.handleKeyPress(e) }} 
    />
}
 
}


const mapStateToProps = state => {
    return {
        userName: state.users.userName,
        userId: state.users.userId,
        groupNameExists: state.groups.groupNameExists,
        message: state.groups.message,
        studentList: state.groups.studentList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // getUser: () => dispatch(fetchUser()),
        newRefreshToken: () => dispatch(getRefreshToken()),
        checkForGroup: (userId, groupName) => dispatch(findGroupName(userId, groupName)),
        getStudentList: (userId, userName) => dispatch(fetchStudentList(userId, userName)),
        createGroup: (values) => dispatch(createNewGroup(values))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupCreationPage)