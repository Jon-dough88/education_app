import React, {Component } from 'react';
import { connect } from 'react-redux';
import { findGroupName } from '../../../../businessLogic/groups/groupActions';

import './GroupModal.css';


class GroupModal extends Component {


    groupValidations =() => {
        console.log('Group validations!!!')
    }

    checkGroupExists = (e) => {
        const userId = this.props.userId;
        // console.log(`User ID at 'checkGroupExists is: ${userId}`)
        this.props.checkGroupExists(userId, e.target.value);
    }

    showStudentList =() => {
        const userId = this.props.userId;
        console.log(userId)

        this.props.fetchStudentList(userId);
    }

    render() { 
        // const {userName} = this.props;
        // console.log(userName);

        const {message} = this.props;

        return (
            <div class="modal" tabindex="-1" id="groupModal">
                <div class="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col">
                                    <form justify-content="center">
                                        <div className="form-group">
                                            <div className="input-group mb-3">
                                                <label for="group-changeName">Change your group's name</label>
                                                <input type="text" className="form-control" id="group-changeName" onFocus={() => {this.groupValidations()}} onKeyPress={(e) => {this.checkGroupExists(e)}}></input>  
                                                { message !== null && 
                                                    <small className="warning-message">{message}</small>
                                                }
                                                  
                                            </div>
                                            <div className="input-group mb-3">
                                                <label for="group-addStudents">Add students</label>
                                                <input type="text" className="form-control" id="group-addStudents" onFocus={() => {this.showStudentList()}}></input>    
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        userName: state.users.userName,
        userId: state.users.userId,
        message: state.groups.message
    }
}

const mapDispatchToProps = dispatch => {
    return {
        checkGroupExists: (userId, groupNameInput) => dispatch(findGroupName(userId, groupNameInput))
    }
}



 
export default connect(mapStateToProps, mapDispatchToProps)(GroupModal);


