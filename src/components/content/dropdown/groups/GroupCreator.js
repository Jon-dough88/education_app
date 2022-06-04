import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';

import { fetchUser } from '../../../../businessLogic/users/usersActions';
import { getRefreshToken } from '../../../../businessLogic/users/usersActions';
import { findGroupName } from '../../../../businessLogic/groups/groupActions';
import { fetchStudentList } from '../../../../businessLogic/groups/groupActions';
import StudentListItem from './StudentListItem';

import { required, maxLengthValue, minLengthValue } from '../../../../utils/validations';

 

import './Groups.css'

// class GroupCreator extends Component {

    // constructor(){
    //     super()
    //     this.state = {
    //         groupName: '',
    //         students: [],
    //         level: ''  
    //     }
    // }


    

    // render() { 


        const validationField = ({input, label, type, meta: {touched, error, warning}}) => (

            <div className="validation-field-container">
                {/* <label>{label}</label> */}
                <div >
                    <input 
                    className="input" {...input} placeholder={label} type={type} 
                    ></input>    
                </div>
                <div className="error-container">
                    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
                </div>
            </div>
        )

        let GroupCreator = props => {
            
            const { handleSubmit, pristine, reset, submitting } = props

            return (
                <div className="jumbotron group-creation-menu">
                    <div className="row">
                        <div className="col col-lg-12 col-sm-6">
                            <h1>Group Creation Menu</h1>
                        </div>
                        <div className="col col-lg-12 col-sm-6">
                            <form className="form-inline justify-content-center" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <Field className="form-control form-control-lg" 
                                    name="groupName"
                                    component={validationField}
                                    type="input"
                                    label="Group name"
                                    validate={[required]}
                                    // onChange={(e)=> { this.handleKeyPress(e) }}
                                    />
                                </div>
                                <div className="form-group">
                                    <div className="groupLevel_container">
                                        {/* <label> */}
                                            <Field name="groupLevel" className="groupLevel_btn" component="input" type="radio" value="L1" />{' '}
                                            L1
                                        {/* </label> */}
                                        <label>
                                            <Field name="groupLevel" component="input" type="radio" value="L2" />{' '}
                                            L2
                                        </label>
                                        <label>
                                            <Field name="groupLevel" component="input" type="radio" value="L3" />{' '}
                                            L3
                                        </label>
                                        </div>
                                    </div>
                                <div>
                                <button className="btn btn-lg btn-primary createGroup-btn" type="submit" disabled={pristine || submitting}>Create</button>
                    
                                <button className="btn btn-lg btn-warning" type="button" disabled={pristine || submitting} onClick={reset}>Clear</button>   
                             </div>


                            </form>

                        </div>
                    </div>
                    
                </div>    
            )
        }

        // return ( 
        //     <div className="card group-creation-menu">
        //         <div className="card-body">
        //             <form className="form-inline justify-content-center" id="group-creation-form">
        //                 {/* <div><h1>{this.props.userName}'s Groups</h1></div> */}
        //                 <div className="form-group groups-formGroup">
        //                     <label for="group-name">Group name: </label>
        //                     <input type="text" name="groupName" className="form-control groups-input" id="group-name" aria-describedby="group-name" onChange={(e)=> { this.handleKeyPress(e) }}></input>
                            
        //                     {groupNameExists === true && 
        //                     <div className="alert alert-danger groupExists">
        //                         {this.props.message}
        //                     </div>
        //                     }
        //                 </div>
        //                 <div className="form-group groups-formGroup">
        //                     <label for="student-search">Add a student (click on the searchbar to choose): </label>
                            
        //                     <input type="search" id="student-search" className="form-control groups-input" onFocus={(e) => {this.handleStudentList(e)}}></input>
                            
                            
                           
                            
        //                     <button className="btn btn-primary btn-lg">Add</button>
                         
        //                     {/* <div className="student_list_container">
                                

        //                         {studentList.map(student => (

        //                             <StudentListItem key={student.student_id} student={student} />
                                    
        //                         ))}

                           

        //                     </div> */}
                      
        //                 </div>
        //                 <div className="form-group">
        //                     <button className="btn-lg level-btn" >3p</button>
        //                     <button className="btn-lg level-btn" >4p</button>
        //                     <button className="btn-lg level-btn" >5p</button>
        //                 </div>
        //                 <div className="form-group">
        //                     <button type="submit" className="btn btn-primary btn-lg create-group-btn">Create Group</button>
        //                 </div>
        //                 <a href="/groups">
        //                     <h5><strong>Back to the group menu</strong></h5>
        //                 </a>
        //             </form>
        //         </div>
        //     </div>
        //  );
    // }
// }




GroupCreator = reduxForm({
    form: 'groupCreationPage'
})(GroupCreator)

 
export default GroupCreator;