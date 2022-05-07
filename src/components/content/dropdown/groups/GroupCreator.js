import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../../../../businessLogic/users/usersActions';
import { getRefreshToken } from '../../../../businessLogic/users/usersActions';
import { findGroupName } from '../../../../businessLogic/groups/groupActions';
import { fetchStudentList } from '../../../../businessLogic/groups/groupActions';
import StudentListItem from './StudentListItem';
 

import './Groups.css'

class GroupCreator extends Component {

    constructor(){
        super()
        this.state = {
            groupName: '',
            students: [],
            level: ''  
        }
    }


    componentDidMount(){

        // this.props.getUser();
        this.props.newRefreshToken();
        
        console.log(`Username is: ${this.props.userName}`)
    }


    handleKeyPress(e) {
        let searchValue = e.target.value;
        console.log(`Search value: ${searchValue}`);

        // this.setState({
        //     groupName: searchValue
        // })

        // console.log(`Group name is: ${this.state.groupName}`);

        this.props.checkForGroup(this.props.userId, searchValue);

        
    }

    handleStudentList(e) {
        const {userId, userName} = this.props;
        console.log(`User ID: ${userId}. User name: ${userName}`);
        // console.log("Input clicked!");
        this.props.getStudentList(userId, userName)
    }


    render() { 

        const {userId} = this.props;
        console.log(`The user's ID is: ${userId}`);

        const {groupNameExists} = this.props;
        console.log(`The group's name already exists: ${groupNameExists}`);

        const {studentList} = this.props;
        console.log(studentList);
        

        return ( 
            <div className="card group-creation-menu">
                <div className="card-body">
                    <form className="form-inline justify-content-center" id="group-creation-form">
                        {/* <div><h1>{this.props.userName}'s Groups</h1></div> */}
                        <div className="form-group groups-formGroup">
                            <label for="group-name">Group name: </label>
                            <input type="text" name="groupName" className="form-control groups-input" id="group-name" aria-describedby="group-name" onChange={(e)=> { this.handleKeyPress(e) }}></input>
                            
                            {groupNameExists === true && 
                            <div className="alert alert-danger groupExists">
                                {this.props.message}
                            </div>
                            }
                        </div>
                        <div className="form-group groups-formGroup">
                            <label for="student-search">Add a student (click on the searchbar to choose): </label>
                            
                            <input type="search" id="student-search" className="form-control groups-input" onFocus={(e) => {this.handleStudentList(e)}}></input>
                            
                            
                           
                            
                            <button className="btn btn-primary btn-lg">Add</button>
                            {/* <div className="dropdown">
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">{studentList.map((student) => <a className="dropdown-item" key={student._id}>{student.studentName}</a>)}</div>
                            </div> */}
                            
                            <div className="student_list_container">
                                
                                {/* {studentList.map((student, key) => 
                                <div className="student_list_item" key={student[`${key}`].student_id}><p>{`${student[`${key}`].studentName}`}</p></div>
                                )} */}

                                {studentList[0].map((student) => (

                                    // <div className="student_list_item" key={student.student_id}><p>{`${student[`${key}`].studentName}`}</p></div>
                                    <StudentListItem key={student.student_id} student={student} />
                                    
                                ))}

                                {/* {studentList.forEach(students => {
                                    for(let student in students){
                                        console.log(students[student])
                                        return <div className="student_list_item" key={student}>Student name: {students[student]}</div>
                                    }
                                })} */}

                            </div>
                            {/* <div>{studentList}</div> */}
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


 
export default connect(mapStateToProps, mapDispatchToProps)(GroupCreator);