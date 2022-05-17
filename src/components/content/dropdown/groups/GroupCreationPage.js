import React, {Component } from 'react';
import { connect } from 'react-redux';

import GroupCreator from './GroupCreator';

class GroupCreationPage extends Component {

submit = values => {

}

render(){
    return <GroupCreator />
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
        getStudentList: (userId, userName) => dispatch(fetchStudentList(userId, userName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupCreationPage)