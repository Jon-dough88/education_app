import React, { Component} from 'react';

import './StudentListItem.css';


class StudentListItem extends Component {

    constructor(props) {
        super(props);

    }

    
    render() { 
        return ( 
            <div className="btn btn-success" id={this.props.student.student_id}>
                <p>Student name: {this.props.student.studentName}</p>
                {/* <br></br>
                <p>Student id: {this.props.student.student_id}</p> */}
            
            </div>
         );
    }
}
 
export default StudentListItem;