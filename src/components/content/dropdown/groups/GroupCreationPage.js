import React, {Component } from 'react';
import { connect } from 'react-redux';

import { handleKeyPress } from '../../../../utils/checkGroups';
import { createNewGroup } from '../../../../businessLogic/groups/groupActions';
import { fetchUser } from '../../../../businessLogic/users/usersActions';
import { getRefreshToken } from '../../../../businessLogic/users/usersActions';
import { findGroupName } from '../../../../businessLogic/groups/groupActions';
import { fetchStudentList } from '../../../../businessLogic/groups/groupActions';

import GroupCreator from './GroupCreator';


// class GroupCreationPage extends Component {

//     submit = (values) => {
//         console.log(values)
//     }

//     render() {
//         return(
//             <GroupCreator onSubmit = {this.submit} />
//         )
//     }
// }


// export default GroupCreationPage

class GroupCreationPage extends Component {


    componentDidMount(){

        // this.props.getUser();
        this.props.newRefreshToken();
        
        
        console.log(`Username is: ${this.props.userName}`)
    }


    // handleKeyPress(e) {
    //     // e.preventDefault()
    //     let searchValue = e.target.value;
    //     console.log(`Search value: ${searchValue}`);


    //     // this.props.checkForGroup(this.props.userId, searchValue);

        
    // }

    handleStudentList(e) {
        const {userId, userName} = this.props;
        console.log(`User ID: ${userId}. User name: ${userName}`);
        // console.log("Input clicked!");
        this.props.getStudentList(userId, userName)
    }




submit = values => {
    const {userId} = this.props;
        console.log(userId)
    // this.handleStudentList(values);
    // this.handleKeyPress(values)
    console.log(values)
    // const sentValues = {};
    // sentValues.push({values, userId});
    // console.log(`Sent values are: ${sentValues}`)
    this.props.createGroup(values, userId)

}

render(){

    const {userId, groups, message, groupCreated, groupCreationInProgress} = this.props;
        // console.log(userId)
        console.log(message)
        console.log(`New group data: ${groups}`);

    {groupCreated == true && greapCreationInProgress == false
     ? <div><h1>{message}</h1></div>
     : <GroupCreator onSubmit={this.submit} onChange={this.handleKeyPress} message={message}/>
    
    }

    

    
}
 
}


const mapStateToProps = state => {
    return {
        userName: state.users.userName,
        userId: state.users.userId,
        groupNameExists: state.groups.groupNameExists,
        groups: state.groups.groups,
        groupCreated: state.groups.groupCreated,
        groupCreationInProgress: state.groups.groupCreationInProgress,
        message: state.groups.message,
        studentList: state.groups.studentList
    }
}

const mapDispatchToProps = dispatch => {

    console.log()
    return {
        // getUser: () => dispatch(fetchUser()),
        newRefreshToken: () => dispatch(getRefreshToken()),
        checkForGroup: (userId, groupName) => dispatch(findGroupName(userId, groupName)),
        getStudentList: (userId, userName) => dispatch(fetchStudentList(userId, userName)),
        createGroup: (values, userId) => dispatch(createNewGroup(values, userId))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupCreationPage)